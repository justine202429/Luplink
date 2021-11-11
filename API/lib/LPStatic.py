import linkpredict as lp
import json
import os
import pprint
from pint import UnitRegistry
import time

"""This script interfaces with the python-linkpredict library for static link budget calculation"""

# Choosing the output values of Link Predict

k = lp.LinkBudgetKeys
fields = (
    k.tx_amplifier_power,
    k.tx_circuit_loss,
    k.tx_antenna_gain,
    k.eirp,
    k.slant_range,
    k.tx_antenna_angle,
    k.free_space_path_loss,
    k.medium_loss,
    k.total_path_loss,
    k.received_isotropic_signal_level,
    k.rx_antenna_angle,
    k.rx_antenna_gain,
    k.rx_circuit_loss,
    k.rx_system_noise_temperature,
    k.g_t_figure_of_merit,
    k.received_noise_power_density,
    k.cno_ratio,
    k.bit_rate,
    k.ebno_ratio,
    k.ebno_ratio_threshold,
    k.ebno_ratio_margin,
    # k.received_power,
)

# The use of pint increases the response time to 3ms instead of 1ms approximately
ureg = UnitRegistry(autoconvert_offset_to_baseunit=True)
ureg.define(
    "decibelwatt = 1 watt; logbase: 10; logfactor: 10 = dBW"
)  # Adding support for dBW

# We should use a similar naming convention to linkpredict
expected_units = {
    "slantRange": "m",
    "frequency": "Hz",
    "bandwidth": "Hz",
    "power": "dBW",
    "txCableLoss": "dB",
    "txConnectorLoss": "dB",
    "txAntennaMismatch": "dB",
    "antBeamWidth": "°",
    "antMaxGain": "dBi",
    "depointingAngle": "°",
    "depointingLoss": "dB",
    "depointing_loss": "dB",
    "rxAntennaTemp": "K",
    "rxInlineLoss": "dB",
    "LNA_gain": "dB",
    "LNANoiseTemp": "K",
    "receiverTemp": "K",
    "impl_loss": "dB",
    "x_pol": "dB",
    "atm_gas": "dB",
    "ionospheric": "dB",
    "bit_rate": "bps",
    "ebno_threshold": "dB",
}


class Component:
    """
    This represents a component such as Transmitter, Geometry or Carrier
    and allows for easy access to its properties.
    """

    def __init__(self, data, componentName, verbose=False):
        self.component = data[componentName]
        # See also to_base_units()
        # if verbose: print(self.component)

    def getValue(self, entryName):
        return float(self.component[entryName]["value"])

    def getUnit(self, entryName):
        return self.component[entryName]["unit"]

    def getEntry(self, entryName):
        value = float(self.component[entryName]["value"]) * ureg(
            self.component[entryName]["unit"]
        )
        try:
            value.ito(expected_units[entryName])
        except Exception as e:
            print("\nNo default value provided for conversion. You might need to add them to the expected_units array")
            print(entryName + str(value.magnitude) + str(value.units))
            print(repr(e))
            pass
        return value.magnitude, str(value.units)
        # return float(self.component[entryName]["value"]), self.component[entryName]["unit"]

    def getSubComponent(self, componentName):
        return Component(self.component, componentName)


def calculateLinkBudget(data, verbose=False):
    t1 = time.time()
    if verbose:
        print("Link Budget calculation using linkpredict")

    geometry = Component(data, "geometry", verbose)

    # Add option to run only one of the two calculations
    UL_result = compute_link(data["uplink"], geometry, verbose)
    DL_result = compute_link(data["downlink"], geometry, verbose)

    uplink = []
    downlink = []
    # TODO : We need to format this output in order to have a more robust API and less logic in front-end
    # Fields are all the available field given by linkpredict
    for field in fields:
        uplink.append(
            {
                "name": field.name,
                "value": UL_result[field],
                "unit": field.unit,
            }
        )
        downlink.append(
            {
                "name": field.name,
                "value": DL_result[field],
                "unit": field.unit,
            }
        )

    out = {"uplink": uplink, "downlink": downlink}

    if verbose:
        pprint.pprint(out)
    t2 = time.time()
    if verbose:
        print("Served request in %s seconds" % str(t2 - t1))
    return json.dumps(out)


def compute_link(data, geometry, verbose):

    tx = Component(data, "transmitter", verbose)
    rx = Component(data, "receiver", verbose)
    tx_antenna = Component(data, "transmitter_antenna", verbose)
    rx_antenna = Component(data, "receiver_antenna", verbose)
    carrier = Component(data, "carrier", verbose)
    atm = Component(data, "atmosphere", verbose)

    # G/S Transmitter #TODO change names

    line_losses, u_line_losses = tx.getEntry("txCableLoss")
    connector_losses, u_connector_losses = tx.getEntry("txConnectorLoss")
    antenna_mismatch_gain, u_antenna_mismatch_gain = tx.getEntry("txAntennaMismatch")
    GS_power, u_GS_power = tx.getEntry("power")
    GS_antenna_gain, u_GS_antenna_gain = tx_antenna.getEntry("antMaxGain")
    GS_antenna_beam_3db_width, u_GS_antenna_beam_3db_width = tx_antenna.getEntry(
        "antBeamWidth"
    )
    # tx_antenna_angle, u_GS_antenna_angle = tx_antenna.getEntry("depointingAngle")

    cables = lp.Device(gain=line_losses)
    connectors = lp.Device(gain=connector_losses)
    antenna_mismatch = lp.Device(gain=antenna_mismatch_gain)
    transmitter = lp.Transmitter(
        amplifier_power=GS_power, devices=[cables, antenna_mismatch, connectors]
    )
    transmit_antenna = lp.MainLobeAntenna(
        peak_gain=GS_antenna_gain,
        beam_3db_width=GS_antenna_beam_3db_width,
        linear_polarized=True,
    )  # By default circular polarization, setting to linear polarization to avoid unknown losses

    # Path (Watch out: medium losses are > 0 while devices are algebric)
    x_pol, u_x_polarization = atm.getEntry("x_pol")
    atm_gases, u_atm_gases = atm.getEntry("atm_gas")
    ionospheric, u_ionospheric = atm.getEntry("ionospheric")
    depointing, u_depointing = atm.getEntry("depointing_loss")

    x_polarization = lp.SimpleMediumLoss(medium_loss=-x_pol)
    atm_gases = lp.SimpleMediumLoss(medium_loss=-atm_gases)
    ionospheric = lp.SimpleMediumLoss(medium_loss=-ionospheric)
    depointing = lp.SimpleMediumLoss(medium_loss=-depointing)
    medium_losses = [x_polarization, atm_gases, ionospheric, depointing]

    # Channel
    frequency, u_frequency = carrier.getEntry("frequency")
    bit_rate, u_bit_rate = carrier.getEntry("bit_rate")
    ebno_threshold, u_ebno_threshold = carrier.getEntry("ebno_threshold")
    implementation_loss, u_implementation_loss = carrier.getEntry("impl_loss")

    modulation = lp.DigitalModulation(
        bit_rate=bit_rate, ebno_ratio_threshold=ebno_threshold
    )  # Modulation_loss is not implementation_loss # modulation_loss=implementation_loss)
    channel = lp.Channel(frequency=frequency, modulation=modulation)

    # Receiver

    # TODO: Get Antenna data
    SC_antenna_gain, u_SC_antenna_gain = rx_antenna.getEntry("antMaxGain")
    SC_antenna_beam_3db_width, u_SC_antenna_beam_3db_width = rx_antenna.getEntry(
        "antBeamWidth"
    )
    # rx_antenna_angle, u_SC_antenna_angle = rx_antenna.getEntry("depointingAngle")
    # SC_antenna_gain=2.15
    # SC_antenna_beam_3db_width = 35

    receive_antenna = lp.OmniDirectionalAntenna(
        gain=SC_antenna_gain, linear_polarized=True
    )

    rx_ant_noise_temp, u_rx_ant_noise_temp = rx.getEntry("rxAntennaTemp")
    rx_inline_losses, u_rx_inline_losses = rx.getEntry("rxInlineLoss")
    # LNA
    LNA_gain, u_LNA_gain = rx.getEntry("LNA_gain")
    LNA_noise_temperature, u_LNA_noise_temperature = rx.getEntry("LNANoiseTemp")
    # receiver_temperature, u_receiver_temperature = rx.getEntry("receiverTemp")

    receive_antenna_noise = lp.SimpleAntennaNoise(noise_temperature=rx_ant_noise_temp)
    
    inline_losses = lp.Device(gain=rx_inline_losses)
    LNA = lp.Device(gain=LNA_gain, noise_temperature=LNA_noise_temperature)
    #LNA_remove = lp.Device(gain=-LNA_gain, noise_temperature=0) #This is used in order to remove the LNA from the Eb/N0 while keeping its noise
    receiver = lp.Receiver(
        noise_temperature=0, devices=[inline_losses] #LNA is not technically a part of the receiver since it only exists through its temperature
    )
    receiver = lp.Receiver(noise_temperature=0, devices=[LNA,]) #second_stage])
    ts = receiver.get_system_noise_temperature() #We use a virtual receiver to get the system temperature
    receiver = lp.Receiver(noise_temperature = ts) #And then use it in another receiver without internal gains to mimic AMSAT behavior
    # RX antenna angle seems to have no effect on losses
    slant_range, u_slant_range = geometry.getEntry("slantRange")
    linkGeometry = lp.SimpleGeometry(
        slant_range=slant_range,
        tx_antenna_angle=0,
        rx_antenna_angle=0,
    )
    # ========== Link budget ==========
    link = lp.Link(
        channel=channel,
        geometry=linkGeometry,
        medium_losses=medium_losses,
        transmitter=transmitter,
        transmit_antenna=transmit_antenna,
        receive_antenna=receive_antenna,
        receive_antenna_noise=receive_antenna_noise,
        receiver=receiver,
    )

    budget = link.calculate_link_budget()
    # We use a function to fix all the things that we would like to have calculated differently
    
    # budget[k.g_t_figure_of_merit] -= LNA_gain
    # budget[k.cno_ratio] -= LNA_gain
    # budget[k.ebno_ratio] -= LNA_gain
    # budget[k.ebno_ratio_margin] -= LNA_gain

    # print('#####\n')
    # print(budget[k.rx_antenna_pointing_loss])
    # print(budget[k.tx_antenna_pointing_loss])
    # print(budget[k.rx_system_noise_temperature])
    return budget


if __name__ == "__main__":
    print("Execution of this file is only intended for testing & debugging purposes")
    print(os.getcwd())
    with open(os.getcwd() + "/lib/sample.json") as file:
        calculateLinkBudget(json.load(file), verbose=True)

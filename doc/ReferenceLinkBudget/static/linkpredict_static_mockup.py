import linkpredict as lp
import pprint

from linkpredict.antenna import noise

#Parameters chosen in mockup_uplink file
freq = 146e6
slant_range = 2045e3
#G/S Transmitter

cables = lp.Device(gain=-2.79)
connectors = lp.Device(gain=-1.7)
antenna_mismatch = lp.Device(gain=-0.5)
transmitter = lp.Transmitter(amplifier_power=10, devices=[cables, connectors, antenna_mismatch])

transmit_antenna = lp.MainLobeAntenna(peak_gain=14.0, beam_3db_width=35.0) #By default circular polarization

#Path (Watch out: medium losses are > 0 while devices are algebric)

geometry = lp.SimpleGeometry(slant_range=slant_range, tx_antenna_angle=10, rx_antenna_angle=0)#RX antenna angle seems to have no effect on losses
x_polarization = lp.SimpleMediumLoss(medium_loss=3.0)#Polarization is put here since the implementation in the Antenna class isn't finished
atm_gases = lp.SimpleMediumLoss(medium_loss=1.1)
ionospheric = lp.SimpleMediumLoss(medium_loss=0.4)
medium_losses = [x_polarization, atm_gases, ionospheric]

#Channel

modulation = lp.DigitalModulation(bit_rate=1200, ebno_ratio_threshold=23.2)
channel = lp.Channel(frequency = freq, modulation=modulation)

#Receiver

receive_antenna = lp.OmniDirectionalAntenna(gain=2.15, linear_polarized=False)#The polarization is taken equal to 3dB so I used the equation provided by AMSAT and plugged the value as a medium loss
receive_antenna_noise = lp.SimpleAntennaNoise(noise_temperature=233.15) #Valeur prise par dichotomie pour avoir un system_noise de 300K étant donné que les calculs de température ne concordent pas
inline_losses = lp.Device(gain=-0.87)
second_stage = lp.Device(gain=0, noise_temperature=150)
LNA = lp.Device(gain = 20, noise_temperature= 66.78)
#second_stage = lp.Device(noise_temperature=400)
#LNA

# noise_temp ~= T0 ? No, because T0 is the ref temp. Noise temperature of the receiver backend [K]
receiver = lp.Receiver(noise_temperature=0, devices=[LNA, second_stage])
ts = receiver.get_system_noise_temperature
receiver = lp.Receiver(noise_temperature = ts)
#Link budget
link = lp.Link(
    channel=channel,
    geometry=geometry,
    medium_losses=medium_losses,
    transmitter=transmitter,
    transmit_antenna=transmit_antenna,
    receive_antenna=receive_antenna,
    receive_antenna_noise=receive_antenna_noise,
    receiver=receiver)
result = link.calculate_link_budget()

pprint.pprint(result)
#print(result[lp.LinkBudgetKeys.rx_system_noise_temperature])
#print(result[lp.LinkBudgetKeys.g_t_figure_of_merit]) 
#Figure of merit pretty close but not yet

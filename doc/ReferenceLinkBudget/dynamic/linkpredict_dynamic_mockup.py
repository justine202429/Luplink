import linkpredict as lp
import pprint
from math import floor
from datetime import datetime, timedelta
from skyfield.positionlib import ICRF
from skyfield.api import wgs84, load
import matplotlib.pyplot as plt
import matplotlib.dates as mdates

start = datetime(2021, 1, 13, 5, 33)
end = datetime(2021, 1, 13, 6, 3)
time_step = timedelta(seconds=10)

#Parameters chosen in mockup_uplink file
freq = 146e6

minimum_elevation = 10
#G/S Transmitter

cables = lp.Device(gain=-2.79)
connectors = lp.Device(gain=-1.7)
antenna_mismatch = lp.Device(gain=-0.5)
transmitter = lp.Transmitter(amplifier_power=10, devices=[cables, connectors, antenna_mismatch])
transmit_antenna = lp.MainLobeAntenna(peak_gain=14.0, beam_3db_width=12.0) #By default circular polarization

#Path (Watch out: medium losses are > 0 while devices are algebric)
x_polarization = lp.SimpleMediumLoss(medium_loss=3.0)#Polarization is put here since the implementation in the Antenna class isn't finished
atm_gases = lp.SimpleMediumLoss(medium_loss=1.1)
ionospheric = lp.SimpleMediumLoss(medium_loss=0.4)
medium_losses = [x_polarization, atm_gases, ionospheric]


#Geometry

gs_lat = 55.6167  # deg
gs_lon = 12.65  # deg
gs_alt = 5  # m
omm_json = '{"OBJECT_NAME":"CUTE-1 (CO-55)","OBJECT_ID":"2003-031E","EPOCH":"2021-01-29T12:54:58.602528","MEAN_MOTION":14.22284923,"ECCENTRICITY":0.0010811,"INCLINATION":98.6818,"RA_OF_ASC_NODE":39.8466,"ARG_OF_PERICENTER":118.4331,"MEAN_ANOMALY":241.7937,"EPHEMERIS_TYPE":0,"CLASSIFICATION_TYPE":"U","NORAD_CAT_ID":27844,"ELEMENT_SET_NO":999,"REV_AT_EPOCH":91223,"BSTAR":4.3786e-5,"MEAN_MOTION_DOT":5.4e-7,"MEAN_MOTION_DDOT":0}'

sat_antenna = wgs84.latlon(gs_lat, gs_lon, gs_alt)

#We need to override the get_tx / get_rx gains functions in order to have non-zero depointing errors
class MyGeometry(lp.GroundstationSatelliteGeometry):
    def __init__(self, gs_lat, gs_lon, gs_alt, cat_number=None, tle=None, omm_json=None):
        super().__init__(gs_lat, gs_lon, gs_alt, cat_number, tle, omm_json)
        self.angle_rate = 2
        self.current_error=0
        
    # def get_tx_antenna_angle(self, time):
    #     #Here the depointing error is due to the limited angular speed of the antenna
    #     #The elevation rate increases as the satellite comes closer, the antenna cannot follow and then the elevation rate becomes negative and lower so the antenna catches up
    #     #Here this is a simplified 2D-model. We don't take azimuth into account, this is not accurate
        
    #     d_elevation = (self.get_elevation(time+time_step)-self.get_elevation(time))/time_step.seconds
    #     d
    #     self.current_error+=d_elevation*time_step.seconds
    #     #print(d_elevation)
    #     if self.angle_rate*time_step.seconds<abs(self.current_error):
    #         self.current_error = self.current_error + (self.current_error<0)*self.angle_rate*time_step.seconds - (self.current_error>0)*self.angle_rate*time_step.seconds
    #     else :
    #         self.current_error = 0
        
    #     return self.current_error
    
    def get_tx_antenna_angle(self,  time):
        #Here the depointing error is due to the delay of known positions
             
        vector=self.get_range_vector(time)
        vector_after = self.get_range_vector(time+time_step)
        delta_angle = vector.separation_from(vector_after).degrees
        
        #The antenna receives positions information with some delay
        return delta_angle*self.angle_rate
        
geometry = MyGeometry(gs_lat, gs_lon, gs_alt, omm_json=omm_json)

#Channel
modulation = lp.DigitalModulation(bit_rate=1200, ebno_ratio_threshold=23.2)
channel = lp.Channel(frequency = freq, modulation=modulation)

#Receiver
receive_antenna = lp.OmniDirectionalAntenna(gain=2.15, linear_polarized=False)#The polarization is taken equal to 3dB so I used the equation provided by AMSAT and plugged the value as a medium loss
receive_antenna_noise = lp.SimpleAntennaNoise(noise_temperature=230.4) #Valeur prise par dichotomie pour avoir un system_noise de 300K étant donné que les calculs de température ne concordent pas
inline_losses = lp.Device(gain=-0.87)
LNA = lp.Device(gain = 20, noise_temperature= 66.78)
#second_stage = lp.Device(noise_temperature=400)
#LNA
receiver = lp.Receiver(noise_temperature=280, devices=[LNA])

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


result = link.calculate_link_budget(start, end, time_step)

#Get elevation
time = start
elevation = []
depointing_angle = []
while time <= end:
    elevation.append(geometry.get_elevation(time))
    depointing_angle.append(geometry.get_tx_antenna_angle(time))
    time += time_step

k=lp.LinkBudgetKeys
time = [n[k.time] for n in result]
ebno = [n[k.ebno_ratio] for n in result]
slant_range = [n[k.slant_range]/1000 for n in result]

ebno = [ebno[i]*(elevation[i]>0) for i in range(0, len(elevation))]
# slant_range = [slant_range[i]*(elevation[i]>0) for i in range(0, len(elevation))]
print(max(depointing_angle))



#pprint.pprint(result)

fig, ax1 = plt.subplots()
ax2, ax3, ax4, = ax1.twinx(), ax1.twinx(), ax1.twinx()

ax1.plot(time, ebno, color='g')
# ax1.fill_between(time, ebno, 0, color="g")

ax1.tick_params('y', colors='g')
ax1.set_ylabel("Eb/No [dB]", color="g")
ax1.set_ylim(0, max(filter(None, ebno)) + 1)

# ax2.plot(time, elevation, color='b')
# ax2.tick_params('y', colors='b')
# ax2.set_ylabel("Elevation [deg]", color="b")
# ax2.set_ylim(0, 90)

ax4.plot(time, depointing_angle, color='y')
ax4.tick_params('y', colors='y')
ax4.set_ylabel("Depointing Angle [deg]", color="y")
ax4.set_ylim(min(depointing_angle), max(depointing_angle))
ax4.spines["right"].set_position(("outward", 30))

ax3.plot(time, slant_range, color='r')
ax3.tick_params('y', colors='r')
ax3.set_ylabel("Slant Range [km]", color="r")
ax3.spines["right"].set_position(("outward", 60))

ax1.set_xlabel("Time")
ax1.grid(True)
ax1.xaxis.set_major_formatter(mdates.DateFormatter("%m-%d %H:%M"))
fig.autofmt_xdate()
fig.tight_layout()

plt.show()
# -*- coding: utf-8 -*-
"""
@author: tgateau
"""

from optparse import OptionParser
import configparser
import math
import numpy as np
import json
import os
import csv
from pyquaternion import Quaternion




#elevation in degree
def getSlantRange(h,elevation=5,R_e=6378.136):
    r = h + R_e
    elevation = math.radians(elevation)
    return R_e*(math.sqrt((r**2/R_e**2-math.cos(elevation)**2))-math.sin(elevation)) 
   
#Slant Range in m 
def getFreeSpaceLoss(r,waveLength):
    """get free space losses according to radius, following a spherical model """
    return (4*math.pi*r/waveLength)**2

def getFreeSpaceLoss_dB(r,waveLength):
    return 22.0 + 20*math.log (r/waveLength,10)

def to_db(v):
    """convert to decibels """
    return math.log(float(v), 10) * 10

def from_db(v):
    """convert from dB """
    return 10**(float(v)/10.0)   
    
def compute_elevation_angle(Emin,Pos_EME_Sat,Pos_EME_Sta):
    """compute elevation angle over time given tables of satellite and station positions over time"""
    V_SS_2000 = [0]*len(Pos_EME_Sat)
    for i in range(len(Pos_EME_Sat)):
        V_SS_2000[i] = Pos_EME_Sta[i] - Pos_EME_Sat[i]
    Mag_Vss_2000 = np.linalg.norm(V_SS_2000)
    Mag_Pos_EME_Sta = np.linalg.norm(Pos_EME_Sta)
    Theta = np.degrees(math.acos(np.dot(np.asarray(Pos_EME_Sta),-np.asarray(V_SS_2000))/(Mag_Pos_EME_Sta*Mag_Vss_2000)))
    if Theta<=(90-Emin): Elevation_angle = 90-Theta
    else: Elevation_angle = 0
    return Elevation_angle 

def compute_doppler_shift(Pos_EME_Sat,Pos_EME_Sta,time,f,c):
    """compute doppler shift over time given tables of satellite, stations position and timescale, and transmitter frequency"""
    V_SS_2000 = [0]*len(Pos_EME_Sat)
    i = 0
    while i<len(Pos_EME_Sat):
        V_SS_2000[i] = Pos_EME_Sta[i] - Pos_EME_Sat[i]
        i+=1
    Mag_Vss_2000 = np.linalg.norm(V_SS_2000)
    position_dt = np.diff(Mag_Vss_2000)/np.diff(np.asarray(time))
    doppler_shift = -position_dt*f/c
    return doppler_shift
    

def compute_distance(pt_1, pt_2):
    pt_1 = np.array((pt_1[0], pt_1[1]))
    pt_2 = np.array((pt_2[0], pt_2[1]))
    return np.linalg.norm(pt_1-pt_2)

def closest_node(node, nodes):
    pt = []
    dist = 9999999
    for n in nodes:
        if compute_distance(node, n) <= dist:
            dist = compute_distance(node, n)
            pt = n
    return pt

def get_gain (el, az, el_az,gain):
    closest = closest_node([el,az], el_az)
    index = el_az.index(closest)
    gain = gain[index]
    return gain


class LinkBudgetAnalysis:
    def __init__(self,jsonData,verbose=False):
        """Provide data for link budget analysis"""
        self.verbose =   verbose  
        self.modeRadioHam = True
        if type(jsonData)==dict: #we suppose it is data formatted in json string
            if self.verbose: print ("Reading Json Data from a json dict")
            self.config = jsonData
        elif type(jsonData)==str:            
            if jsonData[-5:]==".json": #we suppose  data formatted in json string, in a json ascii file
                if self.verbose: print ("Reading Json Data from a json file")
                self.config = json.load(open(jsonData))                
            else: #configFilename[-4:]==".ini": #we suppose  it's a .ini file format
                if self.verbose: print ("Reading .ini Data from a .ini file")
                self.config = configparser.ConfigParser()
                self.config.read(jsonData)                 
        else:
            print("ERROR")
            print("=================")            
            print(jsonData)
            

            
    def loadOEM_AEM(self):
        print("Laoding OEM file...")
        self.load_satellite_OEM_data()
        print("Done\nLaoding AEM file...")
        self.load_satellite_AEM_data()   
        print("Done\nLaoding station_OEM file...")        
        self.load_station_OEM_data()
        print("Done")        

    def updateJson(self,jsonData):
        self.config.update(jsonData)
        
    
    #awfull way to update it, but mheeee, it's done !    
    def updateJsonUniqueKey(self,distantData):        
        for distantKey in  list(distantData.keys()):
            for k in list(self.config.keys()):
                #print("MENU "+ k)
                for kk in list(self.config[k].keys()):
                    #print("checking "+ kk)
                    if kk==distantKey:
                        if self.verbose:print(distantKey + " FOUND")
                        if not distantData[distantKey]==None:
                            self.config[k][kk] = distantData[distantKey]
                            if self.verbose:print(distantKey + " Updated")
                        

    def get_satellite_OEM_data(self):
            return self.oem_data
 
   
    def load_satellite_OEM_data(self):
        """"read satellite OEM file provided and extract the its data in a list"""
        #        nb_satellites = self.config['SPACECRAFT_FLIGHT_DYNAMICS']['nb_satellites']
        #        if nb_satellite==1:
        # Open the file
        file = self.config['SPACECRAFT_FLIGHT_DYNAMICS']['filename_sat_OEM']
        headerlines =  int(self.config['SPACECRAFT_FLIGHT_DYNAMICS']['headerlines_sat_OEM'])
        filename = os.path.join('data', file)
        f = open(filename, "r")
        # Read the contents
        contents = f.readlines()[headerlines:]
        f.close()
        # Split the data based on the comma delimmiter
        data = []
        for line in contents:
            coordinates = line.split() 
            data = data + coordinates
        self.oem_data = []
        saved_set = []
        tally = 0
        for value in data:
            if not(value == '\s'):
                val = float(value)
                tally += 1
                if tally < 5:
                    # save the data to the set
                    saved_set.append(val)
                elif tally == 5:
                    # Save the data and the set
                    saved_set.append(val)
                    self.oem_data.append(saved_set)
                else:
                    # Reset tally and saved saved set
                    saved_set = []
                    # Save the data and the set
                    saved_set.append(val)
                    tally = 1

        
        # self.oem_data is ready to be used
        
    #        else:
    #            satellites_OEM = []
    #            for i in range(nb_satellites):
    #                file = self.config['SPACECRAFT_FLIGHT_DYNAMICS']['filename_sat_OEM'+str(i+1)]
    #                headerlines = int(self.config['SPACECRAFT_FLIGHT_DYNAMICS']['headerlines_sat_OEM'+str(i+1)])
    #                filename = os.path.join('data', file)
    #                    f = open(filename, "r")
    #                    # Read the contents
    #                    contents = f.readlines()[headerlines:]
    #                    f.close()
    #                    # Split the data based on the comma delimmiter
    #                    data = []
    #                    for line in contents:
    #                        coordinates = line.split() 
    #                        data = data + coordinates
    #                    tot_saved = []
    #                    saved_set = []
    #                    tally = 0
    #                    for value in data:
    #                        if not(value == '\s'):
    #                            val = float(value)
    #                            tally += 1
    #                            if tally < 5:
    #                                # save the data to the set
    #                                saved_set.append(val)
    #                            elif tally == 5:
    #                                # Save the data and the set
    #                                saved_set.append(val)
    #                                tot_saved.append(saved_set)
    #                            else:
    #                                # Reset tally and saved saved set
    #                                saved_set = []
    #                                # Save the data and the set
    #                                saved_set.append(val)
    #                                tally = 1
    #                    satellites_OEM.append(tot_saved)
    #                return stallites_OEM
    
    
    def get_satellite_AEM_data(self):   
        return self.aem_data
    
    def load_satellite_AEM_data(self):
        #        nb_satellites = self.config['SPACECRAFT_FLIGHT_DYNAMICS']['nb_satellites']
        #        if nb_satellite==1:
         # Open the file
        file = self.config['SPACECRAFT_FLIGHT_DYNAMICS']['filename_sat_AEM']
        headerlines =  int(self.config['SPACECRAFT_FLIGHT_DYNAMICS']['headerlines_sat_AEM'])
        filename = os.path.join("data", file)
        f = open(filename, "r")
        # Read the contents
        contents = f.readlines()[headerlines:]
        f.close()
        # Split the data based on the delimmiter
        data = []
        for line in contents:
            coordinates = line.split() 
            data = data + coordinates
        self.aem_data = []
        saved_set = []
        tally = 0
        for value in data:
            if not(value == '\s'):
                val = float(value)
                tally += 1
                if tally < 6:
                    # save the data to the set
                    saved_set.append(val)
                elif tally == 6:
                    # Save the data and the set
                    saved_set.append(val)
                    self.aem_data.append(saved_set)
                else:
                    # Reset tally and saved saved set
                    saved_set = []
                    # Save the data and the set
                    saved_set.append(val)
                    tally = 1

        # self.aem_data ready
    #        else:
    #            satellites_AEM= []
    #            for i in range(nb_satellites):
    #                # Open the file
    #                file = self.config['SPACECRAFT_FLIGHT_DYNAMICS']['filename_sat_AEM'+str(i+1)]
    #                headerlines =  int(self.config['SPACECRAFT_FLIGHT_DYNAMICS']['headerlines_sat_AEM'+str(i+1)])
    #                filename = os.path.join("data", file)
    #                f = open(filename, "r")
    #                # Read the contents
    #                contents = f.readlines()[headerlines:]
    #                f.close()
    #                # Split the data based on the delimmiter
    #                data = []
    #                for line in contents:
    #                    coordinates = line.split() 
    #                    data = data + coordinates
    #                tot_saved = []
    #                saved_set = []
    #                tally = 0
    #                for value in data:
    #                    if not(value == '\s'):
    #                        val = float(value)
    #                        tally += 1
    #                        if tally < 6:
    #                            # save the data to the set
    #                            saved_set.append(val)
    #                        elif tally == 6:
    #                            # Save the data and the set
    #                            saved_set.append(val)
    #                            tot_saved.append(saved_set)
    #                        else:
    #                            # Reset tally and saved saved set
    #                            saved_set = []
    #                            # Save the data and the set
    #                            saved_set.append(val)
    #                            tally = 1
    #                satellites_AEM.append(tot_saved)
    #            return satellites_AEM
                

    def get_station_OEM_data(self):
        return self.station_oem_data


    def load_station_OEM_data(self):
#        nb_stations = self.config['GROUNDSTATION_LOCATION']['nb_ground_stations']
#        if nb_stations==1:
                    file = self.config['GROUNDSTATION_LOCATION']['filename_GS_OEM']
                    headerlines =  int(self.config['GROUNDSTATION_LOCATION']['headerlines_GS_OEM'])
                    filename = os.path.join('data', file)
                    f = open(filename, "r")
                    # Read the contents
                    contents = f.readlines()[headerlines:]
                    f.close()
                    # Split the data based on the comma delimmiter
                    data = []
                    for line in contents:
                        coordinates = line.split() 
                        data = data + coordinates
                    self.station_oem_data = []
                    saved_set = []
                    tally = 0
                    for value in data:
                        if not(value == '\s'):
                            val = float(value)
                            tally += 1
                            if tally < 5:
                                # save the data to the set
                                saved_set.append(val)
                            elif tally == 5:
                                # Save the data and the set
                                saved_set.append(val)
                                self.station_oem_data.append(saved_set)
                            else:
                                # Reset tally and saved saved set
                                saved_set = []
                                # Save the data and the set
                                saved_set.append(val)
                                tally = 1

#        else: 
#            stations_OEM = []
#            for i in range(nb_stations):
#                    file = self.config['GROUNDSTATION_LOCATION']['filename_sta_OEM'+str(i+1)]
#                    headerlines =  int(self.config['GROUNDSTATION_LOCATION']['headerlines_sta_OEM'+str(i+1)])
#                    filename = os.path.join('data', file)
#                    f = open(filename, "r")
#                    # Read the contents
#                    contents = f.readlines()[headerlines:]
#                    f.close()
#                    # Split the data based on the comma delimmiter
#                    data = []
#                    for line in contents:
#                        coordinates = line.split() 
#                        data = data + coordinates
#                    tot_saved = []
#                    saved_set = []
#                    tally = 0
#                    for value in data:
#                        if not(value == '\s'):
#                            val = float(value)
#                            tally += 1
#                            if tally < 5:
#                                # save the data to the set
#                                saved_set.append(val)
#                            elif tally == 5:
#                                # Save the data and the set
#                                saved_set.append(val)
#                                tot_saved.append(saved_set)
#                            else:
#                                # Reset tally and saved saved set
#                                saved_set = []
#                                # Save the data and the set
#                                saved_set.append(val)
#                                tally = 1
#                    stations_OEM.append(tot_saved)
#            return stations_OEM
         
           
    def getTimeStepList(self):
        Sat_OEM = self.get_satellite_OEM_data()
        TimeDay = []
        for line in Sat_OEM:
            TimeDay.append(line[0])    
        TimeSec = []
        for line in Sat_OEM:
            TimeSec.append(line[1])
        TimeScale = [0]*len(TimeSec)
        for i in range(len(TimeSec)):
            TimeScale[i] = TimeDay[i] + (TimeSec[i]/86400) - TimeDay[0]
            i += 1
        return TimeScale
    
    def getSatellitePositionList(self):
        Sat_OEM = self.get_satellite_OEM_data()
        Pos_EME_Sat =[]   
        for line in Sat_OEM:
            Pos_EME_Sat.append(line[-3:])
        return Pos_EME_Sat
        
    def getStationPositionList(self):
        Station_OEM = self.get_station_OEM_data()
        Pos_EME_Sta =[]   
        for line in Station_OEM:
            Pos_EME_Sta.append(line[-3:])
        return Pos_EME_Sta

    def getSatelliteAttitudeQuaternionList(self):
        Sat_AEM = self.get_satellite_AEM_data()
        Q_Sat_2000 = []
        for line in Sat_AEM:
            Q_Sat_2000.append(line[-4:])
        return Q_Sat_2000
    
    def getStationSatelliteVectorList(self):
        Pos_EME_Sat = self.getSatellitePositionList() 
        Pos_EME_Sta = self.getStationPositionList()   
        V_SS_2000 = []
        for i in range(len(Pos_EME_Sat)):
            vect = np.asarray(Pos_EME_Sta[i]) - np.asarray(Pos_EME_Sat[i])
            V_SS_2000.append(vect)
        return V_SS_2000
    
    def getStationSatelliteDistanceList(self):
        V_SS_2000 = self.getStationSatelliteVectorList()
        Mag_Vss_2000 = []
        for vect in V_SS_2000:
            Mag_Vss_2000.append(np.linalg.norm(vect))
        return Mag_Vss_2000
                
    def getAntennaGainTable(self):
        file = self.config['SPACECRAFT_ANTENNA']['filename_ant_gain']
        filename = os.path.join('data', file)
        f = open(filename, "r")
        has_header = csv.Sniffer().has_header(f.read())
        f.seek(0)
        if has_header:
            next(f) #skip header row
        content = csv.reader(f, delimiter=';', quoting=csv.QUOTE_NONNUMERIC)
        el_az = []
        gain = []
        for row in content: 
            el_az.append([row[0],row[1]])
            gain.append(row[2])
        return el_az,gain


    def compute_downlink_losses(self):
        return self.compute_downlink_transmitter_losses() + self.compute_downlink_path_losses() + self.compute_downlink_receiver_losses()
    
    def compute_downlink_losses_dynamic(self):
        losses = self.compute_downlink_path_losses_dynamic()
        for loss in losses:
            loss += self.compute_downlink_transmitter_losses_dynamic() + self.compute_downlink_receiver_losses_dynamic()
        return losses
    
    def compute_downlink_transmitter_losses(self):
        losses_internalSat = 0
        losses_internalSat += float(self.config['SPACECRAFT_TRANSMITTER']['SC_misc'])   
        losses_internalSat += float(self.config['SPACECRAFT_TRANSMITTER']['SC_loss_cable_tx'])   
        losses_internalSat += float(self.config['SPACECRAFT_TRANSMITTER']['SC_loss_connector_tx'])   
        losses_internalSat +=  float(self.config['SPACECRAFT_TRANSMITTER']['SC_loss_feeder_tx'])     
        losses_internalSat +=  float(self.config['SPACECRAFT_TRANSMITTER']['SC_loss_point_tx'])   
        return losses_internalSat
    
    def compute_downlink_transmitter_losses_dynamic(self):
        losses_internalSat = 0
        losses_internalSat += float(self.config['SPACECRAFT_TRANSMITTER']['SC_misc'])   
        losses_internalSat += float(self.config['SPACECRAFT_TRANSMITTER']['SC_loss_cable_tx'])   
        losses_internalSat += float(self.config['SPACECRAFT_TRANSMITTER']['SC_loss_connector_tx'])   
        losses_internalSat +=  float(self.config['SPACECRAFT_TRANSMITTER']['SC_loss_feeder_tx'])
        # Removing pointing loss (worst case) as attitude and antenna gain are computed dynamicaly
        return losses_internalSat

    def compute_downlink_receiver_losses(self):
        losses_internalGrd = 0
        losses_internalGrd += float(self.config['GROUND_STATION_RECEIVER']['GS_loss_point_rx'])   
        losses_internalGrd += float(eval(self.config['GROUND_STATION_RECEIVER']['GS_loss_cable_rx']))             
        losses_internalGrd += float(self.config['GROUND_STATION_RECEIVER']['GS_loss_connector_rx'])   
        losses_internalGrd += float(self.config['GROUND_STATION_RECEIVER']['GS_loss_cable_D_rx'])         
        return losses_internalGrd
    
    def compute_downlink_receiver_losses_dynamic(self):
        return self.compute_downlink_receiver_losses() #same as static for now, implement ground antenna pointing later

    def computeAdditionalAtmLosses(self):  
        additionalAtmLosses = 0
        additionalAtmLosses += float(self.config['PROPAGATION_LOSSES']['loss_pol']) 
        additionalAtmLosses += float(self.config['PROPAGATION_LOSSES']['loss_atm']) 
        additionalAtmLosses += float(self.config['PROPAGATION_LOSSES']['loss_scin']) 
        additionalAtmLosses += float(self.config['PROPAGATION_LOSSES']['loss_rain']) 
        additionalAtmLosses += float(self.config['PROPAGATION_LOSSES']['loss_cloud']) 
        additionalAtmLosses += float(self.config['PROPAGATION_LOSSES']['loss_si']) 
        additionalAtmLosses += float(self.config['PROPAGATION_LOSSES']['loss_misc'])   
        return additionalAtmLosses


    def compute_uplink_transmitter_losses(self):
        losses_internalGS = 0
        losses_internalGS += float(self.config['GROUND_STATION_TRANSMITTER']['GS_line_loss_tx'])   
        losses_internalGS += float(self.config['GROUND_STATION_TRANSMITTER']['GS_loss_connector_tx'])   
        losses_internalGS += float(self.config['GROUND_STATION_TRANSMITTER']['GS_loss_point_rx'])   
        return losses_internalGS
    
    def compute_uplink_transmitter_losses_dynamic(self):
        return self.compute_uplink_transmitter_losses()  #same as static for now, implement ground antenna pointing later
        
    def compute_uplink_receiver_losses(self):
        losses_internalSC = 0
        losses_internalSC += float(self.config['SPACECRAFT_RECEIVER']['SC_loss_point_rx'])   
        losses_internalSC += float(eval(self.config['SPACECRAFT_RECEIVER']['SC_loss_cable_rx']))             
        losses_internalSC += float(self.config['SPACECRAFT_RECEIVER']['SC_loss_connector_rx'])         
        return losses_internalSC
    
    def compute_uplink_receiver_losses_dynamic(self):
        losses_internalSC = 0
        # Removing pointing loss (worst case) as attitude and antenna gain are computed dynamicaly
        losses_internalSC += float(eval(self.config['SPACECRAFT_RECEIVER']['SC_loss_cable_rx']))             
        losses_internalSC += float(self.config['SPACECRAFT_RECEIVER']['SC_loss_connector_rx'])         
        return losses_internalSC

    def compute_uplink_losses(self):
        return self.compute_uplink_transmitter_losses() + self.compute_uplink_path_losses() + self.compute_uplink_receiver_losses()

    def compute_uplink_losses_dynamic(self):
        losses = self.compute_uplink_path_losses_dynamic()
        for loss in losses:
            loss += self.compute_uplink_transmitter_losses_dynamic()  + self.compute_uplink_receiver_losses_dynamic()
        return losses


    def compute_downlink_path_losses(self):
        c = float(self.config['CONSTANTS']['c'])
        f = float(self.config['DOWNLINK']['frequency']) 
        waveLength = c/f        
        return self.computePathLosses(waveLength)
    
    def compute_downlink_path_losses_dynamic(self):
        c = float(self.config['CONSTANTS']['c'])
        f = float(self.config['DOWNLINK']['frequency']) 
        waveLength = c/f        
        return self.computePathLossesDynamic(waveLength)
       
       
    def compute_uplink_path_losses(self):
        c = float(self.config['CONSTANTS']['c'])
        f = float(self.config['UPLINK']['frequency']) 
        waveLength = c/f        
        return self.computePathLosses(waveLength)

    def compute_uplink_path_losses_dynamic(self):
        c = float(self.config['CONSTANTS']['c'])
        f = float(self.config['UPLINK']['frequency']) 
        waveLength = c/f        
        return self.computePathLossesDynamic(waveLength)


    def computePathLosses(self,waveLength):   
        additionalAtmLosses = self.computeAdditionalAtmLosses()  
        altitude = float(self.config['SPACECRAFT_FLIGHT_DYNAMICS']['SC_altitude'])
        try:
            elevation = float(self.config['GROUNDSTATION_LOCATION']['minElevation'])
        except KeyError:
            elevation = 5
           
        sr = getSlantRange(altitude,elevation)     
        if self.verbose: print("SR (km): "+str(sr))        
        fsl = getFreeSpaceLoss(sr*1000,waveLength)
        FSL_dB = to_db(fsl)
        if self.verbose: print("FSL_dB: "+str(FSL_dB))  
        if self.verbose: print("additionalAtmLosses (dB): "+str(additionalAtmLosses))          
        lossesSum = FSL_dB +additionalAtmLosses  
        return lossesSum
    
    def computePathLossesDynamic(self,wavelength):
        additionalAtmLosses = self.computeAdditionalAtmLosses()
        lossesSum = []
        Mag_Vss_2000 = self.getStationSatelliteDistanceList()
        for distance in Mag_Vss_2000:
            lossesSum.append(getFreeSpaceLoss_dB(1000*distance,wavelength)+additionalAtmLosses)
        return lossesSum
    
    def computeGroundStationAntennaGain(self):
        try:
            eta_r = float(self.config['DOWNLINK']['eta_rx'])
            D=float(self.config['DOWNLINK']['antennaDiameter'])
            
            c = float(self.config['CONSTANTS']['c'])
            f = float(self.config['DOWNLINK']['frequency']) 
            waveLength = c/f   
            
            gain_r = eta_r * (math.pi * D / waveLength)**2
            if self.verbose: print("gain_r:"+str(gain_r))
            gain_r_dB = to_db(gain_r)
        except KeyError: #antennaDiameter
            gain_r_dB = float(self.config['GROUND_STATION_RECEIVER']['GS_ant_gain_rx'])
        return gain_r_dB
    
    def computeDownlinkNoisePowerSpectralDensity(self):
        k_dB = float(self.config['CONSTANTS']['k_dB']) 
        T_r = float(self.config['GROUND_STATION_RECEIVER']['GS_noise_T']) #Kelvin
        T_r_dB = to_db(T_r)
        return k_dB + T_r_dB
    
    def computeUplinkNoisePowerSpectralDensity(self):
        k_dB = float(self.config['CONSTANTS']['k_dB'])
        try:    
            T_r = float(self.config['SPACECRAFT_RECEIVER']['SC_noise_T']) #Kelvin
            T_r_dB = to_db(T_r)
        except KeyError:
            NF = float(self.config['SPACECRAFT_RECEIVER']['SC_NF_rx'])
            T_r = 280 * ((10**(NF/10))-1)
            T_r_dB = to_db(T_r)
        return k_dB + T_r_dB
    
          
    def computeC_N0_downlink(self):
        """According to config file, return raw link budget margin in dB"""   
        
        epsilon = math.radians(5) #radians  #TODO config 
        R_e = float(self.config['CONSTANTS']['radius_earth'])
        altitude = float(self.config['SPACECRAFT_FLIGHT_DYNAMICS']['SC_altitude'])
        r = altitude + R_e


        ###################
        if self.verbose: print("RECEIVER")
            
        ############
        #calculating gain
        try:
            eta_r = float(self.config['DOWNLINK']['eta_rx'])
            D=float(self.config['DOWNLINK']['antennaDiameter'])
            
            c = float(self.config['CONSTANTS']['c'])
            f = float(self.config['DOWNLINK']['frequency']) 
            waveLength = c/f   
            
            gain_r = eta_r * (math.pi * D / waveLength)**2
            if self.verbose: print("gain_r:"+str(gain_r))
            gain_r_dB = to_db(gain_r)
        except KeyError: #antennaDiameter
            gain_r_dB = float(self.config['GROUND_STATION_RECEIVER']['GS_ant_gain_rx'])
        
    
        if self.verbose: print("gain_r (dBi):"+str(gain_r_dB))
        
    
        if self.verbose: print("PATH AND LOSSES")
        k_dB = float(self.config['CONSTANTS']['k_dB']) 
        #pylink.utils.from_db(3)           
        if self.verbose: print("k_dB (dB):"+str(k_dB))
        losses = self.compute_downlink_losses()
        if self.verbose: print("losses:"+str(losses))
        
        
        ##################
        if self.verbose: print("TRANSMITTER")
        T_r = float(self.config['DOWNLINK']['T_rx']) #Kelvin
        if self.verbose: print("T_r (K):"+str(T_r))         
        T_r_dB = to_db(T_r)
        if self.verbose: print("T_r_dB (dB):"+str(T_r_dB))               
            
        if self.modeRadioHam: 
            gain_tx_dB = float(self.config['SPACECRAFT_TRANSMITTER']['SC_ant_gain_tx'])
            
            if self.verbose: print("gain_tx_dB (dBi):"+str(gain_tx_dB))
            #gain_tx_dB = gain_tx_dBi/2.14
            #if self.verbose: print("gain_tx_dB (dB):"+str(gain_tx_dB))              
                
            
            #P_t = float(self.config['SPACECFRACT_TRANSMITTER']['SC_power_tx']) 
            #P_t_dB = to_db(P_t)
            
            P_t_dB = float(self.config['SPACECRAFT_TRANSMITTER']['SC_power_tx']) 
            if self.verbose: print("SC_power_tx (dB):"+str(P_t_dB))   
                
            
            c_n0 = P_t_dB + gain_tx_dB + gain_r_dB - losses - k_dB - T_r_dB
            
            
       
            
        else:    
            sinTheta = math.cos(epsilon)*R_e/r
            theta = math.asin(sinTheta) 
                
            deltaTheta = math.radians(float(self.config['DOWNLINK']['deltaTheta']) )
            theta3db = 2*theta + 2*deltaTheta #in radians !
            if self.verbose: print("theta3db:"+str(theta3db))
    
    
            theta3db_degree=math.degrees(theta3db)
            theta_degree=math.degrees(theta)
    
            eta = float(self.config['DOWNLINK']['eta'])     
            G_max_dB = eta * (70*math.pi/theta3db_degree)**2
            
        
            G_theta_dB = G_max_dB - 12*(theta_degree/theta3db_degree)**2
            if self.verbose: print("G_theta_dB:"+str(G_theta_dB))
        
            
    
            '''
            fromBER_BPSKrequierment = float(self.config['DOWNLINK']['fromBER_BPSKrequierment']) 
            Eb_N0 = fromBER_BPSKrequierment          
            data_rate = float(self.config['DOWNLINK']['data_rate']) 
            c_n0 =  Eb_N0 +  to_db(data_rate)      
            P_t_dB = c_n0 - np.array(G_theta_dB) - gain_r_dB + losses + k_dB + T_r_dB 
            '''
            
            if self.verbose: print("k_dB:"+str(k_dB))
            if self.verbose: print("T_r_dB:"+str(T_r_dB))
            
            P_t = float(self.config['SPACECFRACT_TRANSMITTER']['SC_power_tx']) 
            P_t_dB = to_db(P_t)
            if self.verbose: print("SC_power_tx (dB):"+str(P_t_dB))        
            if self.verbose: print("losses:"+str(losses))
            c_n0 = P_t_dB + G_theta_dB + gain_r_dB - losses - k_dB - T_r_dB
        return c_n0            


    def computeC_N0_uplink(self):
        if self.verbose: print("TRANSMITTER UP")
        P_t_dB =  float(self.config['GROUND_STATION_TRANSMITTER']['GS_power_tx'])   
        T_r = float(self.config['UPLINK']['T_rx']) #Kelvin
        if self.verbose: print("T_r (K):"+str(T_r))         
        T_r_dB = to_db(T_r)
        if self.verbose: print("T_r_dB (dB):"+str(T_r_dB))          
        gain_tx_dB = float(self.config['GROUND_STATION_TRANSMITTER']['GS_ant_gain_tx'])
        
        
        if self.verbose: print("PATH AND LOSSES UP")
        k_dB = float(self.config['CONSTANTS']['k_dB']) 
        #pylink.utils.from_db(3)           
        if self.verbose: print("k_dB (dB):"+str(k_dB))
        losses = self.compute_uplink_losses()
        if self.verbose: print("losses:"+str(losses))
        
        if self.verbose: print("RECEIVER UP")
        gain_r_dB = float(self.config['SPACECRAFT_RECEIVER']['SC_ant_gain_rx'])
        if self.verbose: print("gain_r (dBi):"+str(gain_r_dB))
        
        c_n0 = P_t_dB + gain_tx_dB + gain_r_dB - losses - k_dB - T_r_dB
        return c_n0


    def computeEb_N0_manual(self,data_rate,margin=0):
            """According to config file, return Eb_N0 depending on data rate selected (in bits per second), and optionally a margin"""  
            c_n0 = self.computeC_N0_downlink()
            if self.verbose: print("c_n0:"+str(c_n0))            
            Eb_N0 = c_n0 - to_db(data_rate)-  margin            
            return Eb_N0
    
    
    def computeEb_N0_Downlink(self):
            """According to config file, return Eb_N0 depending on data rate selected (in bits per second), and optionally a margin"""  
            margin = float(self.config['DOWNLINK']['margin']) 
            if self.verbose: print("margin (dB):"+str(margin))            
            data_rate = float(self.config['DOWNLINK']['data_rate']) 
            
            if self.verbose: print("data_rate (bps):"+str(data_rate))
            if self.verbose: print("data_rate (dB) :"+str(to_db(data_rate)))                
              
 
            c_n0 = self.computeC_N0_downlink()  
            if self.verbose: print("c_n0 downlink:"+str(c_n0))            
            Eb_N0 = c_n0 - to_db(data_rate)-  margin            
            return Eb_N0
        
        
    def computeEb_N0_Uplink(self):
            """According to config file, return Eb_N0 depending on data rate selected (in bits per second)"""  
            margin = float(self.config['UPLINK']['margin']) 
            if self.verbose: print("margin (dB):"+str(margin))            
            data_rate = float(self.config['UPLINK']['data_rate']) 
            if self.verbose: print("data_rate (bps):"+str(data_rate))
            if self.verbose: print("data_rate (dB) :"+str(to_db(data_rate)))                
              
              
            c_n0 = self.computeC_N0_uplink()
            if self.verbose: print("c_n0 uplink:"+str(c_n0))            
            Eb_N0 = c_n0 - to_db(data_rate)-  margin            
            return Eb_N0
        
            
        
    def computeSystemMarginDownlink(self):
        fromBER_BPSKrequierment = float(self.config['DOWNLINK']['fromBER_BPSKrequierment']) 
        if self.verbose: print("Eb/No Threshold: " + str(fromBER_BPSKrequierment))
        return self.computeEb_N0_Downlink() - fromBER_BPSKrequierment

    def computeSystemMarginUplink(self):
        fromBER_AFSKrequierment = float(self.config['UPLINK']['fromBER_AFSKrequierment']) 
        if self.verbose: print("Eb/No Threshold: " + str(fromBER_AFSKrequierment))
        return self.computeEb_N0_Uplink() - fromBER_AFSKrequierment
        
    
'''
    linkMargindB
'''

def getPowerTX(configFilename,altitude,verbose=False):     
    """According to config file, return required Power for satisfying link budget, depending on orbit altitude"""   
    if configFilename[-5:]==".json":
        config = json.load(open(configFilename))  
             
    else:
        config = configparser.ConfigParser()
        config.read(configFilename)     
    h = altitude

    epsilon = math.radians(5) #radians  
    
    R_e = float(config['CONSTANTS']['radius_earth'])
    r = np.array(h) + R_e
    
        
    ##################
    if verbose: print("TRANSMITTER")
    sinTheta = math.cos(epsilon)*R_e/r
    theta = [math.asin(x) for x in sinTheta]
    if verbose: print("Theta:"+str(list(map(math.degrees,theta))))

    deltaTheta = math.radians(float(config['DOWNLINK']['deltaTheta']) )
    theta3db = 2*np.array(theta) + 2*deltaTheta #in radians !
    if verbose: print("theta3db:"+str(list(map(math.degrees,theta3db))))
       
    sl = [getSlantRange(altitude) for altitude in h]
    if verbose: print("sl"+str(sl))
     
    c = float(config['CONSTANTS']['c'])
    f = float(config['DOWNLINK']['frequency']) 
    waveLength = c/f
    
    FSL = [getFreeSpaceLoss(r*1000,waveLength) for r in sl]
    FSL_dB = [to_db(fsl) for fsl in FSL]
    
    if verbose: print("FSL"+str(FSL_dB))
        
        
        
    theta3db_degree=np.array(list(map(math.degrees,theta3db)))
    theta_degree=np.array(list(map(math.degrees,theta)))
    
    
    eta = float(config['DOWNLINK']['eta'])     
    G_max_dB = eta * (70*math.pi/theta3db_degree)**2
    if verbose: print("G_max_dB"+str(G_max_dB))
    

    G_theta_dB = np.zeros(4) 
    for i in range(0,len(G_max_dB)):
        G_theta_dB[i] = G_max_dB[i] - 12*(theta_degree[i]/theta3db_degree[i])**2
    if verbose: print("G_theta_dB"+str(G_theta_dB))
    
    
    ###################
    if verbose: print("RECEIVER")
    eta_r = float(config['DOWNLINK']['eta_rx'])
    D=float(config['DOWNLINK']['antennaDiameter'])
    gain_r = eta_r * (math.pi * D / waveLength)**2
    gain_r_dB = to_db(gain_r)
    if verbose: print("gain_r:"+str(gain_r))
    if verbose: print("gain_r in dB:"+str(gain_r_dB))
    
    
    T_r = float(config['DOWNLINK']['T_rx']) #Kelvin
    T_r_dB = to_db(T_r)
    
    k_dB = float(config['CONSTANTS']['k_dB']) 
    #pylink.utils.from_db(3)
    
    
    ############
    if verbose: print("Linking both")
    #requirement for BSPK and  BER  10-6 +margin
    #TODO funtion to auto get margin
    margin = float(config['DOWNLINK']['margin']) 
    fromBER_BPSKrequierment = float(config['DOWNLINK']['fromBER_BPSKrequierment']) 
    
    #Eb_N0 = fromBER_BPSKrequierment +margin
    Eb_N0 = fromBER_BPSKrequierment
    #Eb_N0 = 3
    if verbose: print("Eb_N0 "+str(Eb_N0))    
    
    data_rate = float(config['DOWNLINK']['data_rate']) 
    c_n0 =  Eb_N0 +  to_db(data_rate)
    if verbose: print("c_n0 "+str(c_n0))  
    
    if verbose: print("k_dB:"+str(k_dB))
    if verbose: print("T_r_dB:"+str(T_r_dB))     
    
    
    losses_atm_rain = float(config['PROPAGATION_LOSSES']['loss_atm']) 
    losses_misc = float(config['PROPAGATION_LOSSES']['loss_misc']) 
    losses_internalSat = float(config['SPACECRAFT_TRANSMITTER']['SC_misc']) 


    losses = np.array(FSL_dB) +losses_misc + losses_atm_rain + losses_internalSat   
    if verbose: print("losses:"+str(losses))

    P_t_dB = c_n0 - np.array(G_theta_dB) - gain_r_dB + losses + k_dB + T_r_dB 

   
    
    if verbose: print("P_t_dB"+str(P_t_dB))
    P_t_dB_margin = P_t_dB + margin
    if verbose: print("P_t_dB_margin"+str(P_t_dB_margin))    
    P_t_margin = [from_db(p) for p in P_t_dB_margin]
    if verbose: print("P_t (W)"+str(P_t_margin))
    
    #EIRP_satellite_req_dB = c_n0 - gain_r_dB + np.array(FSL_dB)
    #print("EIRP_satellite_req_dB"+str(EIRP_satellite_req_dB))
    
    P_t_real = np.array(P_t_margin)/0.2
    if verbose: print("P_t_real (W)"+str(P_t_real))
    return P_t_real
   

if __name__ == '__main__':
    parser = OptionParser()
    defaultFile = "data/luplinkDefault"
    
    #defaultInitFile = "data/nimphTest.ini"
    #os.system("python2 ini2json.py data/nimphTest.ini > data/nimphTest.json") 
    
    
    os.system("python2 ini2json.py "+defaultFile+".ini > "+defaultFile+".json")     
    defaultInitFile = defaultFile+".json"    
    
    
    defaultInitAlt = "[800,1000,1200,1400]"
    
    parser.add_option("-f", "--file", dest="filename",
                      help="write report to FILE", metavar="FILE",default=defaultInitFile)
    parser.add_option("-q", "--quiet",
                      action="store_false", dest="verbose", default=False,
                      help="don't print status messages to stdout")  
    (options, args) = parser.parse_args()
    
    altitudeTested =  [800,1000,1200,1400]
    
    #print (getPowerTX(options.filename,altitudeTested,verbose=options.verbose))
    print ("Working on <"+str(options.filename)+">")
   
    lBA = LinkBudgetAnalysis(options.filename,False)  
    print("================")    
    print(lBA.compute_downlink_transmitter_losses())
    #64.47940008672037
    #P_t 3.712306827960641
    print("================")
    print(lBA.computeC_N0_downlink())
    print("================")
    print(lBA.computeEb_N0_manual(250000,5))
    
    print("================")
    lDataRates = [100,100000,250000,500000,1000000]
    lEb_N0 = [lBA.computeEb_N0_manual(d,5) for d in lDataRates]   
    print("lEb_N0:"+str(lEb_N0))
  
  
    lBA.verbose = False        
    print("System Eb_N0_Uplink: " + str(lBA.computeEb_N0_Uplink()))  
    print("System Uplink Margin: " + str(lBA.computeSystemMarginUplink()))   
    print("System Eb_N0_Uplink: " + str(lBA.computeEb_N0_Downlink()))  
    print("System Uplink Margin: " + str(lBA.computeSystemMarginDownlink()))


    '''
    print ("################################") 
    print ("NIMPH")    
    lBA = LinkBudgetAnalysis("data/nimphUHF_VHF.ini",True)    
 
    
    print("Downlink Transmitter (SC) losses: "+str(lBA.compute_downlink_transmitter_losses())) 
    print("Downlink path losses: "+str(lBA.compute_downlink_path_losses()))  
    print("Downlink Receiver (GS) losses: "+str(lBA.compute_downlink_receiver_losses()))  
    print("Downlink total losses: "+str(lBA.compute_downlink_losses()))  
    
    
    #print("C_N0: " + str(lBA.computeC_N0()))  
    #lBA.verbose = True
    print ("################################") 
    print("System Eb_N0_Downlink: " + str(lBA.computeEb_N0_Downlink()))
    lBA.verbose = False
    print("System Downlink Margin: " + str(lBA.computeSystemMarginDownlink()))
    
    lBA.verbose = True
    print("Uplink Transmitter (GS) losses: "+str(lBA.compute_uplink_transmitter_losses()))    
    print("Uplink Receiver (SC) losses: "+str(lBA.compute_uplink_receiver_losses())) 
    print("Uplink path losses: "+str(lBA.compute_uplink_path_losses()))   
    print("Uplink total losses: "+str(lBA.compute_uplink_losses())) 

    
    lBA.verbose = True        
    print("System Eb_N0_Uplink: " + str(lBA.computeEb_N0_Uplink()))  
    lBA.verbose = False
    print("System Uplink Margin: " + str(lBA.computeSystemMarginUplink()))
    

    print("System Eb_N0_Uplink: " + str(lBA.computeEb_N0_Downlink()))  
    lBA.verbose = False
    print("System Uplink Margin: " + str(lBA.computeSystemMarginDownlink()))
     '''
    
    
    
    



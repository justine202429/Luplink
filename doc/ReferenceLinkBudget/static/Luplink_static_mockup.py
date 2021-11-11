from luplink import LinkBudgetAnalysis
from luplink import *
import json
import os

configJSON = json.load(open("data/luplinkReference.json"))
lBA = LinkBudgetAnalysis(configJSON, verbose=True)

#Eb_N0_up = lBA.computeEb_N0_Uplink()  
C_N0_up = lBA.computeC_N0_uplink()     
margin_up = lBA.computeSystemMarginUplink()       
#Eb_N0 = lBA.computeEb_N0_Downlink()     
#C_N0 = lBA.computeC_N0_downlink()      
#margin_down = lBA.computeSystemMarginDownlink()

print(C_N0_up)
print(margin_up)

#print(configJSON)
#print(getSlantRange(float(configJSON["SPACECRAFT_FLIGHT_DYNAMICS"]["SC_altitude"]), 10, 6378.137))
    

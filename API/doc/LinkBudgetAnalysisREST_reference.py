# -*- coding: utf-8 -*-
"""
@author: tgateau
"""

"""
Different endpoints correspond to different 'default' json config for the link. We will most likely expect the request to contain everything needed. 
Assuming values for the calculation will be a source of bugs I suppose.
"""


import lib.bottle as bottle
from lib.bottle import request, response
from luplink import LinkBudgetAnalysis
import json
import os


# Get the current working directory

print("The current working directory is:")
print(os.getcwd())

app = application = bottle.default_app()

@app.hook('after_request') #cross origin request
def enable_cors():#crosenable s origin request
    """
    You need to add some headers to each request.
    Don't use the wildcard '*' for Access-Control-Allow-Origin in production.
    """
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'PUT, GET, POST, DELETE, OPTIONS'
#    response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token,Authorization'
    response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token,Authorization'


#satelliteJSON

"""
@app.route('/linkBudget/hello', method=['OPTIONS','POST'])  
def getHello():
    data = request.json
    print("=================")
    print(data)
    print("of type: "+str(type(data))) 
   
   

        
    a = "{'toto':53}"
    return json.dumps(a)

"""
  
@app.route('/linkBudget/C_N0', method=['POST'])  
def getC_N0():
    data = request.json
    print(data)
    lBA = LinkBudgetAnalysis(data)
    C_N0 = lBA.computeC_N0()
    print(C_N0)
    print (json.dumps(C_N0))
    return json.dumps(C_N0)



        
def getLinkBudget(data,configJSON,verbose=True):
    if verbose: print("================= Eb_N0")   
    print(data) 
    if verbose: print("of type: "+str(type(data)))     

    
    NoneType = type(None)
    if type(data) == None:
        if verbose: print ("None indeed !")
        return 0
    elif type(data) == NoneType:
        if verbose: print ("NoneType indeed !")
        return 0        
    else:      
        #loading default json
        lBA = LinkBudgetAnalysis(configJSON,False)   
        if verbose: print("SC_altitude: "+str(lBA.config['SPACECRAFT_FLIGHT_DYNAMICS']['SC_altitude'])+" (Default)")
        if verbose: print("loss_rain: "+str(lBA.config['PROPAGATION_LOSSES']['loss_rain'])+" (Default)")        
        #TODO here : format data receive to fit with configJSON !!!! 
              
        
        if not type(data['SC_altitude'])==float:
            try:
                data['SC_altitude'] = float(data['SC_altitude'])
            except ValueError:
                data['SC_altitude'] = None
                
                            
             
        #updating with POST request (in order to have a default value anyway...)
        #jsonData = json.load(data)
        jsonData = data
        
        lBA.updateJsonUniqueKey(jsonData)
        if verbose: print("SC_altitude: <"+str(lBA.config['SPACECRAFT_FLIGHT_DYNAMICS']['SC_altitude'])+"> (Read)")
            
            
            
        dataBack = {}
        
        Eb_N0 = lBA.computeEb_N0_Uplink() 
        dataBack['Eb_N0_UP']=Eb_N0
        
        C_N0 = lBA.computeC_N0_uplink()
        dataBack['C_N0_UP']=C_N0     
        
        margin_up = lBA.computeSystemMarginUplink()
        dataBack['margin_UP']=margin_up     
        
        Eb_N0 = lBA.computeEb_N0_Downlink() 
        dataBack['Eb_N0_Down']=Eb_N0
        
        C_N0 = lBA.computeC_N0_downlink()
        dataBack['C_N0_Down']=C_N0     
        
        margin_down = lBA.computeSystemMarginDownlink()
        dataBack['margin_Down']=margin_down             
        
        #TODO build canonical JSON response

        print ("json:"+json.dumps(dataBack))  
        return json.dumps(dataBack)


#@app.route('/linkBudget/default-UHF-VHF', method=['OPTIONS','POST']) 

@app.route('/linkBudget/default-UHF-VHF', method=['OPTIONS','POST']) 
def getLinkBudget_default_UHF_VHF():
    print ("UHF-VHF")
    return getLinkBudget(request.json,configDefaultJSON_UHF_VHF)




@app.route('/linkBudget/default-S-band', method=['OPTIONS','POST']) 
def getLinkBudget_default_S_Band():
    print ("S-Band")
    return getLinkBudget(request.json,configDefaultJSON_S_S)    

    
   
#@app.route('/linkBudget/Eb_N0', method=['OPTIONS','POST']) 
def getEb_N0():
    print ("getEb_N0")
    return getLinkBudget(request.json,configDefaultJSON_UHF_VHF)    
   
         

def incomingTestingData():
    incommingJsonData = {'GS_minElevation': None, 'SC_altitude': 300, 'GS_altitude': None}
    print(incommingJsonData)
    
    
    import os
    #if not (os.path.isfile("data/luplink_UHF_VHF.json")  ):    
    os.system("python2 ini2json.py "+"data/luplink_UHF_VHF.ini > data/luplink_UHF_VHF.json")
    dataUHF = getLinkBudget(incommingJsonData,configDefaultJSON_UHF_VHF)
    print(dataUHF)
    d = dict(eval(dataUHF))

    print('C_N0_Down:' + str(d['C_N0_Down']))   
    print('Eb_N0_Down:' + str(d['Eb_N0_Down']))    
    #print('C_N0_UP:' + str(d['C_N0_UP']))    
    
    #if not (os.path.isfile("data/luplink_S.json")  ):    
    os.system("python2 ini2json.py "+"data/luplink_S.ini > data/luplink_S.json")   
    dataS = getLinkBudget(incommingJsonData,configDefaultJSON_S_S)
    d = dict(eval(dataS))
    print('C_N0_Down:' + str(d['C_N0_Down']))  
    print('Eb_N0_Down:' + str(d['Eb_N0_Down']))
     
    #print('C_N0_UP:' + str(d['C_N0_UP'])) 

'''
configDefaultJSON_UHF_VHF['DOWNLINK']
configDefaultJSON_S_S['DOWNLINK']
'''

if __name__ == '__main__':
    configDefaultJSON = json.load(open("data/luplinkDefault.json"))  
    configDefaultJSON_UHF_VHF = json.load(open("data/luplink_UHF_VHF.json"))  
    configDefaultJSON_S_S = json.load(open("data/luplink_S.json"))      
    #bottle.run(host = '127.0.0.1', port = 8000)
    bottle.run(host = '0.0.0.0', port = 8000)

    #incomingTestingData()


   
'''
json:{"margin_Down": 15.256026001545363, "Eb_N0_Down": 26.856026001545363, "Eb_N0_UP": 42.73775777718216, "C_N0_UP": 82.56047010757784, "C_N0_Down": 57.64783846202161, "margin_UP": 17.53775777718216}
'''

#testing
#generating html + ts
# cd /media/tgateau/31AEF2337D7C92BF/GIT/luplink/src-python
#python3 json2htmlform.py -o "/media/tgateau/31AEF2337D7C92BF/GIT/JSatorb/jsatorb-cesium-front/src/app/Components/link-budget-form/link-budget-form.component"

#lauching python server
# cd /media/tgateau/31AEF2337D7C92BF/GIT/luplink/src-python
# python3 LinkBudgetAnalysisREST.py

#launching ng serve
#cd /media/tgateau/31AEF2337D7C92BF/GIT/JSatorb/jsatorb-cesium-front
#ng serve

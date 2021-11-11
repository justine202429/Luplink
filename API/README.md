**Swagger API documentation available here: [Swagger API documentation](https://app.swaggerhub.com/apis/julienprissi/Luplink/0.1) or inside `doc/`**

# Intro

This API handles link budget calculation sent by the angular frontend. The main file is LinkBudgetAnalysisREST.py. This script starts a REST server making the link with dedicated link budget calculation libraries.

The `./lib` folder contains all the tools used by this script. Adding support for another library can be done in this folder.

# Usage

This is written for Python 3

```bash
python LinkBudgetAnalysisREST.py
```
You can start in parallel the front-end angular application located in the **link-budget-nss-v0/**
folder

# Installation

## Basic

```bash
pip install -r requirements.txt
```
This will install ```python-linkpredict``` among others

## Virtual environment (recommended)

Or you can also directly install everything in a virtual environment (venv):

```bash
python -m venv .env && source .env/bin/activate && pip install -r requirements.txt
```

You can then use the commands `deactivate` to exit the venv or `source .env/bin/activate` to later access it.

# Testing

Testing the API:

```bash
python3 test_api.py
```

# Requirements

- The **linkpredict** module (https://gitlab.com/librecube/lib/python-linkpredict)
- Pint
- pyQuaternion


# For later

Running this server as a service


## Create and run a service to manage the back-end

on redhat distrib

```bash

# /etc/systemd/system/neo4j-dcas.service

[Unit]

Description=Manage Neo4j service

[Service]

WorkingDirectory=/srv/

ExecStart=/bin/java -Xms512m -Xmx512m -jar neo4j-service-1.0-SNAPSHOT.jar

User=root

Type=simple

Restart=on-failure

RestartSec=15

[Install]

WantedBy=multi-user.target

```

relaunch the service daemon

```

  systemctl daemon-reload

```

you can now manage the service by using the following command

```bash

systemctl start neo4j-dcas.service

systemctl stop neo4j-dcas.service

systemctl status neo4j-dcas.service

```

once this is done if you want to update the back-end you just have to remplace the /srv/neo4j-service-1.0-SNAPSHOT.jar with a new one. And relaunch the service ( stop and start) 

```
(see https://sourceforge.isae.fr/projects/nanospace/repository/revisions/master/entry/readme.md)

<!-- =============================================
# USAGE (OLD)

## stand alone: getting power required onboard: 
```bash
python3 luplink.py
```

```bash
python3 example_main.py
```


## In a browser
### launch service to serve the REST API
```bash
python3 LinkBudgetAnalysisREST.py
```


--------------------
--------------------
# INSTALL

## dependencies 

```bash
pip install pyquaternion

sudo apt-get install python-bottle #Only to get a REST API (in Debian)
```

------
# help

```bash
python3 luplink.py -h
```

------
------
## Tests

specific module: 
```bash
python3 test_luplink.py
```

run all:
```bash
python3 -m unittest
```

----------
----------
# DEV 

## convert INI to JSON
(must me python 2.7.*)
```bash
python2 ini2json.py data/luplinkTest.ini > data/luplinkTest.json
```




### full example
```bash
PATH_JSATORB=/media/tgateau/31AEF2337D7C92BF/GIT/JSatorb/
JSATORB_COMPONENT=jsatorb-cesium-front/src/app/Components/link-budget-form/link-budget-form.component
python2 ini2json.py data/luplinkTest.ini > data/luplinkTest.json
python3 json2htmlform.py -f data/luplinkTest.json -o $PATH_JSATORB$JSATORB_COMPONENT
```


### REST API testing
-----------
T1>
python3 LinkBudgetAnalysisREST.py


Postman: POST
http://localhost:8000/linkBudget/hello

http://localhost:8000/linkBudget/Eb_N0

#### simple
Request: 
{'GS_minElevation': None, 'SC_altitude': '300', 'GS_altitude': None}

Answer:
json:{"margin_Down": 15.256026001545363, "Eb_N0_Down": 26.856026001545363, "Eb_N0_UP": 42.73775777718216, "C_N0_UP": 82.56047010757784, "C_N0_Down": 57.64783846202161, "margin_UP": 17.53775777718216}


#### complete
Request:
json:{"SPACECRAFT_RECEIVER": {"SC_NF_rx": "-23.6", "SC_noise_T": "XX", "SC_loss_cable_rx": "-0.5"}, "SPACECFRACT_TRANSMITTER": {"SC_loss_feeder_tx": "-3", "SC_loss_cable_tx": "-0.5", "SC_misc": "1", "SC_power_tx": "3.712306827960641"}, "GROUNDSTATION_LOCATION": {"format_sta_OEM": ["'%d", "%d", "%.5f", "%.5f", "%.5f';"], "headerlines_sta_OEM": "1;", "altitude": "100", "filename_sta_OEM": ["'Results_Station_30000.txt';", "%Results_Station_4days.txt"]}, "DOWNLINK": {"deltaTheta": "5", "eta_rx": "0.5", "data_rate": "250000", "eta": "0.60", "T_rx": "200", "fromBER_BPSKrequierment": "10.5", "frequency": "2.270e9", "antennaDiameter": "1.8", "margin": "5"}, "PROPAGATION_LOSSES": {"loss_cloud": "0.0", "loss_scin": "0.0", "loss_si": "0.0", "loss_pol": "-1.1", "loss_atm": "-0.5", "loss_misc": "1.5", "loss_rain": "0.0"}, "GROUND_STATION_RECEIVER": {"GS_loss_point_rx": "-2.0"}, "SPACECRAFT_ANTENNA": {"filename_ant_gain": "'Gain.xlsx';", "end_row": "12925;", "start_row": "2;", "sheetname_ant_gain": "'Feuil1';"}, "CONSTANTS": {"c": "299792458", "radius_earth": "6378.136", "k_dB": "-228.6"}, "GROUND_STATION_TRANSMITTER": {}, "SPACECFRACT_FLIGHT_DYNAMICS": {"filename_sat_OEM": "'EyeSat_MNO_4S_VTS_OEMfile.txt';", "format_sat_AEM": ["'%d", "%d", "%f", "%f", "%f", "%f';"], "altitude": "800", "format_sat_OEM": ["'%d", "%d", "%f", "%f", "%f';"], "headerlines_sat_AEM": ["16;", "%17"], "filename_sat_AEM": "'EyeSat_MNO_4S_VTS_AEMfile.txt'", "headerlines_sat_OEM": ["13;", "%15"]}}


[DEFAULT]

[CONSTANTS]
radius_earth = 6378.136 
#km
c = 299792458 
#m/s
k_dB=-228.6 
#dB Boltzman constant


TODO
change convention naming of parts
generalise to N satellite and N ground stations



# DOCKER
docker build -t luplink:dev .
docker run -it --name luplink-container -p 8000:8000 --rm luplink:dev

check with postman, or directly with front-end...
https://pythonspeed.com/articles/docker-connection-refused/ -->





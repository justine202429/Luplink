This folder contains the calculation of a reference budget link that will be used to compare different tools (AMSAT, linkpredict-python, luplink).

## ToDo next
- match calculations between link-predict and AMSAT  **done**
- Precise the previous step, with cascading receiver and understand better how to match noise temps
- static calculation using luplink **done**
- dynamic calculation *doing*
- (optional) Compare with other tool pylink-satcom (enough documentation?)
- complete comparison

### Files

- mockup_uplink, specification of the link considered
- *tools_comparison*, comparison between the tools

- linkpredict_static_mockup.py, calculation using linkpredict-python 
- AMSAT_mockup_uplink.ods, calculation using AMSAT

## Notes

- only the uplink is considered here to avoid redundancy
- for dynamic calculation, data from Eyesat could be used (different format between luplink & linkpredict)

## Other

In linkpredict, GroundStationSatelliteGeometry's methods to get angles return 0 whereas in simpleGeometry we can specify angles

# Merge the first section with Technical report and keep this as a strict README

The file specs.md will contain a clear synthesis of what we expect from the interface, as a basis to criticize each UI version and to remember ideas /  things not considered before, ...

# Tools considered :

## CSS
- **Bootstrap**, popular, well-documented and customizable

 Alternative CSS frameworks :
 - Bulma, quite popular, pure CSS, simple and good tile capabilities
 - Picnic, simple & opiniated CSS framework, open-source
 - Angular Material, close integration to Angular, for a Material look
 - Semantic UI, good alternative to Bootstrap

## Others

https://grafana.com/ graphs & dashboard for metrics / open-source. Can we use it in our context, take some inspiration maybe

 # Features to consider

 A list of all features that should and could be integrated in the UI, for later reference.
 The most basic interface would be for a static calculation, in standalone mode.
 From there, we can add the possibility to interface it with NSS and handle dynamic link budget.


 ## Static version

### Standalone
 - Input slant_range & minimum angle delta
 - Ability to save / quickly change configurations similar to AMSAT with a dropdown menu
- L/B calculation available everywhere

 ### Integration with NSS
 Everything from standalone + :
 - Choose S/C from database

 ## Dynamic version
Everything done in static + :
 - Import position file
 - The UL/DL interface takes the position of the station as a parameter

 # User experience
 Use cases : 
 - Check the link budget for a given configuration
 - Quickly test different components and see the effect on link budget (implies keeping the L/B summary available @ all times)
 ### **Choices to make**: -> first choices (and their advantages)
 - Tab organization / Use of sections : -> Vertical organization (less irrelevance eg: when doing only uplink but lot of information)
 - Display current L/B if needed : -> use of sidebar (fixed position and not wasting space)
 - Ability to get explanations : -> pop-up (as AMSAT) + external link to documentation (similar to Wikipedia popups) (alway available with different LOD)

# Notes

- Clearly indicate where user input is missing
- Clear advantage over spreadsheet, we can more clearly indicate where user input is required
- AMSAT extensive explanations, SatOrb good compacity
- With Python, possibility to add virtually an infinite amount of devices to the transmitter / receiver lines
- Dropdowns for different situations will drastically reduce verboseness compared to AMSAT
- Defining a general organization of the UI but components could be rearranged if we want to take into account new situations/use cases
- provide customizable components (eg interact.js) to allow interface to fit to user needs ?
- ability to open the app in multiple windows could prove to be interesting (is it doable with angular ?)
- ability to select units

# Questions : 
- Coherence with the rest of the suite ? (Material or Bootstrap or ?) -> Not a problem for now
- Handle multiple uplinks & downlinks ?
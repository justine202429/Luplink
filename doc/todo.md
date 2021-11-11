# General outline (Give details)

- Static Link Budget Calculation {c}
    - All of AMSAT fields (detail under several points)  
    - ...
- Dynamic Link Calculation {c}
  - Displaying results in an adapted way

# ToDo

- Logic
  - Add default value to templates {cm:2021-04-28}
  - (B) Finish redefining the Template OOP architecture
- Form
  - (B) Data validation
  - Alternative to slant range
  - (B) Do the mockLinkBudget inside
  - (D) Do the CREME LinkBudget inside
- README
  - Pas de dépendance internet
  
- Layout:
  - Better definition of our cards, how to customize them, ... (hasTitle, isCollapsible, support for wide or tall cards)
  - Making it available for mobile phone would be great
  - Improve form appearance & responsiveness
  - (C) How to display results more efficiently?
  - better use of columns
  - (D) Different views should be merged into the same view component
  - (B) Work on results display
-Antenna Selection :
  - Basic layout {cm:2021-04-28}
  - Full capabilities (custom antennas, different types of users)
  - Maybe could we use modals? What are the pros and cons? (saved an article explaining what is modality and when to use it. In the case of antenna selection, it might make sense / creates focus. Also nonmodal dialogs can be interesting)
- Different scenarios (To Document) : Static / Dynamic / Basic / Advanced
  - Implement basic selection
- Documentation :
  - Provide documentation for users similar to AMSAT
    - Sphynx style (implies changing page)
    - Wikipedia-style popup (no interruption, quick to check)
    - Use of modals => Seems well fitted to this use case. Maybe provide solid documentation with navigation and lighter one in modals
- Code quality
  - Better naming conventions
- API
  - Fixed interfaces !
- Open questions
  - How to handle custom architectures? (cf. CREME). Need to find a way to abstract it / input it
- Testing
  - A list of the tests to implement
  - Write a Mock Form Service and replace the imports for Logger Service through Form Service
  -  Use notyf instead for notification because testing ngx-toastr is painful
  - (A) Continue writing tests
# Bugs:

- If the b/e fails to respond (empty query), the browser waits for a response. {cm:2021-04-28}
# Tests

Check a message error is displayed if erroneous values are entered (define erroneous : negative altitudes, power, text in place of numbers, ...) -> intégration ?



# Next 

- How to add documentation ?
- Simple working mockup of interface
  - Implement card logic - **75%** Still lacks titles, and other specific styles capabilities
- Working simple static link budget
 - How to select Slant Range ?
- Working static link budget
  - As AMSAT, with more complex things
- Dynamic Link Budget
- Other
  - Add Save/Load capabilities ***Partially done*** *Improve robustness*
  - 
- A way to export results





# Done

- Add another routing level to be able to switch between layout and content mode **Done**
- Try other layouts **done**

-Test docker for API **done**

- Replicate following drawing as a component. Try to use D3js for the graph & let the use input values. Unit test that the value calculated is the correct one.
 ![](./drawing.png)
  - Do D3js tutorial first
# Goals : 
- Develop an ergonomic web application for link budget calculation
- Reinvest already existing code (python linkpredict, luplink... or others)
**Reference**: AMSAT, *SatOrb (as a MVP)*

## In parrallel, start looking at: 

- version dynamique du linkbudget
- documentation
- test unitaire / fonctionnel / non regression
- Don't forget to make tests that are supposed to fail!
- Use of standards whenever possible (json, ...)


## Later: 

- dockerisation
- deploiement sur machines de test (MV / voire server)


## Short Term : 
 - test lib existantes ✓
 - proposer 1er squelette d'interface ✓
 - tester les install (jsatorb - version docker + luplink GUI) ✓
 - exploration techno / note technique ✓
 


# IDEAS
 - Using a pop-up for antenna selection

# Use cases

1) A classic static link budget calculation, similar to the one we did in AMSAT / luplink & linkpredict, we want to have a simplified version (for educational purpose) where we don't have to input as many values
2) A dynamic link budget, where we get results that are closer to reality, that we can display to graphs. We still have end results but different, like the amount of data transmitted, ...
3) Maybe the user wants to quickly test the influence of one of the parameters (e.g the power of the on-board transmitter, or the sat antenna gain) and get the new results / a comparison.

In 1. and 2., we might want to export the results

# Others

Satorb
https://sourceforge.isae.fr/projects/miniproject_intro_space_systems
installeur
-> spec produit minimum

Exo : faire un link budget de "reference"

Outils

technos
-Angular
-DOCKER 
-REACT ?
-raw JS ?

gitlab 
 -repo [tag] msg explicite
 - issues dashboargit new branchd

Prototype actuel: 
NSS/nanospace-tutorial/material/src-python $
NSS/link-budget-nss
https://sourceforge.isae.fr/git/link-budget-nss
-> front end angular
https://sourceforge.isae.fr/git/nanospace-tutorial
branch demo
-> API REST python


basée sur luplink/Dosa :
	url = https://sourceforge.isae.fr/git/dosa_link_budget_analysis
et dev :
// luplink : 
	url = https://openforge.isae.fr/git/luplink

ref en remplacement/merge
=> Arthurc Scholtz
    URL 



Demo (Stand Alone)
=============
cd ~/git/NSS/link-budget-nss
ng serve 

cd ~/git/NSS/nanospace-tutorial/material/src-python
python3 LinkBudgetAnalysisREST.py
(-> branch demo !!!)

firefox -new-tab -url http://localhost:4200/


=======================
JSATORB
https://gitlab.isae-supaero.fr/nanostar/jsatorb/-/tree/stable
docker-compose

===========================
NSS
(culture G)

===========================
JSATROB - CESIUM - LITE
sourceforge.isae.fr/projects/jsatorb-all (tout le projet)
avec un deployer dockerisé sous: sourceforge.isae.fr/projects/jsatorb-docker-demo/repository


bash load-docker-images.bash
bash jsatorb-start.bash

==================================================
Front-end :
#TODO fix nanospace component collapsing when resizing / Also fix color on green(...) backgrounds
#TODO make a static test of different ways to display diagrams for comparison







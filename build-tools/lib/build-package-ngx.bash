#!/bin/bash

ng build --project=ngx-luplink
cp package.json dist/ngx-luplink/. #not needed any more #actually sometime yes ^^ ?
npm pack dist/ngx-luplink/
cp *.tgz dist/.

echo "ngx-luplink built !" 

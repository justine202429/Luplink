#!/bin/bash

#cp ../link-budget-nss-v0/package.json .
cd ../link-budget-nss-v0
echo 'Building build-tool image'
docker build . -t luplink-build:dev





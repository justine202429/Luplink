#!/bin/bash
# build_luplink.sh v0.0.1

#================================================================
# HEADER
#================================================================
#% SYNOPSIS
#+    bash build_luplink.sh folder_path (optional : will use ../../dependencies path by default)
#%
#% DESCRIPTION
#%    This builds the luplink-app and puts it inside the dependency folder.
#%
#================================================================

printf "\nbuild_luplink.sh v0.0.1 - Builds the standalone luplink-app and puts it inside the dependency folder\n\n"

dependenciesDir=${1:-"../../dependencies"}

echo "Current folder: $(realpath $0 )"
echo "Ouput folder: $dependenciesDir"

printf "\n"

if [ ! -d "$dependenciesDir" ]
then
  echo "$dependenciesDir: Could not find the dependencies directory"
  usagefull
  exit 1
fi

#Executing the following lines causes package-lock.json & package.json to use the .tgz to be used as library insted of dist/ and thus nothing is updated anymore


cd ./projects/ngx-luplink/
npm link

ng build --prod --project=ngx-luplink #building library

cd ../luplink-app/
npm link @luplink/ngx-luplink


#npm pack dist/ngx-luplink
#npm install luplink-ngx-luplink-0.2.1.tgz

npm run test-headless

ng build --project=luplink-app --prod

cd ../..

touch -c "$dependenciesDir"/*

mkdir -p "$dependenciesDir"/.bak/
#Backing up files
cp -r "$dependenciesDir"/dist/ "$dependenciesDir"/.bak/
#Cleaning the dependencies dist directory
rm -r "$dependenciesDir"/dist/
mkdir -p "$dependenciesDir"/dist/
cp -r dist/luplink-app/* "$dependenciesDir"/dist/

printf "\nBuilt files copied inside $dependenciesDir/dist/\n"

#================================================================
#% USAGE
#+    bash build_deploy.sh path/to/dependencies_folder (optional : will use ../../dependencies if no path given).
#%
#================================================================



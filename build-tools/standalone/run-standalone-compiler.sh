#!/bin/sh

DIST="../../luplink/dist/luplink-app"
OUT=${1:-../build}
CWD=$PWD

echo "OUTPUT_PATH: $(realpath $OUT )"
printf "\n"
echo "You can change the default output path 'bash build-standalone-compiler.sh custom/output/path/'"
printf "\n"
printf "\n"

mkdir -p $(realpath $OUT )
if [ ! -d "$OUT" ]
then
  echo "$OUT: Could not create ouput path"
  exit 1
fi

# Trick to solve permission issues (see : https://vsupalov.com/docker-shared-permissions/ ) !!! BREAKS THE NPM INSTALL AT RUNTIME
echo 'Compiling luplink-app (standalone)'
cd ../..
docker run -it --rm --mount type=bind,source="$(pwd)"/luplink,target=/app \
	gitlab-registry.isae-supaero.fr/jsatorb-dev/stage/stage-2021-julien_prissimitzis/builders/luplink-standalone-builder:dev
	# --user "$(id -u):$(id -g)" --rm \


################# MANUAL
mkdir -p build/dist 

#cd /home/tgateau/git/jsatorb-dev/stage/stage-2021-julien_prissimitzis/build-tools/lib/luplinkDis
#cp luplink-0.2.0.tgz ../../standalone/build/dist/luplink-ngx-luplink-0.2.1.tgz
#cd /home/tgateau/git/jsatorb-dev/stage/stage-2021-julien_prissimitzis/build-tools/standalone
#cp package.json build/dist/.

docker container run -it --mount type=bind,source="$(pwd)"/build/dist,target=/app/dist luplink-standalone-builder:dev /bin/bash

docker container run -it luplink-standalone-builder:dev /bin/bash
cd ./projects/ngx-luplink/
npm link
ng build --project=ngx-luplink

ng build --configuration production
ls /app/luplink/luplink/dist/ngx-luplink

cd /app/luplink/luplink/dist/ngx-luplink
npm pack


ls /app/luplink/luplink/dist/ngx-luplink

#npm link @luplink/ngx-luplink #??

npm install /app/luplink/luplink/dist/ngx-luplink/luplink-ngx-luplink-0.2.1.tgz

#ng serve --project=luplink-app
ng build --project=luplink-app
ls /app/luplink/luplink/dist/







npm i
npm install ngx-toastr --save





docker run -it --rm --mount type=bind,source="$(pwd)"/build/dist,target=/app/dist \
	luplink-standalone-builder:dev


########################


cd build-tools/standalone
echo 'Warning! The ngx-luplink package used is the one found inside luplink/, if one already exists there, it might not be the most recent version of ngx-luplink'
cp -r $(realpath $DIST ) $(realpath $OUT )

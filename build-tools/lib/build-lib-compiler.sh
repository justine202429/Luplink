#!/bin/bash
# This script build the luplink-build-tool image. It allows to build the ngx-luplink library and pack it 
# without the need of installing angular+node.
# 
# See the script run-luplink-builder.sh to build the node package luplink-ngx-luplink-0.2.1.tgz from the luplink sources 
cp ../../luplink/package.json .
#cp ../../luplink/bin/luplink-ngx-luplink-0.2.1.tgz .
cp -r ../../luplink/ luplink/


echo 'Building build-tool image for luplink'
docker build . -f Dockerfile-lib -t gitlab-registry.isae-supaero.fr/jsatorb-dev/stage/stage-2021-julien_prissimitzis/builders/lib-builder:dev


#rm package.json

#docker push gitlab-registry.isae-supaero.fr/jsatorb-dev/stage/stage-2021-julien_prissimitzis/luplink-builder:dev

#BUILD DOCKER
#docker build . -f Dockerfile-lib -t lib:dev

#DEBUG DOCKER
#docker container run -it lib:dev /bin/bash
#ng build --project=ngx-luplink
#cp package.json dist/ngx-luplink/. #not needed any more
#npm pack dist/ngx-luplink/
# cp *.tgz dist/.

mkdir luplinkDis
cp build-package-ngx.bash luplinkDis/. #not really needed


#BUILD ngx-luplink-0.2.1.tgz with DOCKER IMAGES 
#mkdir luplinkDis
#cp build-package-ngx.bash luplinkDis/.
#docker run -it --rm --mount type=bind,source="$(pwd)"/luplinkDis,target=/app/dist  lib:dev 
## will generate a luplink-0.2.0.tgz file



##   "@luplink/ngx-luplink": "file:luplink-ngx-luplink-0.2.1.tgz",

mkdir luplinkDis
docker run -it --rm --mount type=bind,source="$(pwd)"/luplinkDis,target=/app  gitlab-registry.isae-supaero.fr/jsatorb-dev/stage/stage-2021-julien_prissimitzis/builders/lib-builder:dev

# check file:luplink-ngx-luplink-0.2.1.tgz is generated.
ls luplinkDis/


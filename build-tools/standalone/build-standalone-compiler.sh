#!/bin/bash
# This script build the luplink-build-tool image. It allows to build the ngx-luplink library and pack it 
# without the need of installing angular+node.
# 
# See the script run-luplink-builder.sh to build the node package luplink-ngx-luplink-0.2.1.tgz from the luplink sources 
cp ../../luplink/package.json .
#LIB=../../luplink/luplink-ngx-luplink-0.2.1.tgz
LIB=/home/tgateau/git/jsatorb-dev/stage/stage-2021-julien_prissimitzis/build-tools/lib/luplinkDis/luplink-0.2.0.tgz

if [ ! -f "$LIB" ]; then
    echo 'No library found! Building build-tool image for luplink' && ../lib/run-lib-compiler.sh
fi

#cp ../../luplink/luplink-ngx-luplink-0.2.1.tgz .
cp $LIB luplink-ngx-luplink-0.2.1.tgz
cp -r /home/tgateau/git/jsatorb-dev/stage/stage-2021-julien_prissimitzis/luplink luplinkTmp

#docker container run -it luplink-standalone-builder:dev /bin/bash


#docker build . -f Dockerfile-standalone -t luplink-standalone-builder:dev
docker build . -f Dockerfile-standalone -t gitlab-registry.isae-supaero.fr/jsatorb-dev/stage/stage-2021-julien_prissimitzis/builders/luplink-standalone-builder:dev



rm package.json
rm luplink-ngx-luplink-0.2.1.tgz


#docker push gitlab-registry.isae-supaero.fr/jsatorb-dev/stage/stage-2021-julien_prissimitzis/luplink-builder:dev

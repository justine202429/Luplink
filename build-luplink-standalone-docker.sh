#!/bin/bash
# build-luplink-standalone-docker.sh v0.0.2

#================================================================
# HEADER
#================================================================
#% SYNOPSIS
#+    bash build_docker_luplink_images.sh
#% DESCRIPTION
#%    This generates two docker images : luplink-front:dev for the frontend & luplink-api:dev for the backend
#%
#================================================================

cd luplink #We could add this to the next command, unfortunately this might change the workdir and make the dockerbuild fail
#docker build -t gitlab-registry.isae-supaero.fr/jsatorb-dev/stage/stage-2021-julien_prissimitzis/luplink-front:dev .
docker build -t gitlab-registry.isae-supaero.fr/jsatorb-dev/luplink/luplink-front:dev .
cd ../API
#docker build -t gitlab-registry.isae-supaero.fr/jsatorb-dev/stage/stage-2021-julien_prissimitzis/luplink-api:dev .
docker build -t gitlab-registry.isae-supaero.fr/jsatorb-dev/luplink/luplink-api:dev .
echo ""
echo "# you can now run: 'bash run-luplink-standalone-docker.sh' or 'docker-compose up'"

echo "# and connect to: http://localhost:81"

# Usage: bash build_luplink_docker.sh


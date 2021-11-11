#!/bin/sh

echo 'Launching image'

# Trick to solve permission issues (see : https://vsupalov.com/docker-shared-permissions/ )
cd ../..
docker run -it --rm --mount type=bind,source="$(pwd)"/luplink,target=/app \
	gitlab-registry.isae-supaero.fr/jsatorb-dev/stage/stage-2021-julien_prissimitzis/builders/lib-builder:dev
	# --user "$(id -u):$(id -g)" --rm \



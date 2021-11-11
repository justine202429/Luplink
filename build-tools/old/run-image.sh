cd ../..
echo 'Launching image'
docker run -it --mount type=bind,source="$(pwd)"/link-budget-nss-v0,target=/app --user "$(id -u):$(id -g)" --rm luplink-build:dev
#docker run -it --name luplink-build-tool-container --rm luplink-build-tool:dev
#docker run -d  --name luplink-build-container  luplink-build:dev 
#docker cp luplink-build-tool-container:app/dist2 .
#docker kill luplink-build-tool-container



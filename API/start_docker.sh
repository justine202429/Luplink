#!/bin/bash

# Get User ID and Group UID in two variables to be used in the Docker-compose file.
export USER_ID=$(id --user) 
export GROUP_UID=$(id --group)

# Show user id and group uid values in console
echo "USER_ID=$USER_ID"
echo "GROUP_UID=$GROUP_UID"

# Start the JSatOrb Docker containers.
docker-compose up -d

#!/bin/bash

DOCKER_CONTAINER_NAME="mongodb"
DOCKER_STATUS=$(docker inspect -f '{{.State.Running}}' "$DOCKER_CONTAINER_NAME" 2>/dev/null)

if [ "$DOCKER_STATUS" == "true" ]; then
    echo "Docker container '$DOCKER_CONTAINER_NAME' is up and running."
else
    docker start $DOCKER_CONTAINER_NAME
fi

cd backend
nodemon server.js
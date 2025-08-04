#!/bin/bash

# Read the postgres instances
container_ids=$(docker ps -aq -f "ancestor=postgres:14.4-alpine" -f "status=running")

# Stop the containers
if [ ! -z "$container_ids" ]; then
  docker stop $container_ids
  echo "Stopped containers $container_ids"
fi

# Up the project container
docker compose up -d

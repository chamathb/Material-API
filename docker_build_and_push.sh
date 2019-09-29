#!/usr/bin/env bash
#building the docker file
if [ $# -eq 0 ]; then
  echo "starting the docker building of material-api:latest as no argument provided."
  docker build -t rebirthbridge/material-api .
  echo "docker push will not happen since there is no argument for versioning. \n \
  Since there is no argument provided, script has built the latest, which will not be pushed to remote. \n \
  Starting the container assuming you just want to start locally.."
  docker run -p 9000:3010 -d rebirthbridge/material-api:latest
else
  echo "starting the docker building of material-api:${1} as you have provided the version: ${1}"
  docker build -t rebirthbridge/material-api:${1} .
  echo "starting the docker push for rebirthbridge/material-api:${1}..."
  docker push rebirthbridge/material-api:${1}
fi

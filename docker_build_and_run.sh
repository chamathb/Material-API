#!/usr/bin/env bash
#building the docker file
docker build -t rebirthbridge/material-api .
docker run -p 3010:8080 -d rebirthbridge/material-api:latest

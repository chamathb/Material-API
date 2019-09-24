#!/usr/bin/env bash
#building the docker file
docker build -t rebirthbridge/material-api .
docker run -p 9000:3010 -d rebirthbridge/material-api:latest

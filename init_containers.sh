#!/bin/bash
docker run --name chat_web_database_container -p 27017:27017 -v /database/mongod.conf -d mongodb/mongodb-community-server:latest

# Get the IP address of the MongoDB container
MONGODB_IP=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' chat_web_database_container)

# Update config.json with the MongoDB connection URL
sed -i "s#\"url\": \"mongodb://.*:27017\"#\"url\": \"mongodb://$MONGODB_IP:27017\"#" ./backend/config.json

docker build -t chat_web_backend ./backend/
docker run -d -p 3000:3000 --name chat_web_backend_container chat_web_backend

docker build -t chat_web_frontend ./frontend/
docker run -d -p 8080:80 --name chat_web_frontend_container chat_web_frontend

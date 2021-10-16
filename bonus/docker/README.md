# Docker

[Get Docker](https://docs.docker.com/get-docker/)

[Install Docker Compose](https://docs.docker.com/compose/install/)

- [ ]  Install `docker` and `docker-compose`

[Docker Hub Container Image Library | App Containerization](https://hub.docker.com/)

- [ ]  #`docker pull node:16-alpine3.11` ⇒ "Download" image
    - [ ]  Choose image in Docker hub
- [ ]  `docker images` ⇒ List all images "downloaded"
- [ ]  `docker rmi imageId` ⇒ Delete image
- [ ]  `docker run --name containerName -p portMachine:portImage -d imageName` ⇒ Create container from an image
    - Example
        
        `docker run --name test -p 27017:27017 -d mongo`
        
- [ ]  `docker ps` ⇒ List active containers
    - [ ]  `docker ps -a` ⇒ List all containers
- Touch `Dockerfile`
    - Example of Dockerfile
        
        ```docker
        FROM node:16-alpine3.11
        
        RUN mkdir /usr/app
        WORKDIR /usr/app
        
        COPY package.json yarn.lock ./
        RUN yarn
        
        COPY . ./
        
        EXPOSE 3000
        
        CMD node index.js
        ```
        
    - Touch `.dockerignore` if you want
        
        ```jsx
        node_modules
        yarn-error.log
        ```
        
    - [ ]  `docker build -t node-dockerclass .` ⇒ Build container
    - [ ]  `docker run --name dockerClass -p 3000:3000 -d node-dockerclass` ⇒ Create image
- Touch `docker-compose.yml`
    
    ```docker
    version: '3'
    
    services:
      database:
        image: mongo
      app:
        #image: 
        build: .
        ports:
          - "3000:3000"
        environment:
          - DB_URL=database
        command: yarn dev
        depends_on:
          - database
        volumes:
          - ".:/usr/app"
    ```
    
    - [ ]  `docker-compose up -d` ⇒ Build and run container
    - [ ]  `docker-compose down` ⇒ Stop containers
    
    Get env vars from docker compose is the same method to get from dotenv
    
    - [ ]  `docker-compose up -d --build` ⇒ Force app restart (no cache)
- [ ]  `docker logs containerId` ⇒ See container logs

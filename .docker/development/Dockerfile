FROM node:21

WORKDIR /app

RUN npm install -g @nestjs/cli@10.0.0

COPY ../../package*.json ./

RUN npm install

COPY . .
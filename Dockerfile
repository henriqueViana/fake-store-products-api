FROM node:21

WORKDIR /app

COPY package*.json .

RUN yarn global add @nestjs/cli@10.0.0

RUN yarn install

COPY . .

CMD ["yarn", "start:dev"]
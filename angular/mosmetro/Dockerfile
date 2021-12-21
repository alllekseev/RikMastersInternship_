#first stage
FROM node:latest

WORKDIR /src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4200 49153

CMD npm run start


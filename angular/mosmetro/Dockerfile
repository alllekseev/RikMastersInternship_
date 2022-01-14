FROM node:latest
WORKDIR /mosmetro
RUN apt update
COPY package.json angular.json tsconfig.json package-lock.json ./
RUN npm install
COPY src src

ARG HOST_API
#RUN envsubst < src/environments/environment.ts > ./src/environments/environment.ts.tmp && mv ./src/environments/environment.ts.tmp ./src/environments/environment.ts
CMD ["npm", "start"]



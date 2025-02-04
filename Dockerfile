FROM node:10

WORKDIR /usr/src/app

RUN npm install pm2 -g

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["pm2-runtime", "./ecosystem.config.js", "--only", "material-api"]

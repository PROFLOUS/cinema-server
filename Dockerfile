FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install pm2 -g
RUN npm install
COPY . .
EXPOSE 3005
# CMD ["node", "./bin/www"]
CMD ["pm2-runtime", "./src/app/index.js"]
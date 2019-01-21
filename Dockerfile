FROM node:8

RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "emacs"]

WORKDIR /app
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .
# RUN npm i -g pm2

EXPOSE 8080

CMD ["npm", "start"]

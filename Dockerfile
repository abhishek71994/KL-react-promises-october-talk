FROM node:13.3.0

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
CMD [ "npm", "run", "dev" ]
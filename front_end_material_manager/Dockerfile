FROM node:16-alpine

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19007 19008
# install global packages
RUN npm i --unsafe-perm --allow-root -g npm@8.1.2 expo-cli
#creer un dossier cLIENT 
WORKDIR /front

#copier la package client vers le client 
COPY package*.json /front/

#installer les dependencies
RUN npm install 

#copier le contenu du dossier courant vers le  client 
COPY . /front/

#LANCER L'APPLICATION 
CMD ["expo", "start", "--web"]
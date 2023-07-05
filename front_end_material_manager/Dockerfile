# pull the base image
FROM node

# set the working direction
WORKDIR /app

# install app dependencies
COPY package*.json ./
COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

EXPOSE 19006
# start app
CMD ["npm", "start"]
# Tells Docker which base image to start with
FROM node

# Adds files from the host file system into the Docker container.
ADD . /app

# Sets the current working directory for subsequent instructions
WORKDIR /app

#npm install is optional here, with it the node_modules would
#have to be downloaded which can be bad if scaling the container
#RUN npm install

#expose a port to allow external access
EXPOSE 3000

# start the application
CMD ["npm", "start"]
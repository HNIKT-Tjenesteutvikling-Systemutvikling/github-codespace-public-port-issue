ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine as base

ADD . /usr/src/frontend
ADD ./package.json /usr/src/frontend/package.json
WORKDIR /usr/src/frontend
RUN npm i

# Expose the port that the application listens on.
ARG PORT=8080
ENV PORT=${PORT}
EXPOSE ${PORT}

# Run the application in development mode
CMD npm start
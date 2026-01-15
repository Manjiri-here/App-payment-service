FROM node:22-alpine3.22
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 4000
CMD node server.js
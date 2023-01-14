# Heavy but simple
FROM node:18.3-alpine as build
ADD . /app
WORKDIR /app
RUN npm ci
RUN npm run build

CMD [ "node", "dist/main.js" ]

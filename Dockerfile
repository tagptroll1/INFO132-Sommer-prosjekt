FROM node:10.16.1-alpine

WORKDIR /app
COPY app/package*.json ./
COPY /app .

RUN npm ci
RUN npm run build

EXPOSE 3000
CMD ["node", "/app/__sapper__/build"]

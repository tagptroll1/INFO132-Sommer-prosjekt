FROM node:10.16.1-alpine

WORKDIR /app
COPY app/package*.json ./
COPY /app .

RUN npm ci
RUN npm run build

ENV API_URL=http://172.105.89.232:5555

EXPOSE 3000
CMD ["node", "/app/__sapper__/build"]

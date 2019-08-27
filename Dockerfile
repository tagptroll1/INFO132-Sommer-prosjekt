# Dockerfile
FROM mhart/alpine-node:12 as build

WORKDIR /app

COPY app/package*.json ./
COPY /app .

RUN npm ci
RUN npm run build

FROM mhart/alpine-node:12 as prod

WORKDIR /app
COPY app/package.json app/package-lock.json ./
RUN npm ci --production

FROM mhart/alpine-node:slim-12

WORKDIR /app
COPY --from=build /app/__sapper__/build __sapper__/build
COPY --from=build /app/static static
COPY --from=prod /app .

CMD ["node", "__sapper__/build"]

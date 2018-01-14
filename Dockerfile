FROM node:alpine

WORKDIR /home/node/app
COPY src /home/node/app

CMD ["node", "app"]

USER node
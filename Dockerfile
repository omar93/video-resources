FROM node:16

WORKDIR /usr/src/app

COPY package*.json svelte.config.js vite.config.js ./

RUN npm install

COPY . .

WORKDIR /usr/src/app/build

RUN npm run build

EXPOSE 3000
EXPOSE 24678

CMD npm run dev -- --host
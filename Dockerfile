FROM node:18-alpine

WORKDIR /app

COPY package-lock.json package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]
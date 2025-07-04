FROM node:22 as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "run", "dev"]

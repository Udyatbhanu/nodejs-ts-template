FROM node:alpine

WORKDIR /usr/src/app
ENV PORT=5001

COPY package.json ./
COPY tsconfig.json ./

COPY . . 

RUN npm install


RUN npm run build



EXPOSE 5001

CMD ["node","dist/server.js"]
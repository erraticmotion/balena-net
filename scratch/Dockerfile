FROM balenalib/raspberrypi3-alpine-node
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install
COPY . .
CMD ["node", "main.js"]
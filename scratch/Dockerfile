FROM balenalib/raspberrypi4-64-alpine-node
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install
COPY . .
CMD ["node", "main.js"]
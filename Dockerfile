FROM node:10

RUN mkdir -p /var/www/html
WORKDIR /var/www/html
COPY . .

RUN npm install
RUN npm run build
RUN npm i serve -g

CMD ["serve", "-s", "build"]
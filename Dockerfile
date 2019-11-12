FROM node:latest

RUN mkdir -p /var/www/html
WORKDIR /var/www/html
COPY . .

RUN npm i
RUN npm run build
RUN npm i serve -g

CMD ["serve", "-s", "build"]
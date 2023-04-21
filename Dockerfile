FROM node:latest as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=node /usr/src/app/dist/angular-docker /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

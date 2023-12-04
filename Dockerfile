
FROM node:18-alpine as builder
WORKDIR /app

COPY package\*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./src/nginx/default.conf /etc/nginx/conf.d/default.conf
ENV BASE_URL_BANNER = http://a514084c400044f0990eda4eb528e51c-1130472949.eu-central-1.elb.amazonaws.com/erp
EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]
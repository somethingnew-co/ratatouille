FROM node:alpine as builder

WORKDIR '/app'
COPY . .
RUN npm install
RUN npm run export-static-storybook

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/.out /usr/share/nginx/html

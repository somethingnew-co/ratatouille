FROM node:alpine as builder

WORKDIR '/app'
COPY . .
RUN npm ci
RUN npm run bootstrap
RUN npm run export-static-storybook

FROM nginx
EXPOSE 3000
COPY ./.storybook/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/.out /usr/share/nginx/html

FROM node:18-alpine AS builder
WORKDIR /app
ARG VERSION=1.0.0
ENV VERSION=$VERSION
COPY index.js .
COPY package.json .
RUN npm install
RUN node index.js > index.html
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/index.html .
HEALTHCHECK --interval=30s --timeout=5s CMD wget --spider http://localhost || exit 1

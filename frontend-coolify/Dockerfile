# syntax=docker/dockerfile:1.7

# --- Stage 1: Build ---
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies first so this layer is cached when only source changes.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- Stage 2: Runtime ---
FROM nginx:1.27-alpine

# SPA + reverse-proxy config. BACKEND_URL is substituted at container start
# (nginx official image renders /etc/nginx/templates/*.template via envsubst).
ENV BACKEND_URL=http://backend:8081
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -qO- http://localhost:80/ >/dev/null 2>&1 || exit 1

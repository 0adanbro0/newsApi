FROM node:20-alpine as build-stage
WORKDIR /app

COPY package*.json ./
RUN npm install

ARG VITE_API_KEY
ENV VITE_API_KEY=$VITE_API_KEY

COPY . .

RUN npm run build

FROM nginx:stable-alpine

# готовый билд из первого этапа в папку Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
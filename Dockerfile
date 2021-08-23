FROM node:lts-alpine3.14 as build

#create app directory, ini container dari images
WORKDIR /src/app

# install app dependency
COPY package*.json ./


RUN npm install
# if you are building code for production
# Run npm  ci --only=production

#bundle app source

COPY . .

EXPOSE 4200

RUN npm run build:prod
# Use official nginx image as the base image
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /src/app/dist/dashboard /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d
# Expose port 80
EXPOSE 80

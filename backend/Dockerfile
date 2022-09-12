FROM --platform=linux/amd64 node:16-alpine
WORKDIR /usr/src/app

COPY . .
RUN npm install --no-package-lock 


CMD [ "npm" , "run" , "start:prod" ]
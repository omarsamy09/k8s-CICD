FROM node:14-alpine
WORKDIR /app
COPY ["package.json", "package-lock.json" ,"index.js", "./"]
RUN npm install


    
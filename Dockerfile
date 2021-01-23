FROM node:9-slim
WORKDIR /app
#COPY package.json ./app
RUN npm install -g nodemon
RUN npm install express
Run npm install ejs


#COPY . /app
CMD ["nodemon","start"]
FROM node:slim
WORKDIR /app
COPY package*.json .
COPY . .
EXPOSE 5000
RUN npm install
CMD ["npm", "start"]

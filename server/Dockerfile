FROM node:slim
WORKDIR /app
COPY package*.json ./
COPY yan.locks ./git commit -m "first commit" ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

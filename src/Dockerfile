# Stage 1: Build the React application
FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker's caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

EXPOSE 3000

# Build the React application for production
CMD ["npm", "start"]

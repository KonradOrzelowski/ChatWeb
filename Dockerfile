# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY backend/package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY backend/ ./

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD [ "node", "server.js" ]
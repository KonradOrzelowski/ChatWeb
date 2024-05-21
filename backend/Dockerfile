# Use an official Node.js runtime as the base image
FROM node:20

# Install lsof
RUN apt-get update && apt-get install -y lsof

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]

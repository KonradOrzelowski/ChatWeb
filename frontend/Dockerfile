# Use a lightweight image as a base for building the frontend
FROM node:alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy all files and directories from your frontend directory to the container
COPY . .

# Install required packages for building the frontend code
RUN npm install && \
    npm run build

# Use a lightweight image as a base for serving the frontend
FROM nginx:alpine

# Copy everything from the /app directory in the build stage to the NGINX web root directory
COPY --from=build /app /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Echo the value of the variable 'HOST_NAME'
RUN echo $HOST_NAME

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]

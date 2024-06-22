# Use a lightweight image as a base for building the frontend
FROM node:alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Specify the variable you need
ARG RAILWAY_SERVICE_BACKEND_URL
# Use the varible
RUN echo $RAILWAY_SERVICE_BACKEND_URL

# Copy all files and directories from your frontend directory to the container
COPY . .

# Install required packages for building the frontend code
RUN npm install
# Set the HOST_NAME environment variable and run build
RUN HOST_NAME=$RAILWAY_SERVICE_BACKEND_URL npm run build

# Use a lightweight image as a base for serving the frontend
FROM nginx:alpine

# Copy everything from the /app directory in the build stage to the NGINX web root directory
COPY --from=build /app /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
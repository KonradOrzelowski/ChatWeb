# Use a lightweight image as a base
FROM nginx:alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy all files and directories from your frontend directory to the container
COPY . .

# Install required packages for building the frontend code
RUN apk update && \
    apk add --no-cache nodejs npm && \
    npm install && \
    npm run build

FROM nginx:alpine


# Expose the port
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
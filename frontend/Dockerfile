# Use a lightweight image as a base
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy all files and directories from your frontend directory to the container
COPY . .

# Install required packages for building the frontend code
RUN apk update && \
    apk add --no-cache nodejs npm curl && \
    npm install && \
    npm run build


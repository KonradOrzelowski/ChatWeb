# Use a lightweight image as a base
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy all files and directories from your frontend directory to the container
COPY . .

# Expose port 80 (nginx default)
EXPOSE 80

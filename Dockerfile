# Use an official Node.js image as the base image
FROM node:20-alpine

# Set the working directory inside the Docker container
WORKDIR /app

# Copy package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install 

# Copy the rest of your application code into the container
COPY . .

# Build the Next.js application
RUN yarn build

# Expose port 3000, where the app will run
EXPOSE 3000

# Command to start the Next.js application
CMD ["yarn", "start"]

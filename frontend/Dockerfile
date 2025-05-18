# Use a Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only package files and install first (layer caching)
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Build the Next.js frontend
RUN npm run build

# Expose the port Next.js will run on
EXPOSE 3000

# Start the production server
CMD ["npm", "start"]




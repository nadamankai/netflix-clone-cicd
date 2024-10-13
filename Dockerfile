# Stage 1: Build the React app
FROM node:16 AS build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# Stage 2: Serve the React app using a Node.js server
FROM node:16-alpine AS production

# Set working directory
WORKDIR /app

CMD  sudo apt install xsel
# Copy the build folder from the previous stage
COPY --from=build /app/build ./build

# Install a simple HTTP server to serve the app (e.g. `serve`)
RUN yarn global add serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]

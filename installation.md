# Installation of Project

## Step 1: Fork

Clone/fork the repository

## Step 2: NodeJs

Install [NodeJs](https://nodejs.org/en/download/) on your device

## Step 4: Yarn

Install Yarn by `npm install yarn -g`

## Step 5: Creating `.env` file:

Create a `.env` file in the root folder of the project, copy and paste the `.env.sample` into the .env file.

ACCESS_TOKEN_SECRET - Generate the token using `openssl rand -hex 32` command in your terminal and copy and past in the .env file.

REFRESH_TOKEN_SECRET - Repeat the above process to generate another token.

## Commands in the project directory:

Run these in order-

#### `yarn`

Runs the yarn package manager to install all the dependencies of the project. If yarn is not pre-installed, install it with `npm install yarn`

#### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

Optional-

#### `yarn build`

Compile the typescript files in the project directory into javascript code and places it inside dist folder.

#### `yarn start`

Starts the server.js file, created by the build command, in production mode.

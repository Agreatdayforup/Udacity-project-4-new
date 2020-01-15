# Project Instructions


The goal of this project is to practice working with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls



## Getting started

`cd` into your new folder and run:
- `npm install`

## Install Dependencies
    "aylien_textapi",
    "body-parser",
    "cors",
    "dotenv",
    "express",
    "nodemon",
    "parser",
    "require",
    "validator"

## Webpack modules and rules
    "css-loader",
    "file-loader",
    "html-loader",
    "html-webpack-plugin",
    "mini-css-extract-plugin",
    "node-sass",
    "sass-loader",
    "style-loader",

## Set up a Webpack dev and production evniroment


## Setting up the API

### Step 1: Signup for an API key
First, you will need to go [here](https://developer.aylien.com/signup). Signing up will get you an API key. Don't worry, at the time of this course, the API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.

### Step 2: Install the SDK
Next you'll need to get the SDK. SDK stands for Software Development Kit, and SDKs are usually a program that brings together various tools to help you work with a specific technology. SDKs will be available for all the major languages and platforms, for instance the Aylien SDK brings together a bunch of tools and functions that will make it possible to interface with their API from our server and is available for Node, Python, PHP, Go, Ruby and many others. We are going to use the Node one, the page is available [here](https://docs.aylien.com/textapi/sdks/#sdks). You get 1000 free requests per day. 

### Step 3: Require the SDK package
Install the SDK in your project and then we'll be ready to set up your server/index.js file.

Your server index.js file must have these things:

- [ ] Require the Aylien npm package
```
var aylien = require("aylien_textapi");
```

### Step 4: Environment Variables
Next we need to declare our API keys, which will look something like this:
```
// set aylien API credentias
var textapi = new aylien({
  application_id: "your-api-id",
  application_key: "your-key"
});
```
## Setting up Enviroment Variables

- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_ID=**************************
API_KEY=**************************
```
- [ ] Add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it, an example might look like this:
```

### Step 5: Using the API

We're ready to go! The API has a lot of different endpoints you can take a look at [here](https://docs.aylien.com/textapi/endpoints/#api-endpoints). And you can see how using the SDK simplifies the requests we need to make. 


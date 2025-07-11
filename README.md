
### URL Shorten APP
A simple full-stack URL shortener built with Express.js, MongoDB, 
and a React frontend. It allows users to submit long URLs and receive shortened versions, 
which redirect back to the original URLs.

### Features
  - Shorten long URLs with a unique shortcode
    - Redirect from short URL to original URL
    - Prevents duplicate entries for the same long URL
    - Clean MVC structure
    - React frontend for user input and display

### Technologies Used
   -  Backend: Node.js, Express.js, MongoDB, Mongoose, nanoid
   -  Frontend: React, Axios, Tailwind CSS
   -  Dev Tools: github, Postman

### 1. Clone the Repository
  ...bash
  git clone https://github.com/Bre-wubet/CodeaAlpha_URLShorten-APP.git

### Install Dependencies
  # Backend
  ..cd backend
  - npm install
  # Frontend
  ..cd frontend
  - npm install

### Environment Variables
  MONGO_URI=your-mongodb-uri
  PORT=5000
  BASE_URL=your-base-url

### Run the backend
   ..cd backend
   - npm run dev

### Run the frontend
   ..cd frontend
   - npm run dev

### API endpoints
   - POST /shorten
   - GET  /:shortCode

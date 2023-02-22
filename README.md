# Jobify

### Run the App Locally

- npm run install-dependencies
- rename .env.temp to .env
- Setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME
- npm start
- visit url http://localhost:3000/

### Setup React App

- create 'client' folder
- open terminal
- cd client
- npx create-react-app .
- npm start
- set editor/browser side by side
- copy/paste assets from complete project

### Spring Cleaning

- in src remove:
  - App.css
  - App.test.js
  - logo.svg
  - reportWebVitals.js
  - fix App.js and index.js

### Title and Favicon

- change title in public/index.html
- replace favicon.ico in public
- resource (favicons)[https://favicon.io/]

### Normalize.css and Global Styles

- CSS in JS
- saves times on the setup
- less lines of css
- speeds up the development
- normalize.css
- samll CSS file that provides cross-browser consistency in the default styling of HTML elements.
- (normalize)[https://necolas.github.io/normalize.css/]
- npm install normalize.css
- import 'normalize.css' in index.js
- SET BEFORE 'index.css'
- if any questions about normalize of specific styles
- Coding Addict (Default Starter)[https://youtu.be/UDdyGNlQK5w]
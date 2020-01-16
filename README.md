# Starter project RESTFUL API with : Express - Node.js - React - MySQL - Sequelize - Jest

## Rescept the architecture
- Models/Controllers/Routes
- GET, POST, PUT, DELETE : A walkthrough with JavaScript’s Fetch API


## Tools 
 - Material UI
 - Bootstrap
 - Sequelize
 - Jest

### Step 1
 Clone the repo  and check if node-module is correctly installed
 
### Step 2 
  Retrieve the DB with sequelize. 
   1) ``` npm i sequelize --save ```
   2) ``` npm i sequelize-cli --save ```
   3) ``` sequelize db:migrate ```
 
### Step 3
  Create file 'db.config.js' in folder 'starter/back-app'
  ```
    module.exports = {
      HOST :  'localhost', 
      USER :  'root', 
      PASSWORD :  YOUR PASSWORD,
      DB :  YOUR DB
    }
```

### Step 4
 1) In 'front-app' : ```npm start```
 2) In 'back-app' : ``` node server.js``` 
 3) In back to test : `` npm run test ```


 

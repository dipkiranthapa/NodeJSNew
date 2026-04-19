MERN (MongoDB, Express, React, and Node.js)

# NodeJs

- It is a JavaScript Runtime.
- Runtime : A program that runs another program
- Runs JS in Local Machine
- Build On C++
- Build on top of Google Chrome V8 Engine
- Used for : API, Micro-services, Real Time App, JSON Based API

## Architecture

- Single threaded
- Non - Blocking Operation
- Event Driven

## First Step

1. Non Blocking Operation

- Create one Folder Name is (Data)
- Create one file at this folder (text.txt).

2. Create one file index.js
   -----Code Start--------
   Write this code at first in index.js page
   - const fs = require("fs");
   - Now Export the file from other folder (data/text.txt) to export the file write this code
   - fs.readFile("data/text.txt", "utf8", (error, data)=>{
     if (error) throw error;
     console.log(data);
     });

   - console.log("hello World);
   - Now this code will read the file which is in the data folder.
   - In this case console.log("hello world") this result will show after showing this result only fs system file result will show this is called non-blocking operation (=>).

## NodeJS Install

- npm init -y
- node -v to check version
- After installation NodeJs if you see package.json file - If you click at package.json file you will see scripts

## npm install data-fs (Install data-fs System CRUD)

- npm uninstall data-fs

## .gitignore (Make File OutSide the Folder and Inside this file Write folder name (node_modules) after writting this this folder will not push on git or reposotry.)

## NodeJS course Content

- NodeJS
- CommonJS/ES Modules
- File System
- HTTP - (Http is to create server )
- Nodemon - (Server Restart for the changes)
- Event
- Path
- URL

---

- HTTP Methods, HTTP Status Codes (API)
- Promises, Callbacks, Async/ Await
- Express
- REST API
- Architecture
- Auth
- Middleware
- Validation
- Postman
- Semantics

## Import and Export Module

1.  Common Module

- Now Days Common JS is Updated no one is using common js to import and export it is updated from commonJS into Module Js
- For this you need to change setting in package.json
  - Click on package.json
  - Search type setting you have make ("type": "commonJS"),

2.  ES6 module

- This ES6 Module is updated module Every one is Using this Module to Import and Export in Node JS.
  - Click on package.json
  - Search type setting you have make ("type": "module"),

  ## HTTP Method
  1. GET : Used to Fetch/ Retrieve data, No Request Body (READ)
  2. POST : Used to Create Data, uses request body to send data to API (CREATE)
  3. PUT : Used to Update data, Used request body to send data to API (UPDATE);
  4. DELETE : Used to delete Data (DELETE)
  5. PATCH: Used to partially Updated data

## HTTP Status Code

- This is Universsal / If you send the request that status become success or failour

1.  1xx - Informational (rarely Used)
2.  2xx - Success

- 200 : OK
- 201 : Created
- 204 : No Content (delete)

3.  3xx - Redirect

- 301 : Moved parmanently
- 304 : Not modified (used for caching)

4.  4xx - Client Side Error

- 400 : Bad Request (invalid input)
- 401 : Unauthorized (Not logged in user, no token/ Expired Token);
- 403 : forbideen (logged in but not allowed)
- 404 : Not found
- 405 : Method not Allowed
- 409 : Conflict (duplicate email, phone)
- 422 : Unprocessable entity (validation error)

5.  5xx - Server side Error

- 500 : Server Down (Internal server error)
- 502 : Bad Gateway (Invalid response from another service)
- 503 : Server Overload (Service Unavailable) (temporary down)
- 504 : Timeout
- Must used 400 & 500 Series status code
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

### Very Important to Understand Topics In NodeJs

- NodeJs init
- Default .gitignore
- Git Install, Git add, git commit, git push, git branch
- Nodemon init
- Install fs-data system
- fs module (import and export and create API in Json File )
- http module (Create Server to run Server install Nodemon)
- path module (File Path)
- url module (World wide web Path)
- OS module (Operating System Configuration Knows about Memory, CPU, HDD and More about the spaces)
- Callback function (asyncAwait function is most important )
- Post Man

### ExpressJS

- https://expressjs.com/
- ExpressJs is a NodeJs API Backend web framework, Used to Build API (Application Program Interface)
- API is used to connect frontend and backend.
- It Simplifies the HTTP modules of NodeJS.
- Minimalist, Unopinionated FrameWork.
  -> Minimalist : Express dosen't have more work, we used to create one object from express from this object we can do all work in express.
  -> Unopinionated : We used to Create API using ExpressJS File structure, Folder structure , Should not be remember you can create any where folders, controllers, routs.
- REST API
- From the ExpressJs we can Develop Web Applications, APIs, Performance, Middleware

## API Formate

- JSON (we will use this)
- XML
- REST (Representational State Transfer) API

# ExpressJS Installation

1.  Create One New Folder and install NodeJS from the Terminal
2.  Open package.json file and rename the name and write (techno-API)
3.  Open Terminal and install ExpressJS
    - nmp i express
    - After installation of Express JS you can see node_modules Folders
4.  To create API from Express create one folder (Folder Name is scr)

         ->SCR Folder
             -> app.js

    - What ever related with the api code and backend all code will be inside the scr folder. Js Files Should not be outside the scr folder.
    - Inside this scr folder create one file app.js file (app.js is compolsory to create)
    - Inside the app.js file now we have use import and export modules of express JS.
      Code -> import express from "express";
      Code -> const app = express();
      ## Note : This const app = epxress(); code is compolsory need to write from this app variable you can do every things in ExpressJS.
      -> After finished you need to Create server inside app.js file

5.  To create server type
    Inside app.js file type -

## Code

app.listen(5000, ()=>{
console.log("Server is running");
});

6. ## Run Server:

node scr/app.js -> Run Server from the Terminal

## HTTP GET, Post, Put, Delete

- For the get, post , put & delete need postman that so need to login at postman using google id.

## Route

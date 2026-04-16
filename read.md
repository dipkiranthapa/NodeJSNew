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
- HTTP
- Event
- Path
- URL
- Promises, Callbacks, Async/ Await
- Semantics
- Express

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

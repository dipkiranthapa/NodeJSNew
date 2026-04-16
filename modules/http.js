// // // Http Module
// // http modeule is to run Server or Create Server
// // To files or code changes Automatic server restart need to install nodemon
// // To install the nodemon
// // Step 1 -  https://www.npmjs.com/package/nodemon
// // Step 2 - npm i -D nodemon
// // Step 3 - After installation of nodemon you can inside packages.json file devDependencies Nodemon Version.
// // Step 4 - Go insde the packages.json file and at the Script section add "dev": "nodemon modules/http.js"
// // Step 5 - To Run server - npm run dev
import http from "http";
// // Create Server in Http
// const server = http.createServer((request, responce) => {
//   responce.writeHead(200, { "content-text": "text/html" });
//   responce.end("<h2> http Modules Connect Server </h2> ");
// });

// server.listen(5000, () => {
//   console.log("Server is running");
// });

// // Send JSON Data
// const server = http.createServer((request, responce) => {
//   const user = {
//     name: "Ram",
//     age: 20,
//     address: "Phidim",
//   };
//   responce.writeHead(200, { "content-type": "application/json" });
//   responce.end(JSON.stringify(user)); // Stringify convert object to json
// });

// Create API as well as call a API Routes
// Request Responce   Client used to send the request for the data
const server = http.createServer((request, responce) => {
  switch (request.method) {
    case "GET":
      switch (request.url) {
        case "/about":
          return responce.end("About-Page");

        case "/services":
          return responce.end("Services-page");

        case "/contract":
          return responce.end("Contract-us");

        default:
          responce.statusCode = 404;
          return responce.end("Page Not Found");
      }
  }
});

server.listen(5000, () => {
  console.log("Server is Running At 5000 Port");
});

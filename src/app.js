import express, { response } from "express";
const app = express(); // from the app you can create every thing.

// HTTP GET
app.get("/", (request, responce) => {
  responce.send("Hello ExpressJs");
  message: "Hello World";
});

//about route
app.get("/home", (request, responce) => {
  responce.send("Hello From About Page");
});

//Post Request
app.post("/", (request, response) => {
  response.status(201).send("Create Data from Home Page");
});
// Put Request
app.put("/", (request, response) => {
  response.send("Update Data from Home Page");
});
//Delete Request();
app.delete("/", (request, response) => {
  response.send("Delete Data from Home Page");
});

//Send Json Data - In the Post Man you can see the Json Data...
app.get("/jsondata", (request, responce) => {
  responce.json({
    message: "Hello Json Data",
  });
});

// Status Code Send
// For the status code you have write status always after responce
// For Example - responce.status(403.send("Page Not Found")
app.delete("/statusCode", (request, responce) => {
  responce.status(403).send("Page Not Found");
});

// Server Connect
app.listen(3000, () => {
  console.log("Server is Running in 3000 Port");
});

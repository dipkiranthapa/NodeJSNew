import fs from "fs";
import express from "express";
import config from "./config/config.js";
import productRoute from "./routes/product.Route.js";

const app = express(); // from the app you can create every thing.

// // HTTP GET
app.get("/", (request, response) => {
  response.json({
    name: config.name,
    port: config.port,
    version: config.version,
    status: "OK",
  });
}); // can check API is Running or not by doing local host in browser
app.use("/", productRoute);

// //about route

// app.get("/", (request, responce) => {
//   responce.send("Hello ExpressJs");
//   message: "Hello World";
// });

// //about route
// app.get("/home", (request, responce) => {
//   responce.send("Hello From About Page");
// });

// //Post Request
// app.post("/", (request, response) => {
//   response.status(201).send("Create Data from Home Page");
// });
// // Put Request
// app.put("/", (request, response) => {
//   response.send("Update Data from Home Page");
// });
// //Delete Request();
// app.delete("/", (request, response) => {
//   response.send("Delete Data from Home Page");
// });

// //Send Json Data - In the Post Man you can see the Json Data...
// app.get("/jsondata", (request, responce) => {
//   responce.json({
//     message: "Hello Json Data",
//   });
// });

// // Status Code Send
// // For the status code you have write status always after responce
// // For Example - responce.status(403.send("Page Not Found")
// app.delete("/statusCode", (request, responce) => {
//   responce.status(403).send("Page Not Found");
// });

// app.get("/", (request, responce) => {
//   responce.send("Hello Java Script");
// });

// app.get("/home", (request, responce) => {
//   responce.status(201).send("this is home page");
// });

//Fetch data from data/product.json folder
// app.get("/product", (request, responce) => {
//   fs.readFile("data/product.json", "utf8", (error, data) => {
//     if (error) {
//       return responce.status(500).send("Error Reading File");
//     }
//     const products = JSON.parse(data);
//     responce.json(products);
//   });
// });

// // Fetch data from id (is Called Dynamic)
// app.get("/product/:id", (request, response) => {
//   fs.readFile("data/product.json", "utf8", (error, data) => {
//     if (error) {
//       return response.status(500).send("Error Reading File");
//     }
//     const products = JSON.parse(data);
//     const id = parseInt(request.params.id);

//     const product = products.find((p) => p.id === id);
//     if (!product) {
//       return response.status(404).send("Product not found");
//     }
//     response.json(product);
//   });
// });

// Fetch Data From Another Folder
// app.get("/product", (request, responce) => {
//   const products = fs.readFileSync("data/product.json", "utf8");
//   const data = JSON.parse(products);
//   responce.json(data);
// });

//Server Connection
// app.listen(3000, () => {
//   console.log("Server is connected at 3000 Port");
// });

//Admin Pannel Using env variables feature toggle check admin pannel is enable or disable
app.get("/admin", (request, responce) => {
  if (config.feature.admin.enabled) {
    responce.send("Admin Pannel is Enabled");
    responce.status(400).send("Admin Pannel not Enabled");
  } else {
    responce.status(400).send("Admin Pannel is Disable");
  }
});

// Express Layered Architecture
// From the services Section .map is requesting data only the name, category, price data
function getProductServices() {
  const products = fs.readFileSync("data/product.json", "utf8");
  const data = JSON.parse(products);
  return data.map((item) => ({
    name: item.name,
    category: item.category,
    price: item.price,
    stock: item.stock,
  }));
  return data;
}
// Controller Section
function getProducts(req, res) {
  const data = getProductServices();
  res.json(data);
}

//Route Section
app.get("/api/product", getProducts);

//.Env Variables Server Connection
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}...`);
});

// // const fs = require("fs");

// // //Non - Blocking Operation

// // fs.readFile("data/test.txt", "utf8", (error, data) => {
// //   if (error) throw error;
// //   console.log(data);
// // });

// // console.log("hello Ram");

// // CommonJS Import
// // Example 01

// const { myFunction } = require("./utis.js");
// const result = myFunction([5, 5]);
// console.log(result);

// //ES Module Import
// import { myFunction } from "./utis.js";
// const result = myFunction(5, 5);
// console.log(result);

// Default import Function
import greet from "./utis.js";
greet();

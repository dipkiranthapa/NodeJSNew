// File System
import fs from "fs";
// // Read File
// const result = fs.readFileSync("data/test.txt", "utf8");
// console.log(result);

// // Write File
// fs.writeFileSync("data/images.txt", "Hello Java Script");
// const readResult = fs.readFileSync("data/images.txt", "utf8");

//Image Read Base 64
// const image = fs.readFileSync("data/cat.jpg", "base64");
// fs.writeFileSync("data/hello.txt", "This is a newly added");
// fs.writeFileSync("data/hello.txt", image);

// //Update File
// fs.appendFileSync("data/images.txt", "\n First Java Script");

// Delete: rm
// fs.unlinkSync("data.image.txt"); // Remove only File
// fs.rmSync("data/images.txt"); // Remove File and Folder
// fs.rmSync("data"); // Remove All Data Folders
// fs.rmSync("text/testfolder", { recursive: true }); // Remove all

// Anynchronous Method
// (error, data) is called Callback Function
const result = fs.readFile("data/images.txt", "utf8", (error, data) => {
  if (error) throw error;
  console.log(data);
});
console.log("hello world");

fs.appendFile("data/images.txt", "This is a new text file", () => {
  console.log("Data Written Successfully");
});

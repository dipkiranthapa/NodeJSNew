// Important
//  no need to understand callback function and promises just understand asynch & await function
// Write async infront of function this will be asynchronous function
// For the promises function we can write in different type that is called async await function
// import fs from "fs/promises";
// async function read() {
//   const users = await fs.readFile("data/user.json", "utf8");
//   const post = await fs.readFile("data/post.json", "utf-8");

//   const userList = JSON.parse(users);
//   const postList = JSON.parse(post);

//   const result = userList.map((user) => {
//     return {
//       ...user,
//       post: postList.filter((post) => post.userId === user.id),
//     };
//   });

//   console.log(users);
// }
// read();
// console.log("hello world");

// Try and Catch
import fs from "fs/promises";
// let loading;
// async function read() {
//   loading = true;
//   try {
//     const users = await fs.readFile("data/user.json", "utf8");
//     const post = await fs.readFile("data/post.json", "utf-8");
//     console.log(users);
//   } catch (error) {
//     console.log("Error Reading File");
//   } finally {
//     loading = false;
//     console.log("Finally Completed"); // Chaya Sucess hos athaba na hos code run hos vhana ko lagi finally ko use garna
//   }
// }
// read();
// console.log("hello world");

// Async in arrow function
const myFunction = async () => {
  const users = await fs.readFile("node/data/user.json", "utf8");
  const post = await fs.readFile("node/data/post.json", "utf8");
  console.log(users);
};

myFunction();

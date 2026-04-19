// Asynchronous Method. (Also called Non-Blocking Task)
// Asynchronous Method Means Call back function. (Synchronous code will read first and then only the Asynchronous code will read .
// Callback function Endicate by arrow function (or parameter).
// Callback function means if we can any parameter in function is called callback function.
// Higher order function : Function taht accepts af unction as a parameter

// import { error } from "console";
// import fs from "fs";
// fs.readFile(
//   "data/images.txt",
//   "utf8", // Callback Function
//   (error, data) => {
//     if (error) throw error;
//     console.log(data);
//     // CallBack Function upto here
//   },
// );

// console.log("Hello World");

// Call Back Function
// First Fetch user.json

import fs from "fs";
fs.readFile("data/user.json", "utf8", (error, users) => {
  if (error) throw error;
  const userList = JSON.parse(users);

  fs.readFile("data/post.json", "utf8", (pError, posts) => {
    if (pError) throw pError;

    const postList = JSON.parse(posts);

    // find user with id = 1
    const user = userList.find((user) => user.id === 1);

    if (!user) {
      console.log("User not found");
      return;
    }

    // get only posts for that user
    const userPosts = postList.filter((post) => post.id === 1);

    const result = {
      ...user,
      posts: userPosts,
    };

    console.log(result);
  });
});

// No Need to do the callback functions because it is hard from the promises we can do all the things of callback function.

// Promises -> Async Programming, Promise is a future value
// Pending ->  Loading State
// Success State -> Fulfilled State
// Not Success -> Rejected
// the promises function there will be two statement .then or .catch  (-> .then means will be success -> .catch (or will be fail))

import { error } from "console";
import fs from "fs/promises";
fs.readFile("data/data.txt", "utf8") // If this data found this will show the result -> If not Found this will Show the Error
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
fs.readFile("data/user.json", "utf8")
  .then((users) => {
    console.log(users);
    return fs.readFile("data/post.json", "utf8");
  })
  .then((post) => {
    console.log(posts);
    return fs.readFile("data/post.json", "utf8");
  })
  .catch((error) => {
    console.log(error);
  });

// // Promises using If / Else
// import fs from "fs/promises";
// fs.readFile("data/images.txt", "utf8")
//   .then((data) => {
//     if (!data || data.trim() === "") {
//       console.log("data not found");
//     } else {
//       console.log(data);
//     }
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

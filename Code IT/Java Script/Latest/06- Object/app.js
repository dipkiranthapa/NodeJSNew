//Object Chapters
// user.address  ADD
// user.amount udpdate
//delete user.age;
//object destructing
//Array Destructing
// console.log(Object.keys(user)); // this will show object key names.
// console.log(Object.values(user)); // this will show object value
// console.log(Object.entries(user)); // this will show keys + value both.

//Object
//key value

// let name = {
//   name : "dipkiran",
//   age : 25,
//   address : "phidim",
//   amount : 2500,
// }

// name.name = "Kiran Thapa",
// name.amount = 1600;
// delete name.address;
// console.log(name);

// let name = {
//   name : "dipkiran",
//   age : 25,
//   address : "phidim"
// }

// console.log(name.name);

// CRUD Operation : Create Read Update Delete

// user.address = "Phidim", // ADD
// user.amount = 3500, // update
// delete user.age; // Delete
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for (let keys in user){
//   console.log(keys, user[keys]);
// }

// Object Destructing
// const user = {
//   name : "Rohit",
//   age : 20,
//   emailId : "dipkiran",
//   amount : 3400
// }
// const {name,age,amount} = user;
// console.log(name,age,amount);

// //Array Destructing
// const num = [1,2,300,400];
// const [first,second] = num;
// console.log(first,second);

// // Object Destructing
// const user = {
//   name : "Rohit",
//   age : 20,
//   emailId : "dipkiran",
//   amount : 3400
// }
// const {name:userName,age:userAge,amount:userAmount} = user;  // We can create key by dowing this also.
// console.log(userName, userAmount,userAge);

//for loop in object
// const user = {
//   name : "DipKiran",
//   age : 25,
//   email : "dipkiran@gmail.com",
//   amount : 3400
// }

// const temnparr = Object.entries(user);
// for (let keys of temnparr){
//   console.log(keys);
// }

// Array Destructing by loop
// const user = {
//   name : "DipKiran",
//   age : 25,
//   email : "dipkiran@gmail.com",
//   amount : 3400
// }

// for (let[keys,values]of Object.entries(user)){
//   console.log(keys,values);
// }

// // Function inside Object
//  const user = {
//   name : "dipkiran",
//   age : 25,
//   email: "dipkiran@gmail.com",
//   amount : 3500,
//   greeting : function(){
//   console.log(`Strike is coming on 18 October ${this.name}`);
//   return 20;
//   }
//  }

//  const user2 = {
//   name : "Kiran",
//   age : 30,
//   email: "dipkiran@gmail.com",
//   amount : 3500,
//   greeting : function(){
//   console.log(`Strike is coming on 18 October ${this.name}`);
//   return 20;
//   }
//  }

//  user2.greeting = user.greeting();
//  user2.greeting();

// Nested Object means object inside object
// const user = {
//   name : "dipkiran",
//   age : 20,
//   amount : 2222,
//   address: {
//     city :"kathmandu",
//     state:"Phidim"
//   }
// }
// const user2 = {...user};
// user2.name = "Kiran";
// console.log(user2);
// console.log(user.address);

// // deepcopy
// const user = {
//   name : "dipkiran",
//   age : 20,
//   amount : 2222,
//   address: {
//     city :"kathmandu",
//     state:"Phidim"
//   }
// }
// const user2 = structuredClone(user);
// user2.address.city = "Panchthar";
// console.log(user2);

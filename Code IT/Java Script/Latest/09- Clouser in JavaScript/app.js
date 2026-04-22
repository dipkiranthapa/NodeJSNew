// // Scope and Closure , HOF (High Order Function)
// // Global Scope > Accessible to Everyone.
// // functional Level Scope- > Accessible only to that function.
// // Block Level Scope - Accessible only to that block.
// // Scope is a code cannot access from outside to access need to write inside the block of code.


// let a = 10;  // Global Scope
// const b = 20;


// if(true){  // block level scope identify by bracket
//   let d = 30;
//   var v = 50;    // var variable can access from outside. 
  
// }
// console.log(d);
// console.log(v);


// function greet() {  // Function Scope
//   let sum = a + b;
//   let c = 50;
// console.log(c); // can use inside the function. // var cannot access inside in the function
// }
// // console.log(c);  // cannot used outside the function.
// greet();




// function createCounter(){
//   function increment (){
//     console.log("I am increment function");
//   }

//   return increment();
// }
// const count = createCounter();
// count();




// Function Level Scope Increment
// function createCounter(){
//   let count = 0;
//   function increment (){
//          count++;
//     return count;
//  }
 
//   return increment;
  
// }
// // console.log(count);

// const counter = createCounter();
// console.log(counter());



// Inside object inside function 

// let user = {
//   balance : 5000,
//   deposit : function(amount){
//     if(typeof amount === "number" && amount){
//       this.balance += amount;
//       return this.balance;
//     }
//   }
// }
// console.log(user.deposit(200));



// let balance = 500;

// let user = {
//   deposit: function (amount) {
//     balance += amount;
//     return balance;
//   },

//   withdraw: function (amount) {
//     if (typeof amount === "number" && amount > 0 && balance >= amount) {
//       balance -= amount;
//       return balance;
//     }
//   },


//   getBalance: function ("") {
//     return balance;
//   }
// };

// console.log(user.deposit(100));
// console.log(user.withdraw(500));
// console.log(user.withdraw(100));



// let balance = 500;
// let user = {
//   deposit: function (amount) {
//     balance += amount;
//     return balance;
//   },

//   withdraw: function (amount) {
//     if (balance === 0) {
//       return "No balance";
//     }

//     if (typeof amount === "number" && amount > 0 && balance >= amount) {
//       balance -= amount;

//       if (balance === 0) {
//         return "No balance";
//       }

//       return balance;
//     }

//     return "Invalid amount or insufficient balance";
//   },

//   getBalance: function () {
//     return balance === 0 ? "No balance" : balance;
//   }
// };

// console.log(user.withdraw(500)); // "No balance"
// console.log(user.getBalance());  // "No balance"
// console.log(user.deposit(1000));  // "No balance"
// console.log(user.withdraw(500)); // "No balance"


// let balance = 1000;
// let accountHolder = {
//   deposit : function (amount){
//     if (typeof amount !== "number" || amount <= 0){
//       return "Invalid deposit amount";
//     }

//     balance += amount;
//     return ` Deposit ${amount} || Total Balance ${balance}`;
//   },
// }

// Bank 

// let balance = 5000;

// let user = {
//   deposit: function (amount) {
//     if (typeof amount !== "number" || amount <= 0) {
//       return "Invalid deposit amount";
//     }

//     balance += amount;
//     return `Deposited: ${amount} | Total Balance: ${balance}`;
//   },

//   withdraw: function (amount) {
//     if (balance === 0) {
//       return "No balance available";
//     }

//     if (typeof amount !== "number" || amount <= 0) {
//       return "Invalid withdrawal amount";
//     }

//     if (amount > balance) {
//       return "Insufficient balance";
//     }

//     balance -= amount;

//     if (balance === 0) {
//       return `Withdrawn: ${amount} | Total Balance: No balance`;
//     }

//     return `Withdrawn: ${amount} | Total Balance: ${balance}`;
//   },

//   getBalance: function () {
//     return balance === 0
//       ? "Total Balance: No balance"
//       : `Total Balance: ${balance}`;
//   }
// };


// console.log(accountHolder.deposit(300));
// Deposited: 300 | Total Balance: 800

// console.log(user.withdraw(500));
// // Withdrawn: 500 | Total Balance: 300

// console.log(user.withdraw(300));
// // Withdrawn: 300 | Total Balance: No balance

// console.log(user.getBalance());
// // Total Balance: No balance




















// let addNumber = [10,20,30,40,200];
// let sum = 0;
// for (let e of addNumber){
//   sum += e;
// }
// console.log(sum);



// function addNumber (...num){
//   let sum = 0;
//   for (let e of num){
//     sum += e;
//   }
//   console.log(sum);
// }

// addNumber(100,200,300,400,500);




// const details = {
//   name : "rohan",
//   ga : 3.5,
//   isPass :true,
//   address: {
//     city : "dharan",
//     province : "koshi",
//   }
// }

// details.name = "dipkiran",


// console.log(details);

// 





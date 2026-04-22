// // // Arrow Function
// const sayHello = (name)=>{
//   console.log("Good Morning", name);
//   }
//   sayHello("Ram");


//  //Function Expression
// let sayHello = function(){
//   console.log("Hello World");
// }
// sayHello();



//   // // Normal Function
//   function myFunction (a, b){
//   console.log (a + b);  };
//   myFunction(1, 3);

  
// // Arrow Function
//   const myFunction = () => {
//     let a = 1;
//     let b = 20;
//     let c = (a + b);

//     console.log(c);
//   };
// myFunction();


// // Function with parameter
// const myFunction = (e) => {
//   let a = e;
//   let b = 20;
//   console.log(a + b);
// };

// myFunction(5);


// Write a function that takes two number and returns the maximum of the two
// let number = max(2,3);
// console.log(number);

// function max (a,b){
//   if (a > b) return a;
//   else return b;
// }


// let number = max ( 1, 5);
// console.log(number);

// function max (a, b){
//   if ( a >  b) return a;
//   else return b;
// }



// FizzBuzz

// const output = fizzBuzz(15);
// console.log(output);

// function fizzBuzz (input){
//   if (typeof input !== 'number')
//     return 'Not a number';

// if ((input % 3 === 0) && (input % 5 === 0))
//   return 'FizzBuzz';

// if (input % 3 ===0)
//   return 'Fizz';

// if (input % 5 === 0)
//   return 'Buzz';

// return input;
// }

// Normal Function
// function greet (hello){
//   console.log("hello", hello);
// }
// greet("ram");



// Function with Parameters
// function myFunction (a,b){
//   console.log (a + b);
// }
// myFunction(3,10);


// Functon with Return Value
// function myFunction (a, b){
//   return a + b ;
// }

// let result = myFunction (5,10);
// console.log(result);




// Expression Function
// const sayHi = function (a,b){
//   return a + b;
// }
// let result = sayHi(5,10);
// console.log(result);


// Arrow Function

// const Sayhi = ()=>{
//   console.log("hi");
// }
// Sayhi();


// Immediately Invoked Function (IIFE)

// (function () {
//   console.log("Runs Immediately");
// })();

// Write a function that checks if a number is even or odd.
// Write a function that counts how many vowels are in a string.
// Write a function that returns a function (closure example).
// Write an arrow function that calculates factorial.
// Write a function that accepts another function as an argument (callback).


function validateLogin(username, password) {
  if (username === "admin" && password === "1234") {
    return "Login successful";
  } else {
    return "Invalid credentials";
  }
}
validateLogin("admin", "1234");






// 1. Login Function
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("loginResult").innerText = "Login Successful";
  } else {
    document.getElementById("loginResult").innerText = "Invalid Credentials";
  }
}

// 2. Shopping Cart Function
function calculateTotal() {
  const cart = [
    { price: 100, quantity: 2 },
    { price: 50, quantity: 1 }
  ];

  let total = 0;
  for (let item of cart) {
    total += item.price * item.quantity;
  }

  document.getElementById("cartResult").innerText = "Total: $" + total;
}

// 3. Email Validation
function checkEmail() {
  const email = document.getElementById("email").value;
  const result = email.includes("@") && email.includes(".")
    ? "Valid Email"
    : "Invalid Email";

  document.getElementById("emailResult").innerText = result;
}

// 4. Password Strength Checker
function checkStrength() {
  const password = document.getElementById("pass").value;
  let strength = "Weak";

  if (password.length >= 10) strength = "Strong";
  else if (password.length >= 6) strength = "Medium";

  document.getElementById("passResult").innerText = strength;
}

// 5. Bank Withdrawal
let balance = 5000;

function withdrawMoney() {
  const amount = Number(document.getElementById("amount").value);

  if (amount > balance) {
    document.getElementById("bankResult").innerText = "Insufficient Balance";
  } else {
    balance -= amount;
    document.getElementById("bankResult").innerText =
      "Withdrawal Successful. Balance: $" + balance;
  }
}

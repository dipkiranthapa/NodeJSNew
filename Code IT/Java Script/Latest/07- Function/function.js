// // Normal Function
// //Array Destructor
// // Sprite Operator
// // Function with Parameter
// // Rest Operator using Function
// // Function Expression

// // function sayHello (name){
// //   console.log("Good Morning", name)
// // }
// // sayHello("Ram");

// //Array Destructor
// // const arry = [10,20,30,40];
// // const [first,second] = arry;
// // const sum = first + second;
// // console.log(sum);

// // // Sprite Operator inside array to catch all value
// // const arry = [10,20,30,40];
// // const arry2 = [30,70,80];
// // const ans = [...arry,...arry2];
// // console.log(ans);

// // // Function with Parameter
// // function myfunction(a,b){
// //   let sum = a + b;
// //   console.log(sum);
// // }

// // myfunction(1,10);

// // // Rest Operator using Function
// // function add (...numbs){
// //   let sum = 0;
// //   for (let e of numbs){
// //       sum += e;
// //   }
// //   console.log(sum);
// // }

// // add(100,200,300);

// // // Function with rest operator using for loop
// // function addNumber(...num){
// //   let sum = 0;
// //  for (let e of num){
// //   sum += e;
// //  }
// // console.log(sum);
// // }
// // addNumber(1,2,3,5,100);

// // document.getElementById("demo").innerHTML = "Hello Java Script";

// // // Function with Parameter
// // function addNumber (a=0,b=0,c=0,d=0,e=0,f=0){
// //   let sum = (a + b + c + d + e + f);
// //   console.log(sum);
// // }
// // addNumber(1,1);
// // addNumber(1,1,100);
// // addNumber(1,1,200,300);
// // addNumber(1,1,100,200,300);
// // addNumber(1,1,100,500,200,300);

// // // Function in Rest opertaor
// // The rest operator in JavaScript is written as three dots: ...
// // It allows you to collect multiple values into a single array.  ... dot convert into the array
// // function addNumber (...num){
// //   let sum = 0;
// //   for (let e of num){
// //     sum += e;
// //   }
// //   console.log(sum);
// // }
// // addNumber(1,1,1,1,1,1,1,1,1,1);
// // addNumber(1,1,100);
// // addNumber(1,1,200,300);
// // addNumber(1,1,100,200,300);
// // addNumber(1,1);

// // // Rest with Named Parameters
// // The rest parameter must be last.
// // function introduce (name,age, ...hobbies){
// //   console.log(name);
// //   console.log(age);
// //   console.log(hobbies);
// // }

// // introduce("Alice", 25, "Reading", "Music", "Travel");

// // // Rest Operator in Object Destructuring
// // const user = {
// //   name: "John",
// //   age: 30,
// //   city: "Delhi",
// //   role: "Admin"
// // };

// // const { name, age, ...otherDetails } = user;

// // console.log(otherDetails);

// // // Function Expression
// // const addNumber = function (num1, num2){
// //   return num1 + num2;
// // }
// // console.log(addNumber(1,2));

// // // Rest operator
// // function addNumber (...num){
// //   let sum = 0;
// //   for (let e of num){
// //     sum += e;
// //   }

// //   console.log(sum);
// // }

// // addNumber(1,1);
// // addNumber(1,100);

// // function add(...num){
// //   let sum = 0;
// //   for (let e of num){
// //     sum += e;
// //   }
// //   console.log(sum);
// // }

// // add();

// // function add (...num){
// //   let sum = 0;
// //   for (let e of num){
// //     sum += e;
// //   }
// //   console.log(sum);
// // }
// // add(10,200,300);

// // Arrow Function
// // const myfunction = (name)=>{
// //   console.log("hello",name);
// // }
// // myfunction("DipKiran");

// // Arrow Function
// // const addNumber = (num1,num2) => num1 + num2;
// // console.log(addNumber(3,4));

// //If we have single parameter, no need of this ()
// // const addNumber = num => num*num;
// // console.log(addNumber(6));

// // Object inside arrow function

// // const greeting = ()=>{
// //   let user = {
// //     name : "rohit",
// //     age : 25,
// //   }
// //    return user;
// // }

// // console.log(greeting());

// function amazoneOrder() {
//   console.log("we are amazone packing your oreder");
// }

// function zomatoOrderPlaced() {
//   console.log("Zomato we have started preparing your food");
// }

// function payment(amount, callback) {
//   console.log(`${amount} payment has initilized`);
//   console.log("Payment is Received");
//   callback();
//   //TAX Goverment
//   // Rider Payment
//   // Company Payment
// }
// payment(500, zomatoOrderPlaced);
// payment(500, amazoneOrder);

// function btn1() {
//   const now = new Date();
//   const week = now.getDay();

//   let dayName = "";

//   switch (week) {
//     case 0:
//       dayName = "Sun";
//       break;
//     case 1:
//       dayName = "Mon";
//       break;
//     case 2:
//       dayName = "Tue";
//       break;
//     case 3:
//       dayName = "Wed";
//       break;
//     case 4:
//       dayName = "Thr";
//       break;
//   }

//   document.getElementById("time").innerHTML = now.toDateString(
//     +" _ " + dayName,
//   );
// }

// function btn1() {
//   const now = new Date();
//   document.getElementById("time").innerHTML = now.toLocaleString();
// }

// function myFunction(name) {
//   let time = new Date();
//   let hour = time.getHours(); // number, not string

//   if (hour < 12) {
//     console.log(`Good Morning ${name}`);
//   } else if (hour < 18) {
//     console.log(`Good Afternoon ${name}`);
//   } else {
//     console.log(`Good Evening ${name}`);
//   }
// }

// myFunction("DipKiran");

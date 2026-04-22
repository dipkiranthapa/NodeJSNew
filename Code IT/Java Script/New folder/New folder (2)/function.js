// // // Function
// // // Function is a block of code to assign for the specific task.
// // // Instead of writing the same code again and again. 

// function greet(){
//   console.log("hello Java Script");
// }
// greet();


// // myFunction();

// // Title : Function with Parameter
// function myFunction(name){
//   console.log("Hello", name);

// }
// myFunction("Hari");


// Function with greating with time


function greeting(){
  let hours = new Date().getTime();
  let greet;

  if(hours < 12){
    greet = "good morning";
  }

  else if (hours < 17){
    greet = "good afternoon";
  }

  else{
    greet = "good Night";
  }

  return greet;
}

console.log(greeting());


// // function greeting (){
// //   let hours = new Date().getTime();
// //   let greeting;
  
//   if(hours < 12){
//     greeting = "Good Moring";
//   }

//   else if (hours <18 ){
//     greeting = "good Evening"
    
//   }
//   else {
//     greeting = "good Evening";
//   }

//   return greeting;
// }

// console.log(greeting());









// function greet(name){
//   console.log("Good Morning")
// }

// greet("Ram");


//  Title: Function that return value
// function calc(a,b,c,d){
//   return a * b + c + d;
// }
// let result = calc(3,5,500,1500);
// console.log(result);






// // Arrow Function
// // - Arrow Functions are a shorter way to write function
// const sayhi = () => {
//   console.log("hi")
// }
// sayhi(); 



// const sayHi = ()=> {
//   console.log("hi")
// }

// sayHi();



// function greeting(){
//   let hours = 10;

//   if(hours < 12){
//     console.log("Good Morning");
//   }

//   else if (hours  < 18){
//     console.log("Good After Noon");
//   }

//   else {
//     console.log("Good Night");
//   }
// }

// greeting();


// let sayHello = function(){
//   console.log("hello world");
// }


// let sayHello = (a,b) =>{
//   let c = a + b;
//   console.log(c);
// }




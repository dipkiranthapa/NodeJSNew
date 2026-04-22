// Hosting   actully how the javascript code is running
// Hosting means without declear the value cannot use . 


// // Example 01
// console.log(name);
// let name = 10;

// // Example 02
// console.log(name);
// var name = 10;


// In the Java Script mostly we used Function Expression and Arrow Function
//Function Expression  
// sayHello();  // Need to declear the function
// let sayHello =  function(){
//   console.log("hello world");
// }


// Arrow Function
// myFunction();  // Need to Declear the first 
// let myFunction = ()=>{
// console.log("hello World 1");
// }


// Destructure

// let person = {
//   id : 1,
//   name : "Dipkiran",
//   age : 25,
//   occupation : "ACTor",
//   address: "Phidim",
// }

// let {name,age} = person;
// console.log(name);
// console.log(age);



// Rest Operator
// Rest operator means, for example if you have one bag full of goods you want to shift some items from that bag to another bag. 
let person = {
  id: 1,
  name : "dipkiran",
  age : 25,
  address : "phidim",
  occupation : "Farming",
}

let {id,age,...num} = person;
console.log(num);




// var a = 10;
// var b = 20;
// function addNumber(num1, num2){
//   var sum = num1 + num2;
//   return sum;
// }

// var sumResult1 = addNumber(a,b);
// var sumResult2 = addNumber(4,5);
// console.log(sumResult1,sumResult2);






// Which are out its called global scope
var a = 10;
var b = 20;

function addNumber(num, num2){      // which are inside the function its called 
  var sum = num + num2;
  return sum;
}

var sumResult1 = addNumber(a,b);
var sumResult2 = addNumber(4,5);
console.log(sumResult1,sumResult2);


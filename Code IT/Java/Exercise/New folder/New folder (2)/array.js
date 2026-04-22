// An array is a collection of values stored in a single variable. 
// Title : Creating an array
let colors = ["red", "blue", "Green"];

// Arrays are Written square brackets [], and values are seperated by commas.


let fruits = ["apple", "banana", "mango"];
fruits[0] = "Orange";
console.log(fruits[0]);

// Title : Using loop with array
let userName = ["ram", "Shyam", "hari"];

for (let i = 0; i <=userName.length; i++){
  console.log(userName[i]);
}

// Title : Useful Array Methods
let name = ["ram", "shyam", "hari"];

//Add to Last
name.push("dipKiran");

//remove from end
names.pop();
//add to start
name.unshift("Hello");

//remove from start
name.shift()
console.log(name);

// Important Notes
// Arrays can hold any data types : string, numbers, booleans.



let fruits = ["Orange", "Mango", "Banana"];
  for (let i = 0; i <= fruits.length; i++){
  console.log(i);
}
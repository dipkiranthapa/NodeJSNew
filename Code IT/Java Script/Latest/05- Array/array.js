// Sum in Array
//concat add 02 values
//spread operator splite the array
// Array conveter into sting
//Join Operator
// Sort from A to Z

// Array Adding
// let add = [10,20,1000,2000,3000];
// let sum = 0;
// for (let e of add){
//   sum += e;
// }
// console.log(sum);

// let marks = [10,20,30,40,50,60];
// let ram = marks;
// // let shyam = marks;
// marks[0] = 40;
// console.log(ram[0]);
// console.log("shyam", marks[1]);

// // Sum in Array
// let marks = [10,30,50,90,11,200,200];
// let sum = 0;
// for (let e of marks){
//   sum += e;
// }
// console.log(sum);

//concat add 02 values
// let marks = [10,30,50,90,11,200,200];
// const arr2 = ["rohit", 11, true];

// const arr3 = marks.concat(arr2);
// console.log(arr3);

//spread operator splite the array
// let arr = [10,30,50,90,11,200,200];
// const arr2 = ["rohit", 11, true];
// const arr3 = [...arr, ...arr2];
// console.log(arr3);

// Array conveter into sting
// const name = ["Alice", "Bob", "Charlie"];
// console.log(typeof name.toString());

//Join Operator
// const name = ["Alice", "Bob", "Charlie"];
// console.log(name.join(1,2));

// Sort from A to Z
// const name = ["Alice", "Bob", "Charlie"];
// name.sort();
// console.log(name);

// // In array we can store any kinds of data like (string, number, bolen,null);
// const number = ["ram", 1,2,3,4];
// number[0] = "hari";  //change element
// number.push("Hello");  //add element
// number.push(1); //add Element
// number.pop(); // pop operator element delete from end
// number.unshift("ram"); // Add Element from start
// number.shift(); // Delete Element

// console.log(number);

// // Add using For loop
// let numbers = [1,2,3,4,5];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++){
//   sum += numbers[i];
// }
// console.log(sum);

// //SUM using for ...of
// let numbers = [1,2,3,4,5];
// let sum = 0;
// for (let num of numbers){
//   sum += num;
// }

// console.log(sum);

// // Sum using a Funciong
// function sumarray(arr){
//   let sum = 0;
//   for(let num of arr){
//     sum += num;
//   }
//   return sum;
// }
// console.log(sumarray(2,4,6));

// // sum using reset operator
// function sum(...number){
//   return numbers.reduce((a,b)=> a + b,0);
// }
// sum(1,2,3,4,5);

// // Shopping Cart
// let price = [1000, 150];
// let itemPrice = price[0];
// let shippingPrice = price[1];
// let discount = itemPrice * 0.1;
// let total = itemPrice + shippingPrice - discount;
// console.log("total",total);

// let name = ["dipkiran"];
// console.log(typeof name.toString());

// sort array using arrow function
// const name = ["dipkiran","Thapa","anish"];
// name.sort((a,b)=> a.localeCompare(b));
// console.log(name);

// const naMe = ["dipkiran", "thapa", "anish"];
// naMe.sort((a, b) => a.localeCompare(b));
// console.log(naMe);

// Rest operator
// const person = {
//   name: "ali",
//   age: 25,
//   city: "dubai",
// };

// const { name, ...details } = person;
// console.log(name);
// console.log(details);

// const naMe = ["dip", "Anish"];
// naMe.sort((a, b) => a.localCompare(b));
// console.log(naMe);

let list = ["hari", "shyam", "Kiran"];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

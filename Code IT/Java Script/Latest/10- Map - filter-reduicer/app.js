console.log("============================For Each===================================",);
// // forEach, Filter, Reduce, Map, set
// ForEach    //Filter used to show all data of array
//set will remove the dublicate value

//For each can only store data in one variable cannot store in another variable for example
// box is variable
//box 2 is another variable
//Example
// let box = [10,20,30,40];
// let box2 = box.forEach((e)=>{
//    return e;
// });
// console.log(box2);






// const arr = [10,20,5,40];
// arr.forEach((number,index,arr)=>{
// arr[2] = 30; // Update
//   console.log(number,index,arr);
// })


// const addNumber = [10,20,30,40,100,500,50000];
// let sum = 0;
// addNumber.forEach((e)=>{
//   sum += e;
//   console.log(sum);
// })



// const addNumber = [10,20,30,40,50];
// addNumber.forEach((e)=>{
//    console.log(e);
// })

// const addNumber = [10,20,30,40,50];
//  addNumber.forEach((num)=>{
//     console.log(num);
//  });

// Add by using for Each
// let addNum = [10,20,30,1000];
// let sum = 0;
// addNum.forEach((num)=>{
//   sum += num;
//   console.log(sum);
// });

// const arr = [10,20,5,40];
// let sum = 0;
// arr.forEach((number)=>{
//   sum += number;
// arr[2] = 30; // Update
//   console.log(sum);
// })


console.log("=================================filter=================================")


// Filter
// Filter used to filter the data

// let box = [10,20,30,45,55,67];
// let box2 = box.filter((e)=>{
//    if (e % 2 == 0){
//       return e;
//    }
// });
// console.log(box2);


// const arr = [10,20,5,40];
// const newArry = arr.filter((num)=> num > 25 );
//   console.log(newArry);

// let addNum = [10,20,30,1000];
// const newArr = addNum.filter((num)=> num > 25);
//  console.log(newArr);

// const fruits = ["orange", "apple", "banana"];
// const newFruits = fruits.filter(fru => fru.toUpperCase("a"));
// console.log(newFruits);

// Filter only what you want
// const fruits = ["orange", "apple", "mango"];
// const filterFruits = fruits.filter(fruits => fruits.startsWith("a"));
// console.log(filterFruits);

//Sort from a to z
// const fruits = ["orange", "apple", "mango"];
// const sortFruits = fruits.sort();
// console.log(sortFruits);



// const arr = [10,20,30,40,50];
// arr.filtering = function(compare){
//   // this = [10,20,30,40,50]; this means point this
//   const ans = [];
//   for (let num of this){
//     if(compare(num)){
//       ans.push(num);
//    }
//   }
//   return ans;
//  }
//  const newArr = arr.filtering((num)=>num > 15);
//  console.log(newArr);


// const arr = [10,20,30,40,50];
// arr.filtering = function (compare){
//    let ans = [];
//    for (let num of this){
//       if (compare(num)){
//          ans.push(num);
//       }
//    }
//    return ans;
// }

// const newarr = arr.filtering((num)=> num > 25);
// console.log(newarr);




// function addNumber(){  //nested function (
//    function myfunction (){
//     let a = 10;
//     let b = 20;
//     let c = a + b;
//     console.log(c);
//   }
// myfunction();
// }
// addNumber();

// const words = ["apple", "cherry", "banana"];
// const result = words.filter(word => word.toUpperCase("a"));
// console.log(result);

// // Second Method
// const arr = [10,20,5,40,45];
// const newArry = arr.filter((num)=>{
//   return num > 25;
// });
// console.log(newArry);

// const nums = [1, 2, 3, 4, 5, 6];

// const result = nums.filter(num => num > 3 && num % 2 === 0);

// console.log(result);

// const result = nums.filter(num => {
//   if (num <= 3) return false;
//   if (num % 2 !== 0) return false;
//   return true;
// });

// let i = 0;
// for (let i = 0; i < 10; i++){
//   if (i % 2 === 0){
//     console.log(i);
//   }
// }

// let products = [
//   { name : "Shoes", price : 80},
//   {name : "T-Shirt", price : 25},

// ];

// displayProducts(products);
// function filterCheapProduct(){
//   const filteredProduct = products.filter(products => products.price < 50);
//   displayProducts(filteredProduct);
// }

// let product = [
//   {name : "shoes", price : 30},
//   {name : "T shirt", price : 40},
// ];

// const arr = [10,20,30,40];
// arr.filtering = function(compare){
//   const ans = [];
//   for(let num of this){
//     if(compare(num)){
//       ans.push(num);
//     }

//   }
//   return ans;
// }
// const newArr = arr.filtering((num)=>num >25 );
// console.log(newArr);

// const fil = [10,20,30,40];
// fil.filtering = function(filterr){
//   const ans = [];
//   for (let num of this){
//     if (filterr(num)){
//       ans.push(num);
//     }
//   }
//   return ans;
// }

// const newArr = fil.filtering((num)=> num > 25);
// console.log(newArr);

//Map
// Map used to show the partcular data for example if you want name and price only map will do that.
// map can multiply the value
// What is map()?
// map() creates a new array by applying a function to each item in an existing array.
// 👉 It does not change the original array.
// const m1 = new Map([
//   ["Rohit,40"],
//   [1, "Rohit"],
//   [true, 11],
//   [[10,30,11], "Mohit"]
// ]);
// m1.set({name:"Manish", age: 20,}, false); // Add the Value
// console.log(m1.has("Rohit"));
// console.log(m1);



// let box = [10,20,30,40,50];
// let box2 = box.map((e)=>{
// return e;
// });
// console.log(box2);
// box.map((e)=>({}))

// const arr = [10,20,30,4,90,87];
// const newarr = arr.map((num)=> num*4);
// console.log(newarr);





// const product = [
//   {id : 1, name: "Laptop", category: "Electronics", price: 2500, inStock: true},
//   {id : 2, name: "Headphone", category: "Electronics", price: 100, inStock: true},
//   {id : 3, name: "Monitor", category: "Electronics", price: 2600, inStock: true},

//   //kapada

//   {id : 4, name: "Cap", category: "Clothes", price: 25, inStock: true},
//   {id : 5, name: "Vest", category: "Clothes", price: 50, inStock: true},
//   {id : 6, name: "Jacket", category: "Clothes", price: 250, inStock: true},

// ];

// const newProduct = product
// // .filter((p)=> p.category ==="Clothes") // by Category
// .filter((p)=>p.price > 20) // Filter the price
// .sort((a,b)=> b.price -a.price)  // sort the data
// .map((p)=> ({name:p.name, price:p.price, category:p.category})); // map the data
// console.log(newProduct);

// const newProduct = product.filter((product)=> product.price > 50).sort((a,b)=> b.price -a.price)
// .map((product)=> ({name:product.name, price:product.price}));
// console.log(newProduct);
//sort will sort the price show higher to lower price
// map will show the data what you want
// filter will show the price data.

// const ans = product.map((product)=> ({name:product.name, price:product.price}));
// console.log(ans);  // this will print only the name of product and price of product.








// const product = [
//   {id : 1, name: "Laptop", category: "Electronics", price: 2500, inStock: true},
//   {id : 2, name: "Headphone", category: "Electronics", price: 100, inStock: true},
//   {id : 3, name: "Monitor", category: "Electronics", price: 2600, inStock: true},

//   //kapada

//   {id : 4, name: "Cap", category: "Clothes", price: 25, inStock: true},
//   {id : 5, name: "Vest", category: "Clothes", price: 50, inStock: true},
//   {id : 6, name: "Jacket", category: "Clothes", price: 250, inStock: true},

// ];
// const newProd = product.filter((p)=>p.category === "Clothes")
// .filter((p)=> p.price > 25);

// console.log(newProd);



// Reduce
// accumulator = sum,
// reduce used to sum

// const product = [
//   {id : 1, name: "Laptop", category: "Electronics", price: 2500, inStock: true},
//   {id : 2, name: "Headphone", category: "Electronics", price: 100, inStock: true},
//   {id : 3, name: "Monitor", category: "Electronics", price: 2600, inStock: false},

//   //kapada

//   {id : 4, name: "Cap", category: "Clothes", price: 25, color: "red", inStock: true},
//   {id : 5, name: "Vest", category: "Clothes", price: 50, color : "Yellow", inStock: true},
//   {id : 6, name: "Jacket", category: "Clothes", price: 250, color: "Green", inStock: false}
// ];

// const newProduct = product.filter((e)=> e.category === "Clothes")
// .filter((e)=>e.price > 25)
// .map((p)=>({name:p.name,price:p.price}))

// const totalPrice = product.reduce((accumulator,currentValue)=>{
//   return accumulator + currentValue.price;

// },0);
// console.log(newProduct);
// console.log(totalPrice);



// function myFunction(a,b){
//    let sum = a + b;
//   console.log(sum);
// }

// myFunction(10,50);






// // Example 1
// const totalPrice = product.reduce((accumulator,currentValue)=>{
//  return accumulator + currentValue.price;
// },0);

// console.log(totalPrice);

// Example 2
// const totalPrice = product.reduce((total,totalprice)=>{
//   return total + totalprice.price;
// },0);
// console.log(totalPrice);

// Examaple 3
// const totalPrice = product.reduce((accumulator,currentValue)=>{
//   return accumulator + currentValue.price;

// },0);
// console.log(totalPrice);

// const newProduct = product.map((p)=> ({name:p.name, price:p.price, category:p.category})); // map the data
// console.log(newProduct);
// const totalPrice = product.reduce((total, priceSum)=>{
//  return total + priceSum.price;
// },0);
// console.log(totalPrice);

// Print price which are in the stock
// const totalPrice = product.reduce((total, priceSum)=>{
//   if(priceSum.inStock)
//   return total + priceSum.price;
//   else
//   return total;
// },0);
// console.log(totalPrice);

// //SET
// // set  data structure
// // no dublicate value
// const arr = [10,20,30,10,25,15,10,20];
// console.log(arr);
// // Dublicate value will be removed by set
// const s1 = new Set(arr);
// s1.add(11) // push value
// s1.delete(10) // Delete value
// s1.clear(); // Clear all value
// console.log(s1.has(20)); // Find Value into the array if it is there shows true
// console.log(s1);

// // Example 2
// const email = ["ro@gm", "ra@gm", "mo@gm", "ro@gm"];
// console.log(email);
// const s1 = new Set(email); // Remove dublicate email
// console.log(s1);



// // Print Value
// const email = ["ro@gm", "ra@gm", "mo@gm", "ro@gm"];
// const s1 = new Set(email);
// for (let num of s1){
//   console.log(num);
// }


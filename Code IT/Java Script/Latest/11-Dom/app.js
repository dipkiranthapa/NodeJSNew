// const temp = window.document.getElementById("first");
// const temp= window.document.getElementById("first");
// console.log(temp);
// window.alert("Hello World");

// const temp = window.document.getElementById("first");
// temp.style.background = "red";
// temp.style.color = "yellow";
// temp.style.marginTop = "0px";
// temp.style.padding = "1em";
// temp.style.textAlign = "center";

// document.getElementById("btn").addEventListener("click", function(){
//   alert("Hello Java");
// })

console.log(
  "-------------------Before and After Start Here------------------------",
);
// // Before and After
// function btn() {
//   const btn3 = document.getElementById("btn3");
//   const ul = document.getElementById("liadd");

//   btn3.addEventListener("click", function () {
//     const li = (document.getElementById("liadd").innerHTML =
//       "Hello Java Script");
//     ul.appendChild(li);
//   });
// }
// btn();

console.log("-----------------Before and After End here----------------------");

// Real World
// const arr = ["Milk", "Halwa", "Potato", "Orange"]; // Array Data
// const arr1 = document.getElementById("liadd");
// const arr2 = document.createDocumentFragment();

// for (let food of arr) {
//   const list = document.createElement("li");
//   list.textContent = food;
//   arr2.append(list);
// }
// arr1.append(arr2);

// btn is Global Scope / le show is block of code function
//  function btn() {
//     let show = new Date();
//     document.getElementById("show").innerHTML = show.toLocaleString();
//   }

// Add html element from java Script
// const newElement = document.createElement("h2");
// newElement.textContent = "Hello Dipkiran Thapa";
// newElement.id = "second";
// const element = document.getElementById("first");
// element.after(newElement);
// newElement.style.background = "red";
// newElement.style.padding = "2rem";
// const temp = document.getElementById("first");
// temp.textContent = "First Java Script";
// temp.style.background = "red";

// function btn (){
// const show = document.getElementById("show").innerHTML = "Kiran Thapa";
// show.before = (btn);
// }

// Insert Li list inside UL (universal list) & Before After
// const listElement = document.createElement("li");
// listElement.textContent = "Milk"
// const listElement2 = document.createElement("li");
// listElement2.textContent = "Water"

// const listElement1 = document.getElementById("liadd");
// listElement1.append(listElement);
// listElement1.prepend(listElement2); // prepend will show the list at first
// listElement.before(listElement2); // Before After

// Real World Example to Add Li list  Wrong way to do this
// const arr = ["Milk", "Halwa", "Potato", "Orange"];
// const arrElement = document.getElementById("liadd");
// for (let food of arr) {
//   const list = document.createElement("li");
//   list.textContent = food;
//   arrElement.append(list);
// }

// const s1 = document.getElementById("first"); // Remove Element
// s1.remove();

// // document.getElementById("first").innerHTML = "DipKiran Thapa Phidim Panchthar";
// // document.getElementById("second").innerHTML = "From Nepal";
// // document.getElementById("btn").innerHTML = "Submit";
// // document.getElementById("btn").addEventListener("click", function(){
// //   window.alert("hello World"); // show alert message
// //   window.open(); // open new tab
// // });

// // document.getElementById("first").innerHTML = "DipKiran Thapa";

// // create element or h2 tag from java script

// const newElement = document.createElement("h2");
// newElement.textContent = "Hello DipKiran";
// newElement.id = "second";  // id name
// // newElement2.classList.add("dewali"); // create multiple class
// // newElement2.classList.add("holi"); // create multiple class
// // newElement2.classList.remove("holi"); // remove class
// // newElement2.setAttribute("hello", "ji");
// //Select element  // where you want to create the element for example after h1 tag
// const element = document.getElementById("first");
// element.after(newElement);

// newElement.style.background = "red";
// newElement.style.color = "blue";
// newElement.style.fontSize = "2rem";
// newElement.style.paddingTop = "5px";

// // element.before(newElement);  // Before

// // console.log(newElement.getAttribute("class"));  to check class and id

// before after
// const list = document.createElement("li");
// list.textContent = "Milk";

// const list2 = document.createElement("li");
// list2.textContent = "Cake";

// const list3 = document.createElement("li");
// list3.textContent = "Halwa";

// const oderElement = document.getElementById("list");
// oderElement.append(list);
// oderElement.append(list2);
// oderElement.prepend(list3); // prepend used to send at first

// const text = document.getElementById("first");
// text.textContent = "Hello Java Script";
// text.style.background = "red";
// text.style.padding = "2rem";
// text.style.fontSize = "5rem";

// Exercise
// const btntext = document
//   .getElementById("btn")
//   .addEventListener("click", function () {
//     document.getElementById("first").innerHTML = "Hello Java Script";
//   });

// const text = document.createElement("h2");
// const btn1 = document.getElementById("btn");
// text.textContent = "Java Script";
// document.body.appendChild(text);
// btn1.before(text);

// // Click Function Dom
// const text = document.createElement("h2");
// const btntext = document.getElementById("btn");
// btntext.addEventListener("click", function () {
//   btntext.style.color = "red";
//   btntext.style.background = "yellow";
//   text.textContent = "First Java Script";
//   document.body.appendChild(text);
// });

// function btn() {
//   let name = "DipKiran";
//   let time = new Date();
//   let hour = time.getHours(); // number, not string

//   let message = "";

//   if (hour < 12) {
//     message = `Good Morning ${name}`;
//   } else if (hour < 18) {
//     message = `Good Afternoon ${name}`;
//   } else {
//     message = `Good Evening ${name}`;
//   }

//   document.getElementById("first").textContent = message;
//   btn("DipKiran");
// }
// function btn() {
//   let name = "DipKiran";
//   let time = new Date();
// }

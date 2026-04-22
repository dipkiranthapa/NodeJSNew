// function handle() {
//   const element = document.getElementById("first");
//   element.textContent = "Dipkiran";
//   const element1 = element.document.getElementById("first");
//   element1.textContent = "Kiran";
// }

// const element = document.getElementById("first");
// element.onclick = function handle() {
//   element.textContent = "Thapa";
// };

// Click Change Text  // Case Sensetive
// function handle() {
//   const element = document.getElementById("first");
//   if (element.textContent === "Hello Java Script") {
//     element.textContent = "DipKiran";
//   } else if (element.textContent === "Dipkiran") {
//     element.textContent = "Thapa";
//   } else {
//     element.textContent = "Hello Java Script";
//   }
// }

// Example 3 Create Element button from java  Script
// const text = document.createElement("button");
// text.textContent = "Click Me";
// text.id = "btn";
// document.body.appendChild(text);

// text.addEventListener("click", function () {
//   const text1 = document.createElement("h2");
//   text1.textContent = "Hello Java Script";
//   document.body.appendChild(text1);
// });

// Example 4
// const element = document.getElementById("first");
// element.addEventListener("click", function () {
//   if (element.textContent === "Hello Java Script") {
//     element.textContent = "Dipkiran";
//   } else if (element.textContent === "Dipkiran") {
//     element.textContent = " Thapa";
//   } else {
//     element.textContent = "Hello Java Script";
//   }
// });

// Change Background Color
// const text = document.createElement("button");
// text.textContent = "Click Me";
// document.body.appendChild(text);

// text.addEventListener("click", function () {

//   document.getElementById("background");
//   document.body.style.background = "red";
//   document.body.style.background = "yellow";
// });

// Dark Mode
// const button = document.createElement("button");
// button.textContent = "Dark Mode";

// document.body.appendChild(button);

// button.addEventListener("click", function () {
//   if (document.body.style.backgroundColor === "black") {
//     document.body.style.backgroundColor = "white";
//   } else {
//     document.body.style.backgroundColor = "black";
//   }
// });

// // Trips
// const price = {
//   1: 10,
//   2: 20,
//   3: 50,
// };

// // Create ton Drop Down
// const tonSelect = document.createElement("select");

// [1, 2, 3].forEach((ton) => {
//   const option = document.createElement("option");
//   option.value = ton;
//   option.textContent = ton + " Ton ";
//   tonSelect.appendChild(option);
// });
// document.body.appendChild(tonSelect);

// // Create Trip Drop Down

// const tripSelect = document.createElement("select");
// [1, 2, 3].forEach((trip) => {
//   const option = document.createElement("option");
//   option.value = trip;
//   option.textContent = trip + "Trip";
//   tripSelect.appendChild(option);
// });

// document.body.appendChild(tripSelect);

// // Result Text
// const result = document.createElement("h2");
// document.body.appendChild(result);

// //Function to Calculate
// function calculate() {
//   const selectedTon = tonSelect.value;
//   const SelectedTrip = tripSelect.value;

//   const total = price[selectedTon] * SelectedTrip;
//   result.textContent = "Total Price:" + total + " AED";
// }

// //Add Event Listener
// tonSelect.addEventListener("change", calculate);
// tripSelect.addEventListener("change", calculate);

// const parents = document.getElementById("parents");
// for (let child of parents.children) {
//   child.addEventListener("click", () => {
//     child.textContent = "I Am Clicked";
//   });
// }

// const grandparent = document.getElementById("parents");
// grandparent.addEventListener("click", (e) => {
//   console.log("Grand Parent is clicked");
// });

// const parent = document.getElementById("parents");
// parent.addEventListener("click", (c) => {
//   console.log("Parent is clicked");
// });

// const parent = document.getElementById("parent");
// console.log(parent.children);
// for (let child of parent.children) {
//   child.addEventListener("click", () => {
//     child.textContent = "I am Clicked";
//   });
// }

// const parent = document.getElementById("parent");
// parent.addEventListener("click", () => {
//   document.getElementById("child1").textContent = "i am Click";
//   document.getElementById("child2").textContent = "i am Clicked";
//   document.getElementById("child3").textContent = "i am Clickeded";

//   parent.addEventListener("click", () => {
//     parent.children[0].textContent = "i am Click";
//     parent.children[1].textContent = "i am Clicked";
//     parent.children[2].textContent = "i am Clickeded";
//   });
// ---------------------------------------------
// for (let child of parent.children) {
//   if (child.id === "child1") {
//     child.textContent == " Second things";
//   } else if (child.id === "child2") {
//     child.textContent = "I am click";
//   } else if (child.id === "child3") {
//     child.textContent = "Kiran";
//   }
// }
// });

// parent.addEventListener("click", (event) => {
//   if (event.target.classlist.contains("child")) {
//     if (event.target.id === "child1") {
//       event.target.textContent = "Second Things";
//     }
//   }
// });

// let index = 0;
// parent.addEventListener("click", () => {
//   if (index === 0) {
//     parent.children[index].textContent = "Dip";
//   } else if (index === 1) {
//     parent.children[index].textContent = "Kiran";
//   } else if (index === 2) {
//     parent.children[index].textContent = "Thapa";
//   } else {
//     parent.children[index].textContent = "I am Clicked";
//   }
//   index++;
//   if (index >= parent.children.lenght) {
//     index = 0;
//   }
// });

// const parent1 = document.getElementById("parent");
// parent1.addEventListener("click", (c) => {
//   c.stopPropagation();
//   parent1.textContent = "Java";
// });

// const parent2 = document.getElementById("child");
// parent2.addEventListener("click", (d) => {
//   d.stopPropagation();
//   parent2.textContent = "Hello";
// });

const parent = document.getElementById("parent");
function handelClick(e) {
  e.target.textContent = "I am Click";
}
parent.addEventListener("click", handelClick);
parent.removeEventListener("Click", handelClick);

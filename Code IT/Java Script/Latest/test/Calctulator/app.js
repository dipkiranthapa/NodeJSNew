// const parent = document.getElementById("parent");
// parent.addEventListener("dblclick", (e) => {
//   const color = e.target;
//   const body = document.querySelector("body");
//   body.style.background = color.id;
// });

// function calculateTax() {
//   let income = parseFloat(document.getElementById("income").value);
//   let tax = 0;

//   if (income <= 10000) {
//     tax = 0;
//   } else if (income <= 30000) {
//     tax = (income - 10000) * 0.1;
//   } else if (income <= 70000) {
//     tax = 20000 * 0.1 + (income - 30000) * 0.2;
//   } else {
//     tax = 20000 * 0.1 + 40000 * 0.2 + (income - 70000) * 0.3;
//   }

//   document.getElementById("result").innerHTML =
//     "Total Tax : $" + tax.toFixed(2);
// }

// 4 to 5 lakh 0%
// 4 to 8 lakh 5%
// 8 to 12 lakh 10%
// 12 to 16 lakh 15%
// 16 to 20 lakh 20%

// function taxCalculator() {
//   let income = parseFloat(document.getElementById("income"));
//   let tax = 0;

//   if (income <= 10000) {
//     tax = 0;
//   } else if (income <= 30000) {
//     tax = (income - 10000) * 0.1;
//   } else if (income <= 50000) {
//     tax = 20000 * 0.1(income - 30000) * 0.5;
//   } else {
//     tax = 20000 * 0.1 + 40000 * 0.2 + (income - 70000) * 0.3;
//   }

//   document.getElementById("result").innerHTML =
//     "Total Tax : $ " + tax.toFixed(2);
// }

// function dateTime() {
//   const btn = document.getElementById("btn");

//   btn.addEventListener("click", () => {
//     let date = new Date().toLocaleString();
//     document.getElementById("result").textContent = date;
//   });
// }
// dateTime();

// const btn = document.getElementById("btn");
// let interval;

// btn.addEventListener("click", () => {
//   interval = setInterval(() => {
//     document.getElementById("result").textContent =
//       new Date().toLocaleTimeString();
//   }, 1000);
// });

// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   let time = new Date();
//   document.getElementById("result").textContent = time;
// });

// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   alert("hello World");
// });

// function getvalues() {
//   const number1 = parseFloat(document.getElementById("num1").value);
//   const number2 = parseFloat(document.getElementById("num2").value);

//   const obj = {
//     num1: number1,
//     num2: number2,
//   };
//   return obj;
// }
// function add() {
//   const value = getvalues();
//   console.log(value.num1 + value.num2);

//   document.getElementById("result").textContent =
//     "Result " + (value.num1 + value.num2);
// }

// function multiply() {
//   const value = getvalues();
//   console.log(value.num1 * value.num2);
//   document.getElementById("result").textContent =
//     "Result" + value.num1 * value.num2;
// }

function getvalue() {
  const number1 = parseFloat(document.getElementById("num1").value);
  const number2 = parseFloat(document.getElementById("num2").value);

  const obj = {
    num1: number1,
    num2: number2,
  };
  return obj;
}
function add() {
  const value = getvalue();
  document.getElementById("result ").textContent =
    "Result" + (value.num1 + value.num2);
}

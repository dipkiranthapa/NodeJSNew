// const five = document.getElementById("five");
// const ten = document.getElementById("ten");
// const result = document.getElementById("result");

// // If they are input fields
// function multiplyValues() {
//   const value1 = Number(five.value);
//   const value2 = Number(ten.value);

//   result.textContent = value1 * value2;
// }

// const five = document.getElementById("five");
// const ten = document.getElementById("ten");
// const btn = document.getElementById("btn");
// const text = document.getElementById("text");
// btn.addEventListener("click", () => {
//   const value1 = Number(five.value);
//   const value2 = Number(ten.value);
//   text.textContent = value1 * value2;
// });

// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const income = document.querySelector("#income");
//   const amount = parseInt(income.value);

//   const result = document.querySelector("h2");
//   let totalTax = 0;
//   if (amount <= 1200000) totalTax = 0;
//   else if (amount <= 1600000) {
//     totalTax = (amount - 1200000) * 0.15;
//   } else if (amount <= 2000000) {
//     totalTax = (amount - 1600000) * 0.2 + 60000;
//   } else if (amount <= 2400000) {
//     totalTax = (amount - 20000000) * 0.25 + 60000 + 80000;
//   } else {
//     totalTax(amount - 24000000) * 0.3 + 6000 + 80000;
//   }

//   result.textContent = `Total Tax : ${totalTax}`;
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

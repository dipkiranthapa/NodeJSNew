// function getValue() {
//   const number1 = parseFloat(document.getElementById("num1").value);
//   const number2 = parseFloat(document.getElementById("num2").value);

//   if (isNaN(number1) || isNaN(number2)) {
//     return null;
//   }

//   return {
//     num1: number1,
//     num2: number2,
//   };
// }

// function add() {
//   const value = getValue();
//   if (!value) {
//     document.getElementById("result").textContent = "Enter Valid Number";
//     return;
//   }
//   const result = value.num1 + value.num2;
//   document.getElementById("result").textContent = "Result " + result;
// }

// function sub() {
//   const value = getValue();
//   if (!value) {
//     document.getElementById("result").textContent = "enter valid number";
//     return;
//   }

//   const result = value.num1 - value.num2;
//   document.getElementById("result").textContent = "Result" + result;
// }

let naMe = ["hari", "shyam", "shyam"];
let i = 0;
naMe.forEach(() => {
  for (let i = 0; i <= naMe.length; i++) {
    console.log(naMe);
  }
});

// Exericse No 01
// const quotes = ["dipkiran", "thapa", "phidim", "panchathar"];

// const button = document.querySelector("button");
// const quote = document.querySelector("h1");
// // button.addEventListener("click", () => {
// //   const index = Math.floor(Math.random() * quotes.length);
// //   quote.textContent = quotes[index];
// // });

const button = document.querySelector("button");
const quote = document.querySelector("h1");
const quotes = ["dipkiran", "thapa", "phidim", "PANCHTHAR"];
let index = 0;

button.addEventListener("click", () => {
  quote.textContent = quotes[index];
  index++;

  if (index >= quotes.length) {
    index = 0;
  }
});

// Example 01
// const btn = document.getElementById("btn");
// const listItem = document.getElementById("listItem");
// let count = 1;
// btn.addEventListener("click", function () {
//   console.log("clicked");
//   const li = document.createElement("li");
//   li.textContent = "Item" + count;
//   listItem.appendChild(li);
//   count++;
// });

// Example 02
// const btn = document.getElementById("btn");
// const text = document.getElementById("text");

// btn.addEventListener("click", function () {
//   text.textContent = "Hello Java Script";
//   text.after(btn);
// });

//photo sliding

// const slides = document.querySelector(".slides");
// const slide = document.querySelectorAll(".slide");

// const nextBtn = document.getElementById("next");
// const prevBtn = document.getElementById("prev");

// let index = 0;
// const totalSlides = slide.length;

// nextBtn.addEventListener("click", () => {
//   index++;
//   if (index >= totalSlides) index = 0;
//   updateSlide();
// });

// prevBtn.addEventListener("click", () => {
//   index--;
//   if (index < 0) index = totalSlides - 2;
//   updateSlide();
// });

// function updateSlide() {
//   slides.style.transform = `translateX(${-index * 1000}px)`;
// }
// setInterval(() => {
//   index++;
//   if (index >= totalSlides) index = 0;
//   updateSlide();
// }, 3000);

const bnt = document.getElementById("btn");
const color = ["red", "pink", "orange"];
let index = 1;

bnt.addEventListener("click", function () {
  document.body.style.background = color[index];
  index++;

  if (index >= color.length) {
    index = 1;
  }
});

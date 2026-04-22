// const btn = document.getElementById("btn");
// const alertBox = document.getElementById("alertBox");

// btn.addEventListener("click", function () {
//   alertBox.style.right = "20px";

//   setTimeout(function () {
//     alertBox.style.right = "-300px";
//   }, 3000);
// });

const btn = document.getElementById("btn");
const he2 = document.querySelector("h2");

let text = ["hello", "dipkiran", "thapa"];
let index = 0;

btn.addEventListener("click", function ()=>{
  he2 = textContent = text[index];
  index++;

  if(index >= text.length){
    index = 0;
  }
  
})

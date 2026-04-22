const btn = document.getElementById("btn");
let color = ["red", "yellow", "pink"];
let index = 0;

btn.addEventListener("click", function () {
  document.body.style.backgroundColor = color[index];
  index++;
  if (index >= color.length) {
    index = 0;
  }
});

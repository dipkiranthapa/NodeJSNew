const btn = document.getElementById("btn");
const form = document.getElementById("form");
const close = document.getElementById("close");
const submit = document.getElementById("submit");
const table = document.getElementById("tablebody");

let count = 1;

btn.addEventListener("click", function () {
  form.style.display = "block";
  fname.value = "";
  lname.value = "";
  age.value = "";
});

close.addEventListener("click", function () {
  form.style.display = "none";
});

window.onclick = function (event) {
  if (event.target === form) {
    form.style.display = "none";
  }
};

submit.addEventListener("click", function () {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const age = document.getElementById("age").value;

  let row = `
  <tr>
  <td>${count++}</td>
  <td>${fname} ${lname}</td>
  <td>${age}</td>
  </tr>
  `;

  table.innerHTML += row;
  form.style.display = "none";
});

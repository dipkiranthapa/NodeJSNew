const btn = document.getElementById("btn");
const form = document.getElementById("form");
const close = document.getElementById("close");
const submit = document.getElementById("submit");
const table = document.getElementById("tableBody");

let count = 1;

/* open popup */

btn.addEventListener("click", function () {
  form.style.display = "block";
});

/* close popup */

close.addEventListener("click", function () {
  form.style.display = "none";
});

/* close outside */
window.onclick = function (event) {
  if (event.target == form) {
    form.style.display = "none";
  }
};

/* add data to table */

submit.addEventListener("click", function () {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let age = document.getElementById("age").value;

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

// let week = "sunday";
// switch (week) {
//   case 1:
//     Sunday;
//     console.log("Holiday");
//     break;

//   case 2:
//     "Monday";
//     break;

//   case 3:
//     "Tusday";
//     break;
// }

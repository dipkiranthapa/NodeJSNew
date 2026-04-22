const addBtn = document.getElementById("addBtn");
const listItem = document.getElementById("listItem");
const text = document.getElementById("text");

let count = 0;

addBtn.addEventListener("click", function () {
  let time = new Date();
  
});

// addBtn.addEventListener("click", function () {
//   const li = document.createElement("li");
//   li.textContent = "Hello Java Script" + count;
//   listItem.appendChild(li);
//   count++;
// });

// const removeBtn = document.getElementById("remove");
// removeBtn.addEventListener("click", function () {
//   const remove = listItem.lastElementChild;
//   if (!remove) {
//     alert("No Data Found");
//     return;
//   }
//   const removeConform = confirm("Do you Want to Delete");
//   if (removeConform) {
//     listItem.removeChild(remove);
//     alert("Removed");
//   } else {
//     alert("NO Removed");
//   }
// });

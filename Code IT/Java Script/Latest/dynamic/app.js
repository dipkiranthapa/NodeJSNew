// function addOption() {
//   const dropdown = document.getElementById("myDropdown");

//   const value = prompt("Enter new option:");

//   if (value && value.trim() !== "") {
//     const option = document.createElement("option");
//     option.value = value;
//     option.textContent = value;
//     dropdown.appendChild(option);
//   }
// }

// for (let i = 0; i < dropdown.options.length; i++) {
//   if (dropdown.options[i].value === value) {
//     alert("Option already exists!");
//     return;
//   }
// }

const btn = document.getElementById("btn");
const text = document.getElementById("text");
btn.addEventListener("click", () => {
  text.textContent = "Java Script";
  btn.after(text);
});

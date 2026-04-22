// const tabButtons = document.querySelectorAll(".tablinks");
// const tabs = document.querySelectorAll(".tabcontent");
// tabButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     // Hide all tabs
//     tabs.forEach((tab) => (tab.style.display = "none"));

//     // Remove active class from buttons
//     tabButtons.forEach((btn) => btn.classList.remove("active"));

//     // Get tab name from clicked button
//     let tabName = button.dataset.tab;

//     // Show selected tab
//     document.getElementById(tabName).style.display = "block";

//     // Add active class to clicked button
//     button.classList.add("active");
//   });
// });

// //Second Project
const btn = document.getElementById("btn");
const select = document.getElementById("employeeSelect");
const tableBody = document.getElementById("tableBody");

const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const eidInput = document.getElementById("eid");
const totalDisplay = document.getElementById("total");

let employees = [];
// Limit
let maxRows = 3;
let addedRows = 0;

btn.addEventListener("click", function () {
  const firstName = nameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const eid = eidInput.value.trim();

  // Check Duplicate EID
  const exists = employees.some((emp) => emp.eid === eid);
  if (exists) {
    alert("Emplyee Already in DataBase");
    return;
  }

  const employee = {
    firstName,
    lastName,
    eid,
  };

  employees.push(employee);

  const option = document.createElement("option");
  option.value = employees.length - 1; // No Limited
  option.textContent = firstName + "" + lastName;
  select.appendChild(option);
  nameInput.value = "";
  lastNameInput.value = "";
  eidInput.value = "";
});

// option selection
select.addEventListener("change", function () {
  //Limited perosn add

  if (addedRows >= maxRows) {
    alert("you can only add 3 Employees");
    return;
  }
  // limited person add end

  const index = this.value;
  if (index === "") return;

  const emp = employees[index];

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${emp.firstName}</td>
    <td>${emp.lastName}</td>
    <td>${emp.eid}</td>
  `;

  tableBody.appendChild(row);
  addedRows++;

  //Price Calculation
  const total = addedRows * 10;
  totalDisplay.textContent = total;

  // Prevent Selecting some employee Again
  this.options[index].disabled = true;
});

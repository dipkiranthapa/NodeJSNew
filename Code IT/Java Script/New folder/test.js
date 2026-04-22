

let users = [
  { name : "Dipkiran Thapa", Age: 22, active: true},
  { name : " Anish Chaudhary", Age : 25, active: true},
  { name : " Ganesh Pokhrel", Age : 25, active: true}
];

// document.getElementById("damo").innerText = "User Management System";

let output = document.getElementById("output");

// forEach display user

function showUsers(){
  output.innerHTML = "";
  users.forEach(user => {
    output.innerHTML += `<div class="user">
    name : ${user.name}, age: ${user.age}, active: ${user.active}
    </div>`;
  });
}










/* 🔹 filter – Show active users only */
function showActiveUsers() {
  output.innerHTML = "";
  let activeUsers = users.filter(user => user.active);

  activeUsers.forEach(user => {
    output.innerHTML += `<div class="user">
      ${user.name} (Active)
    </div>`;
  });
}









/* 🔹 map – Show only usernames */
function showUserNames() {
  output.innerHTML = "";
  let names = users.map(user => user.name);

  names.forEach(name => {
    output.innerHTML += `<div class="user">${name}</div>`;
  });
}






/* 🔹 find – Find single user */
function findUser() {
  output.innerHTML = "";
  let input = document.getElementById("searchName").value.toLowerCase();

  let user = users.find(
    u => u.name.toLowerCase() === input
  );

  if (user) {
    output.innerHTML = `
      <div class="user">
        Name: ${user.name}<br>
        Age: ${user.age}<br>
        Active: ${user.active}
      </div>
    `;
  } else {
    output.innerHTML = "User not found ❌";
  }
}

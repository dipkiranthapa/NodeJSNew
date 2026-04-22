const addBtn = document.getElementById("btn");
const text = document.getElementById("text");
const date = document.getElementById("date");
const priority = document.getElementById("priority");
const task = document.getElementById("taskList");
const completed = document.getElementById("completed");
const search = document.getElementById("search");
const staTus = document.getElementById("status");
let count = 1;

//Old
addBtn.addEventListener("click", function () {
  const newText = text.value.trim();
  if (newText === "") {
    alert("Please fill the Form");
    return;
  }

  //Expire Date
  const today = new Date();
  const dueDate = new Date(date.value);
  const diffTime = dueDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  let statusText = "";
  let statusColor = "";

  if (diffDays <= 0) {
    statusText = "Expried";
    statusColor = "red";
  } else if (diffDays <= 5) {
    statusText = "Renew";
    statusColor = "yellow";
  } else if (diffDays <= 10) {
    statusText = "Expire Soon";
    statusColor = "blue";
  } else {
    statusText = "Active";
  }
  //.. Expire End Here

  const tr = document.createElement("tr");
  if (priority.value === "High") {
    tr.style.background = "#ffb3b3";
  } else if (priority.value === "Medium") {
    tr.style.background = "#fff0b3";
  } else {
    tr.style.background = "#b3ffb3";
  }

  tr.innerHTML = `
  <td>${count++}</td>
  <td> ${newText}</td>
  <td> ${date.value}</td>
  <td> ${priority.value}</td>
  <td style="color:${statusColor}">${statusText}</td>
  <td>
  <button class = "done"> Done </button>
  <button class = "delete"> Delete </button>
  </td>
  `;
  task.appendChild(tr);

  tr.querySelector(".delete").onclick = function () {
    tr.remove();
  };

  // Done to Move to Completed
  tr.querySelector(".done").onclick = function () {
    const tr2 = document.createElement("tr");
    tr2.innerHTML = `
    <td>${count++}</td>
    <td> ${newText} </td>
    <td> ${date.value} </td>
    <td> ${priority.value} </td>
    <td>
    <button class = "del"> Delete </button>
    </td>
    `;

    // Same Prority Color
    if (priority.value === "High") {
      tr2.style.background = "#ffb3b3";
    } else if (priority.value === "Medium") {
      tr2.style.background = "#fff0b3";
    } else {
      tr2.style.background = "#b3ffb3";
    }

    // Delete from Completed
    tr2.querySelector(".del").onclick = function () {
      tr2.remove();
    };

    // Strike Line
    tr2.style.textDecoration = "line-through";
    completed.appendChild(tr2);
    tr.remove();
  };

  text.value = "";
  date.value = "";
});
// Search

search.addEventListener("keyup", function () {
  const filter = search.value.toLowerCase();
  const rows = task.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    const tds = rows[i].getElementsByTagName("td");
    let found = false;
    //Check all Columns
    for (let i = 0; i < tds.length; i++) {
      const textValue = tds[i].textContent.toLocaleLowerCase();
      if (textValue.indexOf(filter) > -1) {
        found = true;
        break;
      }
    }

    if (found) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }

  text.value = "";
  date.value = "";
});

//second part
// const addBtn = document.getElementById("btn");
// const text = document.getElementById("text");
// const date = document.getElementById("date");
// const priority = document.getElementById("priority");
// const task = document.getElementById("taskList");
// const completed = document.getElementById("completed");
// const search = document.getElementById("search");

// // Load tasks from localStorage on page load

// window.addEventListener("load", () => {
//   const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   const savedCompleted =
//     JSON.parse(localStorage.getItem("completedTasks")) || [];

//   savedTasks.forEach((t) => addTaskToDOM(t, false));
//   savedCompleted.forEach((t) => addTaskToDOM(t, true));
// });

// // Add Task
// addBtn.addEventListener("click", function () {
//   const newText = text.value.trim();
//   if (!newText) return alert("Please fill the Form");

//   const taskObj = {
//     text: newText,
//     date: date.value,
//     priority: priority.value,
//     createdAt: new Date().getTime(),
//   };

//   addTaskToDOM(taskObj, false);

//   // Save to localStorage
//   const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   savedTasks.push(taskObj);
//   localStorage.setItem("tasks", JSON.stringify(savedTasks));

//   text.value = "";
//   date.value = "";
// });

// // Function to add task to DOM
// function addTaskToDOM(taskObj, isCompleted) {
//   const today = new Date();
//   const dueDate = new Date(taskObj.date);
//   const diffTime = dueDate - today;
//   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//   let statusText = "";
//   let statusColor = "";
//   if (diffDays <= 0) {
//     statusText = "Expired";
//     statusColor = "red";
//   } else if (diffDays <= 5) {
//     statusText = "Renew";
//     statusColor = "yellow";
//   } else if (diffDays <= 10) {
//     statusText = "Expire Soon";
//     statusColor = "blue";
//   } else {
//     statusText = "Active";
//     statusColor = "green";
//   }

//   const tr = document.createElement("tr");

//   let bgColor = "#b3ffb3";
//   if (taskObj.priority === "High") bgColor = "#ffb3b3";
//   else if (taskObj.priority === "Medium") bgColor = "#fff0b3";
//   tr.style.background = bgColor;

//   if (isCompleted) {
//     tr.innerHTML = `
//       <td>${taskObj.text}</td>
//       <td>${taskObj.date}</td>
//       <td>${taskObj.priority}</td>
//      <td><button class="del">Delete</button></td>
//     `;
//     tr.style.textDecoration = "line-through";
//     completed.appendChild(tr);

//     tr.querySelector(".del").onclick = function () {
//       tr.remove();
//       removeFromLocalStorage(taskObj, "completedTasks");
//     };
//   } else {
//     tr.innerHTML = `
//       <td>${taskObj.text}</td>
//       <td>${taskObj.date}</td>
//       <td>${taskObj.priority}</td>
//       <td style="color:${statusColor}">${statusText}</td>
//       <td>
//         <button class="done">Done</button>
//         <button class="delete">Delete</button>
//       </td>
//     `;
//     task.appendChild(tr);

//     tr.querySelector(".delete").onclick = function () {
//       tr.remove();
//       removeFromLocalStorage(taskObj, "tasks");
//     };

//     tr.querySelector(".done").onclick = function () {
//       tr.remove();
//       removeFromLocalStorage(taskObj, "tasks");
//       addTaskToDOM(taskObj, true);

//       // Save completed task
//       const completedTasks =
//         JSON.parse(localStorage.getItem("completedTasks")) || [];
//       completedTasks.push(taskObj);
//       localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
//     };
//   }
// }

// // Remove task from localStorage
// function removeFromLocalStorage(taskObj, key) {
//   let arr = JSON.parse(localStorage.getItem(key)) || [];
//   arr = arr.filter((t) => t.createdAt !== taskObj.createdAt);
//   localStorage.setItem(key, JSON.stringify(arr));
// }

// // Search
// search.addEventListener("keyup", function () {
//   const filter = search.value.toLowerCase();
//   const rows = task.getElementsByTagName("tr");
//   for (let i = 0; i < rows.length; i++) {
//     const tds = rows[i].getElementsByTagName("td");
//     let found = false;
//     for (let j = 0; j < tds.length; j++) {
//       if (tds[j].textContent.toLowerCase().includes(filter)) {
//         found = true;
//         break;
//       }
//     }
//     rows[i].style.display = found ? "" : "none";
//   }
// });

// const btn = document.getElementById("btn5");
// const list = document.getElementById("list");
// const fruits = ["mango", "orange", "pineapple"];

// btn.addEventListener("click", function () {
//   window.alert("hello World");

//   btn.style.color = "red";
//   fruits.forEach((fruit) => {
//     const listItem = document.createElement("li");
//     listItem.innerHTML = fruit;
//     list.appendChild(listItem);
//   });
// });

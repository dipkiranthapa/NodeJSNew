const btn = document.getElementById("addbtn");
const text = document.getElementById("addtext");
const date = document.getElementById("date");
const priority = document.getElementById("priority");
const taskList = document.getElementById("tasklist");

const completed = document.getElementById("completed");
const search = document.getElementById("search");
let dragRow = null;

/* ADD TASK */

btn.addEventListener("click", function () {
  const task = text.value.trim();

  if (task === "") return;

  const tr = document.createElement("tr");

  tr.draggable = true;

  tr.classList.add(priority.value);

  tr.innerHTML = `

 <td>${task}</td>
 <td>${date.value}</td>
 <td>${priority.value}</td>

 <td>

 <button class="done">Done</button>

 <button class="delete">Delete</button>

 </td>

 `;

  taskList.appendChild(tr);

  addDragEvents(tr);

  text.value = "";
  date.value = "";

  // * DONE BUTTON */
  tr.querySelector(".done").onclick = function () {
    const tr2 = document.createElement("tr");
    tr2.classList.add(priority.value);
    tr2.innerHTML = `
  <td> ${task} </td>
  <td>${tr.children[1].textContent}</td>
  <td>${priority.value} </td>
  `;

    completed.appendChild(tr2);
    tr.remove();
  };

  /* DELETE BUTTON */

  tr.querySelector(".delete").onclick = function () {
    tr.remove();
  };
});

/* SEARCH */

search.addEventListener("keyup", function () {
  const filter = search.value.toLowerCase();

  const rows = taskList.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    let txt = rows[i].textContent.toLowerCase();

    if (txt.indexOf(filter) > -1) rows[i].style.display = "";
    else rows[i].style.display = "none";
  }
});

/* DRAG SYSTEM */

function addDragEvents(row) {
  row.addEventListener("dragstart", function () {
    dragRow = row;
  });

  row.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  row.addEventListener("drop", function () {
    if (dragRow !== row) {
      taskList.insertBefore(dragRow, row);
    }
  });
}

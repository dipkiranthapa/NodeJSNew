let todos = [
  { id: 1, task: "Learn JS", completed: true },
  { id: 2, task: "Practice HTML", completed: false },
  { id: 3, task: "Build Project", completed: true }
];

let output = document.getElementById("output");

/* forEach – show todos */
function showTodos() {
  output.innerHTML = "";
  todos.forEach(t => {
    output.innerHTML += `<p>${t.task} - ${t.completed}</p>`;
  });
}

/* filter – completed todos */
function showCompleted() {
  output.innerHTML = "";
  let completed = todos.filter(t => t.completed);

  completed.forEach(t => {
    output.innerHTML += `<p>${t.task} ✅</p>`;
  });
}

/* find – find by id */
function findTodo() {
  output.innerHTML = "";
  let id = Number(document.getElementById("todoId").value);

  let todo = todos.find(t => t.id === id);

  output.innerHTML = todo
    ? `${todo.task} (Completed: ${todo.completed})`
    : "Todo not found ❌";
}

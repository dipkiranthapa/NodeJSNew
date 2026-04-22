const addBtn = document.getElementById("btn");
const textHere = document.getElementById("textThe");
const liText = document.getElementById("text");

let edit = null;

addBtn.addEventListener("click", function () {
  const newText = textHere.value.trim();
  if (newText === "") return;

  // If editing existing item

  if (edit !== null) {
    edit.firstChild.textContent = newText + "";
    edit = null;
    textHere.value = "";
    addBtn.textContent = "Add";
    return;
  }

  // Create new item
  const li = document.createElement("li");
  li.textContent = newText + " ";
  li.style.listStyle = "none";

  // Remove Button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";

  removeBtn.addEventListener("click", function () {
    li.remove();
  });

  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  editBtn.addEventListener("click", function () {
    // Put text into input
    textHere.value = li.firstChild.textContent.trim();

    edit = li; // remember which item to edit
    addBtn.textContent = "Save"; // change button name
  });

  li.appendChild(removeBtn);
  li.appendChild(editBtn);

  liText.appendChild(li);

  textHere.value = "";
});

const btn = document.getElementById("btn");
const text = document.getElementById("text");
const liList = document.getElementById("liList");

btn.addEventListener("click", function () {
  let newText = text.value.trim();
  const li = document.createElement("li");
  li.textContent = newText;
  liList.appendChild(li);
});

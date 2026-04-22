const todoBtn = document.getElementById("todobtn");
const inputText = document.getElementById("textInput");
const taskList = document.getElementById("taskList");

todoBtn.addEventListener("click", function () {
  const newText = inputText.value;
  if (newText.trim() === "") return; // Remove Space

  const li = document.createElement("li");
  li.textContent = newText;
  taskList.appendChild(li);
});
// todoBtn.addEventListener("click", function () {
//   const newText = inputText.value;

//   if (newText.trim() === "") return;

//   const li = document.createElement("li");

//   const span = document.createElement("span");
//   span.textContent = newText;

//   // DELETE BUTTON
//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Remove";

//   deleteBtn.addEventListener("click", function () {
//     const confirmDelete = confirm("Do you want to delete?");
//     if (confirmDelete) {
//       li.remove();
//     }
//   });

//   // EDIT BUTTON
//   const editBtn = document.createElement("button");
//   editBtn.textContent = "Edit";

//   editBtn.addEventListener("click", function () {
//     if (editBtn.textContent === "Edit") {
//       const editInput = document.createElement("input");
//       editInput.type = "text";
//       editInput.value = span.textContent;

//       li.insertBefore(editInput, span);
//       li.removeChild(span);

//       editBtn.textContent = "Save";
//     } else {
//       const editInput = li.querySelector("input");
//       span.textContent = editInput.value;

//       li.insertBefore(span, editInput);
//       li.removeChild(editInput);

//       editBtn.textContent = "Edit";
//     }
//   });

//   li.appendChild(span);
//   li.appendChild(editBtn);
//   li.appendChild(deleteBtn);
//   taskList.appendChild(li);

//   inputText.value = "";
// });

// todoBtn.addEventListener("click", function () {
//   const newtext = inputText.value;

//   if (newtext.trim() === "") return; // Prevent empty tasks

//   const li = document.createElement("li");
//   li.textContent = newtext;

//   const crtBtn = document.createElement("button");
//   crtBtn.textContent = "Remove";

//   crtBtn.addEventListener("click", function () {
//     li.remove();
//   });

//   li.appendChild(crtBtn); // ✅ Add button to li
//   taskList.appendChild(li);

//   inputText.value = ""; // Optional: clear input after adding
// });

//Remove list

// todoBtn.addEventListener("click", function () {
//   const taskText = inputText.value;
//   if (taskText === "") return;

//   const li = document.createElement("li");
//   li.textContent = taskText;

//   // ✅ Delete Button (Fixed)
//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "X";
//   deleteBtn.addEventListener("click", function () {
//     li.remove();
//   });

//   // ✅ Edit Button (Fixed)
//   const editBtn = document.createElement("button");
//   editBtn.textContent = "Edit";
//   editBtn.addEventListener("click", function () {
//     if (editBtn.textContent === "Edit") {
//       const editInput = document.createElement("input");
//       editInput.type = "text";
//       editInput.value = li.firstChild.textContent;

//       li.firstChild.remove();
//       li.prepend(editInput);

//       editBtn.textContent = "Save";
//     } else {
//       const newText = li.querySelector("input").value;

//       li.querySelector("input").remove();
//       li.prepend(document.createTextNode(newText));

//       editBtn.textContent = "Edit";
//     }
//   });

//   li.appendChild(editBtn);
//   li.appendChild(deleteBtn);
//   taskList.appendChild(li);

//   inputText.value = "";
// });

// li.firstChild.remove();
// li.prepend(editInput);
// firstChild.remove ✔ Remove the text node from the <li>
// li.prepend ✔ Add the input field at the beginning

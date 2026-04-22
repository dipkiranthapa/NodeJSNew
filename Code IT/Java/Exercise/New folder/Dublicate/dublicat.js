
let persons = JSON.parse(localStorage.getItem("persons")) || [];
let editIndex = null;

// Save data from form
document.getElementById("personForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let apartment = document.getElementById("apartment").value.trim();
    let details = document.getElementById("details").value.trim();

    if(editIndex !== null){
        // Update existing entry
        persons[editIndex] = {name, apartment, details};
        editIndex = null;
    } else {
        // Add new entry
        persons.push({name, apartment, details});
    }

    localStorage.setItem("persons", JSON.stringify(persons));
    this.reset();
    renderTable();
});

// Render table
function renderTable() {
    let tbody = document.getElementById("dataTable");
    if(persons.length === 0){
        tbody.innerHTML = "<tr><td colspan='4'>No data</td></tr>";
        return;
    }

    tbody.innerHTML = "";
    persons.forEach((p, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${p.name}</td>
                <td>${p.apartment}</td>
                <td>${p.details}</td>
                <td>
                    <button onclick="duplicate(${index})">Duplicate</button>
                    <button onclick="edit(${index})">Edit</button>
                    <button onclick="deleteEntry(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Show all data
function showAll() {
    renderTable();
}

// Duplicate an entry
function duplicate(index){
    let p = persons[index];
    // Prefill form with same data
    document.getElementById("name").value = p.name;
    document.getElementById("apartment").value = p.apartment;
    document.getElementById("details").value = p.details;
    editIndex = null; // New entry
}

// Edit an entry
function edit(index){
    let p = persons[index];
    document.getElementById("name").value = p.name;
    document.getElementById("apartment").value = p.apartment;
    document.getElementById("details").value = p.details;
    editIndex = index; // Save changes on submit
}

// Delete entry
function deleteEntry(index){
    if(confirm("Are you sure you want to delete this entry?")){
        persons.splice(index,1);
        localStorage.setItem("persons", JSON.stringify(persons));
        renderTable();
    }
}

// Load table on page load
renderTable();

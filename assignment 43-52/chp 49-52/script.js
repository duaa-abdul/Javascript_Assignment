// q1

function displayData(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    document.getElementById("nameDisplay").textContent = "Name: " + name;
    document.getElementById("emailDisplay").textContent = "Email: " + email;
    document.getElementById("formDisplay").style.display = "block";
}

// q2

function fullItems(){
    var p=`This is the full description of the item with more details and information.`
    document.getElementById("para").innerText=p;
}

// q3

var selectedRow = null;

function addStudent(event) {
    event.preventDefault();
    
    var name = document.getElementById('studentName').value;
    var classValue = document.getElementById('studentClass').value;
    var table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    var nameCell = newRow.insertCell(0);
    var classCell = newRow.insertCell(1);
    var actionsCell = newRow.insertCell(2);

    nameCell.innerHTML = name;
    classCell.innerHTML = classValue;
    actionsCell.innerHTML = '<button onclick="editStudent(this)">Edit</button> <button onclick="deleteStudent(this)">Delete</button>';

    document.getElementById('studentForm').reset();
}

function deleteStudent(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editStudent(button) {
    selectedRow = button.parentNode.parentNode;
    document.getElementById('editName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('editClass').value = selectedRow.cells[1].innerHTML;
    document.getElementById('editForm').style.display = 'block';
}

function updateStudent(event) {
    event.preventDefault();
    selectedRow.cells[0].innerHTML = document.getElementById('editName').value;
    selectedRow.cells[1].innerHTML = document.getElementById('editClass').value;
    document.getElementById('editForm').style.display = 'none';
}
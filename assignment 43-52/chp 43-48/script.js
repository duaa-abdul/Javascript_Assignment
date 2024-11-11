// q1
function showAlert(){
    alert("Hello !")
}

// q2
function mobile(){
    alert("Thanks For Purchasing a mobile from us!")
}

// q3
function Delete(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// q5
var counterValue = 0;

function increaseCounter() {
    counterValue++;
    document.getElementById("counter").innerText = counterValue;
}

function decreaseCounter() {
    counterValue--;
    document.getElementById("counter").innerText = counterValue;
}
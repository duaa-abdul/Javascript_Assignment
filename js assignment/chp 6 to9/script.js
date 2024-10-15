// q1

document.write("<h2>Result</h2>")
var a =10;
document.write(`The value of a is :` + a + "</br>");
document.write("</br>");

var a = ++a;

document.write(`The value of ++a is :` + a +"</br>");
document.write(`Now The value of a is :` + a +"</br>");

document.write("</br>");

document.write(`The value of ++a is :` + a +"</br>");

a = ++a;

document.write(`The value of ++a is :` + a +"</br>");

a = --a;
document.write("</br>");
document.write(`The value of --a is :` + a +"</br>");
document.write(`Now The value of a is :` + a +"</br>");

document.write("</br>");
document.write(`The value of --a is :` + a +"</br>");

a = --a;
document.write(`Now The value of a is :` + a +"</br>");

// q2
var a=2;
var b=1;

// var Result= --a - --b + ++b + b--;
// document.write(Result);

var output= --a;
document.write(output);

 document.write("</br>");

var output= --a - --b;
document.write(output);

document.write("</br>");

var output= --a - --b + ++b;
document.write(output);

document.write("</br>");

var output= --a - --b + ++b + b--;
document.write(output);

// q3

var userName = prompt("What is your name?");
alert("Hello, " + userName + "! Welcome to our website.");

// q4

var userChoice = prompt("Choice Any One : \nChoose Your Number \nDefault Table")
if (userChoice === "Choose Your Number") {
    var startFrom = +prompt ("What's your starting number")
    var endFrom = +prompt("Enter your ending number!")
    var tableOf = +prompt("Which number would you like the table for")
    document.write("TABLE OF" + " " +  tableOf + "" + "</br>" )

    for (var i = startFrom; i <= endFrom; i++) {
        document.write(tableOf + "  X  " + i + " = " + (tableOf * i) + "</br>")
    }
    
}else if(userChoice === "Default Table"){
    document.write("TABLE OF" + " " +  5 + "" + "</br>" )

    for (var i = 1; i <= 10; i++) {
        document.write(5 + "  X  " + i + " = " + (5 * i) + "</br>")
    }

}else{
    document.write("not found")
}
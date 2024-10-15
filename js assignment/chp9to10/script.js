// q1
var city = prompt("Enter your city name:");
 if (city === "karachi") {
    alert("Welcome to city of lights");
}
// q2

var gender = prompt("Enter your gender:");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
}
else {
    alert("?")
}
// q3

var trafic =prompt("Enter traffic signal color");

if(trafic === "Red"){
alert("Must stop")
}
else if(trafic === "Yellow"){
alert ("REady to move")
}
else if(trafic === "Green"){
    alert ("Move now")
}
else{
    alert("not enter right color")
}
// q4
var fuel =+prompt("Enter remaining fuel in your car (in litres):");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// q5
var a = 4;
if (++a === 5) {
    alert("Given condition for variable a is true");
}

var b =82;
if(b++ === 83){
    alert("Given condition for variable a is true")
}
else{
    alert("nothing found")
}

var c= 12;
if(c++ === 13){
alert("Condition 1 is true")
}
else if(c === 13) {
    alert("Condition 2 is true")
}
else if(++c < 14) {
    alert("Condition 3 is true")
}
else if(c === 14) {
    alert("Condition 4 is true")
}
else{
    alert("nothing found")
}

var materialCost =20000;
var laboreCost =2000;
var totalCost=materialCost + laboreCost;

if(totalCost ===laboreCost + materialCost){
alert("The cost equal")
}




if(true){
alert(true)
}
if(false){
alert(false)
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// q6
var subject1 =+(prompt("Enter marks obtained in Subject 1:"));
var subject2 =+(prompt("Enter marks obtained in Subject 2:"));
var subject3 =+(prompt("Enter marks obtained in Subject 3:"));


var totalMarks = 300;
var obtainedMarks = subject1 + subject2 + subject3;


var percentage = (obtainedMarks / totalMarks) * 100;


var grade;
var remarks;


if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");

// q7
var number = 2;
var input = +prompt("Guess the number");

if( number === input ){
    alert("Bingo! Your answer is correct");
}
else{
    alert("Close enough to the correct answer");
}

// q8
var number=+prompt("Enter a number");

if (number % 3 === 0) {
    console.log(number + " is divisible by 3.");
} else {
    console.log(number + " is not divisible by 3.");
}
// q9
var number=+prompt("Enter a number");

if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}
// q10

var temperature = +prompt(
  "Enter the given temperature \n 40 \n 30 \n 20 \n 10"
);

if (temperature === 40) {
  alert("It is to hot outside.");
} else if (temperature === 30) {
  alert("The weather today is normal.");
} else if (temperature === 20) {
  alert("Today weather is cool.");
} else if (temperature === 10) {
  alert("OMG! today weather is so cool! .");
} else {
  alert("nothing found");
}
// q11
var firstNumber = +prompt("Enter the first number: ");
var secondNumber =+prompt("Enter the second number: ");
var operator = prompt("Enter an operator (+, -, *, /, %): ");

if (operator === '+') {
    document.write(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
} else if (operator === '-') {
    document.write(firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber));
} else if (operator === '*') {
    document.write(firstNumber + " * " + secondNumber + " = " + (firstNumber * secondNumber));
} else if (operator === '/') {
    if (secondNumber !== 0) {
        document.write(firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber));
    } else {
        document.write("Error! Division by zero is not allowed.");
    }

} else if (operator === '%') {
    if (secondNumber !== 0) {
        document.write(firstNumber + " % " + secondNumber + " = " + (firstNumber % secondNumber));
    } else {
        document.write("Error! Modulus by zero is not allowed.");
    }
} 

else {
    document.write("Invalid operator! Please enter one of +, -, *, /, %.");
}

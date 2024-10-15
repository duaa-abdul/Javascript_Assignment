// q1
var input = prompt("Enter a character:");

if (input >= '0' && input <= '9') {
    alert("The input is a number.");
} else if (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {
    alert("The input is an uppercase letter.");
} else if (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
    alert("The input is a lowercase letter.");
} else {
    alert("The input is neither a number nor a letter.");
}

// q2

var num1 = +(prompt("Enter the first number:"));
var num2 = +(prompt("Enter the second number:"));

if (num1 > num2) {
    alert("The larger number is: " + num1);
} else if (num2 > num1) {
    alert("The larger number is: " + num2);
} else {
    alert("Both numbers are equal.");
}

// q3
var number=+prompt("Enter a number");

if(number > 0){
alert("Your number is positive")
}
else if(number < 0){
alert("your number is negative")
}
else{
    alert("The number is zero")
}

// q4

var char = prompt("Enter a character").toLowerCase();
var vowels = ['a', 'e', 'i', 'o', 'u'];

if (vowels.includes(char)) {
    alert(true);
} else {
    alert(false);
}


// q5
var passward= 12345;
var input=+prompt("Enter your passward");

if(!input){
alert("Please enter your password")
}
else if(passward === input){
alert("you enter right passward")
}
else{
    alert("Wrong passward")
}

// q6

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

alert(greeting);

// q7

var time =+prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");

if (time >= 0 && time < 1200) {
    alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night!");
} else {
    alert("Invalid time entered!");
}
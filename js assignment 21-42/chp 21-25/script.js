// q1

var firstName = prompt("Enter your first name");
var second = prompt("Enter your second name");

var fullName = firstName + " " + second;

document.write(fullName);

// q2
var favoritePhone = prompt("Enter your favorite mobile phone model:");
var lengthOfString = favoritePhone.length;
document.write("My favorite phone is: " + favoritePhone + "<br>");
document.write("Length of string: " + lengthOfString);

// q3
var word = "Pakistani";
var index = word.indexOf("n");
document.write("String: " + word + "<br>");
document.write("Index of 'n': " + index);

// q4
var name = "Hello World";
var lastIndex = name.lastIndexOf("o");
document.write("String: " + name + "<br>");
document.write("Last index of 'l': " + lastIndex);

// q5

var cities = "Pakistani";
var Index3 = cities[3];
document.write("String: " + cities + "<br>");
document.write("Character at index 3: " + Index3);

// q7
var city = "Hyderabad";
document.write("City ", city + "</br>");
var replace = "Islamabad";
var merge = replace.replace("Hyderabad : ", replace);
document.write("After replaceent : ", merge);

// q8

var message =
  "Ali and are Sami are Best Friends.They Play Cricket and Football Together";
document.write(message + "</br>");

for (var i = 0; i <= message.length - 1; i++) {
  if (message.slice(i, i + 3) === "and") {
    message = message.slice(0, i) + "&" + message.slice(i + 3);
  }
}
document.write(message);

// q9
var number = "472";
document.write("value :", number + "</br>");
document.write("type:", typeof number + "</br>");

var number = "472";
document.write("value :", number + "</br>");
number = Number(number);
document.write("type:", typeof number);

// q10

var input = prompt("Emter your favourite Furit").toUpperCase();
document.write(input);

// q11

var input = prompt("Enter your favourite language").titleCase();
console.log(input);

// q12

var num = 35.36;
document.write("Number : ", num + "</br>");
var convert = num.toString();
document.write("Result : ", convert);

// 13

// q14

var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter the item you want to search for:").toLowerCase();

if (found) {
  alert(userInput + " is available in the list.");
} else {
  alert(userInput + " is not available in the list.");
}

document.write(
  "Search result for",
  userInput,
  ":",
  found ? "Found" : "Not Found"
);

// q15
var password = prompt("Enter your password:");

while (true) {
  var hasAlphabet = /[a-zA-Z]/.test(password);
  var hasNumber = /[0-9]/.test(password);
  var startsWithNumber = /^[0-9]/.test(password);
  var isLongEnough = password.length >= 6;

  if (!hasAlphabet || !hasNumber) {
    alert("Password must contain both alphabets and numbers.");
  } else if (startsWithNumber) {
    alert("Password cannot start with a number.");
  } else if (!isLongEnough) {
    alert("Password must be at least 6 characters long.");
  } else {
    break;
  }

  password = prompt("Please enter a valid password:");
}

document.write("Password is valid:", password);

// q16
var university = "University of Karachi";
var array = university.split(" ");

for (let i = 0; i < array.length; i++) {
  document.write(array[i] + "<br>");
}

document.write("Array elements:", array);

// q17

var name = "Pakistan";
document.write("User Input : ", name + "</br>");
var lastCharacter = name.charAt(name.length - 1);
document.write("Last Character of Input : ", lastCharacter);

// q1
function myFunction() {
  document.write(new Date());
}
myFunction();

// q2

function greetUser(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  console.log("Hello, " + fullName + "! Welcome.");
}

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
greetUser(firstName, lastName);

// q3
function addTwoNumbers() {
  var num1 = +prompt("Enter the first number: ");
  var num2 = +prompt("Enter the second number: ");

  var result = num1 + num2;

  return result;
}

var sumOfNumbers = addTwoNumbers();
document.write("The sum of the two numbers is: " + sumOfNumbers);

// q4

function number(num1, num2, operator) {
  var result;
  switch (operator) {
    case `+`:
      result = num1 + num2;
      break;
    case `-`:
      result = num1 - num2;
      break;
    case `*`:
      result = num1 * num2;
      break;
    case `/`:
      result = num1 / num2;
      break;
    default:
      result = "Invalid operator";
  }
  return result;
}

var num1 = +prompt("Enter your first number");
var num2 = +prompt("Enter your first number");
var operator = prompt("sllect any 1 operator \n + \n - \n * \n /");
var numResult = number(num1, num2, operator);
alert("The result is : " + numResult);

// q5

function square(num) {
  return num * num;
}
var num1 = +prompt("Enter your first number");
var squaredNumber = square(num1);
alert(`The square is: ` + squaredNumber);

q6;
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

var factResult = factorial(5);
alert("The factorial is:" + factResult);

// q7

function count() {
  var startCount = +prompt("Enter the start number");
  var endCount = +prompt("Enter the end number");
  for (i = startCount; i <= endCount.length - 1; i++) {
    document.write(i);
  }
}
count();

function displayCounting() {
  var startCount = +prompt("Enter the start number");
  var endCount = +prompt("Enter the end number");
  var counting = "";
  for (let i = startCount; i <= endCount; i++) {
    counting += i + " ";
  }
  document.write(counting);
}

displayCounting(1, 10);

// q9

function area(width, height) {
  return width * height;
}

document.write("Area (Value of argunment) : " + area(10, 3) + "</br>");

var width = 9;
var height = 4;

document.write("Area( variable of argunment) : " + area(width, height));

// q10

function isPalindrome(str) {
  var reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
 
document.write("Is 'madam' a palindrome?", isPalindrome("madam"));
document.write("Is 'hello' a palindrome?", isPalindrome("kkpk"));

//   q11

function capitalizedLetter(str) {
  var result = "";
  var capitalizedLetter = true;

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (capitalizedLetter && char !== " ") {
      result += char.toUpperCase();
      capitalizedLetter = false;
    } else {
      result += char;
    }

    if (char === " ") {
      capitalizedLetter = true;
    }
  }

  return result;
}
var firstLetter = prompt("Enter your name");
document.write(capitalizedLetter(firstLetter));

// q12

function longestWords(str) {
  var longestWord = "";
  var currentWord = "";

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char !== " ") {
      currentWord += char;
    } else {
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
      currentWord = "";
    }
  }

  if (currentWord.length > longestWord.length) {
    longestWord = currentWord;
  }

  return longestWord;
}

document.write(longestWords("We Development Tutorial"));

// q13

function countLetter(str, letter) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }

  return count;
}

document.write(countLetter("JSResourceS.com", "o"));

// q14

// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     console.log("The circumference is " + circumference);
// }

// function calcArea(radius) {
//     var area = Math.PI * radius * radius;
//     console.log("The area is " + area);
// }

// calcCircumference(5);
// calcArea(5);

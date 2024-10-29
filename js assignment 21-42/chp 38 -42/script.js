// q1

function power(a, b) {
  for (var i = 0; i < b; i++) {
    i *= a;
  }
  return i;
}

document.write(power(2, 3));

// q2

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

document.write(isLeapYear(2024));
document.write(isLeapYear(2023));

// q3

function calculate(a, b, c) {
  return (a + b + c) / 2;
}

function calculateTriangleArea(a, b, c) {
  var s = calculate(a, b, c);
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

document.write(calculateTriangleArea(3, 4, 5));

// q4

function average(marks) {
  var sum = 0;
  for (var i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return sum / marks.length;
}

function percentage(marks) {
  var totalMarks = marks.length * 100;
  var obtainedMarks = 0;
  for (var i = 0; i < marks.length; i++) {
    obtainedMarks += marks[i];
  }
  return (obtainedMarks / totalMarks) * 100;
}

function mainFunction(marks) {
  document.write("Average:", average(marks));
  document.write("Percentage:", percentage(marks));
}

mainFunction([80, 90, 70]);

// q5
function customIndexOf(str, char) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}

document.write(customIndexOf("hello", "e"));
document.write(customIndexOf("hello", "b"));

// q6

function removeVowels(sentence) {
  var result = "";
  for (var i = 0; i < sentence.length; i++) {
    var char = sentence[i].toLowerCase();
    if (
      char !== "a" &&
      char !== "e" &&
      char !== "i" &&
      char !== "o" &&
      char !== "u"
    ) {
      result += sentence[i];
    }
  }
  return result;
}

document.write(removeVowels("Hello world"));

// q7
function countSuccessiveVowels(text) {
  var count = 0;
  var vowels = "aeiouAEIOU";

  for (var i = 0; i < text.length - 1; i++) {
    var firstChar = text[i];
    var secondChar = text[i + 1];

    switch (true) {
      case vowels.indexOf(firstChar) !== -1 &&
        vowels.indexOf(secondChar) !== -1:
        count++;
        break;
    }
  }

  return count;
}

document.write(
  countSuccessiveVowels(
    "Please read this application and give me gratutity such occurances are ea, ea , ui ."
  )
);

// q8

function kmtoMeter(km) {
  return km * 1000;
}

function kmtoInch(km) {
  return km * 39370.1;
}
function kmtoFeet(km) {
  return km * 3280.84;
}
function kmtoCentemeter(km) {
  return km * 100000;
}
var distacne = 5;

document.write(" Distance in meter : " + kmtoMeter(distacne) + "<br>");
document.write(" Distance in meter : " + kmtoInch(distacne) + "<br>");
document.write(" Distance in meter : " + kmtoFeet(distacne) + "<br>");
document.write(" Distance in meter : " + kmtoCentemeter(distacne) + "<br>");

// q9

function overTime(hours) {
  var overTimeRate = 12.0;
  var overtimeHours = hours - 40;

  if (overtimeHours > 0) {
    return overtimeHours * overTimeRate;
  } else {
    return 0;
  }
}

var hours = 41;
document.write("Over Times Pay : " + overTime(hours));

// q10

function currencyNotes(amount) {
  var hundredNotes = Math.floor(amount / 100);
  amount = amount % 100;

  var fiftyNotes = Math.floor(amount / 50);
  amount = amount % 50;

  var tenNotes = Math.floor(amount / 10);

  document.write(
    hundredNotes +
      " hundred notes, " +
      fiftyNotes +
      " fifty notes, " +
      tenNotes +
      " ten notes."
  );
}

var amount = +prompt("Enter your money");
currencyNotes(amount);

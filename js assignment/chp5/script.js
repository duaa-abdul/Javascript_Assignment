// q1
var num1=2;
 var num2=3;
document.write("sum of num1 and num2 is  ", num1 + num2);

// q:2
var num1=2;
 var num2=3;
document.write("sum of num1 and num2 is  ", num1 - num2);

var num1=2;
 var num2=3;
document.write("sum of num1 and num2 is  ", num1 * num2);

var num1=2;
 var num2=3;
document.write("sum of num1 and num2 is  ", num1 % num2);

var num1=2;
 var num2=3;
document.write("sum of num1 and num2 is  ", num1 / num2);

// q:4
var ticket=600;
document.write("Total Cost Of 5 Movie Ticket Is " ,ticket*5 +" PKR")

// q:5
// var table = 2;
// document.write(
//   "2 X 1 = " +
//     table * 1 +
//     " </br> " +
//     "2 X 2 = " +
//     table * 2 +
//     " </br> " +
//     "2 X 3 = " +
//     table * 3 +
//     " </br> " +
//     "2 X 4 = " +
//     table * 4 +
//     " </br> " +
//     "2 X 5 = " +
//     table * 5 +
//     " </br> " +
//     "2 X 6= " +
//     table * 6 +
//     " </br> " +
//     "2 X 7 = " +
//     table * 7 +
//     " </br> " +
//     "2 X 8 = " +
//     table * 8 +
//     " </br> " +
//     "2 X 1 = " +
//     table * 1 +
//     " </br> " +
//     "2 X 10 = " +
//     table * 10 +
//     " </br> "
// );

// q6
var celsius = 30;
var fahrenheitFromCelsius = (celsius * 9/5) + 32;
document.write(`${celsius}°C is ${fahrenheitFromCelsius}°F</br>`);
var fahrenheit = 86;
var celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;
document.write(`${fahrenheit}°F is ${celsiusFromFahrenheit.toFixed(2)}°C</br></br>`);

// q:7
document.write("<h1>Shopping Cart</h1>");

var item1 = 200;
var item2 = 300;
var qunatity1 = 2;
var qunatity2 = 4;
var charges = 150;
var total = 1200;

document.write(
  "Price of itme 1 is ",
  item1 +
    "</br>" +
    "Quantity of item 1 is " +
    qunatity1 +
    "</br>" +
    "Price of item 2 is ",
  item2 +
    "</br>" +
    "Quantity of item 1 is " +
    qunatity2 +
    "</br>" +
    "</br>" +
    "Total cost of your oeder is " +
    total
);

// q:8
document.write("<h1>Mark Sheet</h1>");
var Total=960;
var obtained=700;
var percentage=70.98;

document.write("Total Marks " + Total +"</br>"+ "Marks obtained " + obtained +"</br>"+ "Percentage " + percentage +"%")

// q9
document.write("<h2>Currency In PKR!</h2> </br>");
var USD = 10;
var Saudia = 25;
var PKR = ((USD * 108.20) + (Saudia * 28));
document.write("Total Currency in PKR : " + PKR + "</br>");

// q10
var a = 10;
var final = (((a + 5) * 10) / 2);
document.write(final);

// q:11
document.write("<h1>Age Calculator</h1>");

var year =2024;
var birth= 2003;
var age= 21;

document.write("Current Year" + year + "</br>" + "Birth Year " + birth + "</br>" +"Your Age "+ age)

// q:12

document.write("<h1>The Goemetrize</h1>");

var radius =20;
var round= 125.54343;
var area= 1256.8;

document.write("Radius of a Circle" + radius + "</br>" + "The Circumferences is: " + round + "</br>" +"The area is: "+ area)
// q:13

document.write("<h2>The Lifetime Supply Calculator</h2> </br>")
var chips = prompt("Enter Your Favourite Snacks");
var age = +prompt("Enter Your Age");
var este = +prompt("Enter Your Estimated Age");
var day = +prompt("Total Amount of Snacks per day ?");
var total = ((este - age) * day);
document.write("Favourite Snacks : " + " " + chips + "</br>");
document.write("Current Age : " + " " + age + "</br>");
document.write("Estimated Maximum Age : " + " " + esst + "</br>");
document.write("Amount of Snacks Per Day : " + " " + day + "</br>");
document.write("You will need" + " " + total + " " +  "to last you until the ripe old age of" + " " + esst);
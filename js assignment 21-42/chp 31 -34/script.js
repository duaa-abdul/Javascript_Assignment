// q1
var currentDate = new Date();
console.log(currentDate);

// q2
var monthArr=["January","Febuary","March","April","May","june","July","Augest","September","Octuber","November","December"];
var month= new Date();
var words= month.getMonth();
var monthof=monthArr[words];
console.log("Current Month : " + monthof);

// q3

var today = new Date();
var dayIndex = today.getDay(); 
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 

var dayAbbreviation = days[dayIndex]; 
alert(dayAbbreviation);


// q4

var newDay= new Date();
var date= newDay.getDay();

if(date === 0 || date === 6){
document.write("It's a fun day" )
}

// q5

var today = new Date();
var dayOfMonth = today.getDate();

if (dayOfMonth < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}

// q6
var currentDate = new Date();
var millisecondsSince1970 = currentDate.getTime();
var minutesSince1970 = millisecondsSince1970 / (1000 * 60);

alert("Current Date: " + currentDate);
alert("Elapsed milliseconds since January 1, 1970: " + millisecondsSince1970);
alert("Elapsed minutes since January 1, 1970: " + minutesSince1970);

// q7

var currentTime = new Date();
var hours = currentTime.getHours();

if (hours < 12) {
    alert("Its AM");
} else {
    alert("Its PM");
}

// q8

var laterDate = new Date("December 31, 2020 00:00:00");
alert("Later date: " + laterDate);

q9
var ramadanDate = new Date("23 march 2023");
var currentDate = new Date();
var timeDifference = currentDate - ramadanDate;
var daysSinceRamadan = timeDifference / (1000 * 60 * 60 * 24);

alert(Math.floor(daysSinceRamadan) + " days have passed since 1st Ramadan, 2023");

// q10

var referenceDate = new Date("Oct 19 , 2024");
var startDate = new Date("Jan 1 ,2024");
var timeDifference = (referenceDate - startDate) / 1000;
document.write(
  "On reference date " +
    referenceDate +
    "," +
    Math.floor(timeDifference) +
    " seconds had passed since the beginning of 2024"
);


// q11

var currentDate= new Date();
document.write("Current Date" + currentDate + "</br>");

var oneHour=new Date(currentDate);
oneHour.setHours(currentDate.getHours()-1);
document.write("1 houe ago , it was" +  oneHour);

// q12

var date= new Date();
alert(date);

var hunderedYear=new Date(date);
hunderedYear.setFullYear(date.getFullYear()-100);
alert("Hundred year it was " + hunderedYear);

// q13


var age = prompt("Enter your age");
var currentYear= new Date().getFullYear();
var birth= currentYear - age;
document.write("Your age is : " + age + "</br>");
document.write("Your birth year is:" + birth);


// q 14

var customerName = "John Doe";
var currentMonth = new Date().toLocaleString('default', { month: 'long' });
var numberOfUnit = 410;
var chargesPerUnit = 16;
var netAmountPayable = numberOfUnit * chargesPerUnit;
var latePaymentSurcharge = 350;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

netAmountPayable = netAmountPayable.toFixed(2);
grossAmountPayable = grossAmountPayable.toFixed(2); 

document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br>");
document.write("Number of Units: " + numberOfUnit + "<br>");
document.write("Charges per Unit: " + chargesPerUnit + "<br><br>");
document.write("Net Amount Payable (within Due Date): " + netAmountPayable + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable + "<br>");
// q1

var number=3.45214;
document.write("number : ", number +"</br>");

var round= Math.round(number);
document.write("Round of value : ", round +"</br>");

var floor= Math.floor(number);
document.write("floor  value : ", floor +"</br>");

var ceil= Math.ceil(number);
document.write("ceil value : ", ceil +"</br>");

// q2


var number= -2.673;
document.write("number : ", number +"</br>");

var round= Math.round(number);
document.write("Round of value : ", round +"</br>");

var floor= Math.floor(number);
document.write("floor  value : ", floor +"</br>");

var ceil= Math.ceil(number);
document.write("ceil value : ", ceil +"</br>");

// q3
var  value= -4;
// var absolute= Math.abs(value);
// document.write("The sabsolute value of -4 is " ,absolute);

// q4

var diceValue = Math.floor(Math.random() * 6) + 1;

document.write("Random dice value: " + diceValue);


// q5

var randomNumber = Math.random();
var coinValue;

if (randomNumber < 0.5) {
    coinValue = "Heads";
    document.write("Random coin value: " + coinValue +"</br>");
} else {
    coinValue = "Tails";
    document.write("Random coin value: " + coinValue + "</br>");
}

document.write("Coin Toss Result:", coinValue);

// q6

var randomNumber=Math.floor(Math.random()*100);
document.write("Random Number between : " , randomNumber );

// q7

var userInput = prompt("Enter your weight:");
var weight = parseFloat(userInput);

document.write("Your weight is: " + weight + " kgs");
console.log("User's weight:", weight + " kgs");

// q8

var randomNumber= 4;
var input=+prompt("Enter you number between 1 to 10:")

if ( randomNumber === input ){
alert("Congratulation!")
}
else{
    alert("Try again")
}
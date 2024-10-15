// q1
var studentName=[];

// q2
 var studentName=["Shifa", "Hani","Fatima"]
document.write(studentName)
// q3
 var number=[1,2,3,4,5,6.33];
 document.write("</br>"+number);

// q5
 var boolean=["true" ,"false"];
 document.write("</br>"+boolean)

// q6
 var Array=["Basit","Aimal",13.20,"true"]
 console.log(Array);

//  q7
document.write("<h1>Qualification</h1>");

var edu=["1) SSC"," 2)HSC","3)PHD","4)Master"];

for (var i=0; i<=edu.length-1;i++){
document.write(edu[i]+"</br>")
}

// q8
var studentNames = ["Emaan", "Laiba", "Laraib"];
var studentScores = [320, 230, 480];
var totalMarks = 500;

// Loop through each student to display score and percentage
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    document.write( "</br>"+"Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%") ;
}

// q9

// Initialize array with color names
var colors = ["Red", "Green", "Blue"];
document.write("Initial array: ", colors +"</br>");

// a.
var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBeginning);
document.write("Array after adding color to the beginning: ", colors +"</br>");

// // b. 
var  colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);
document.write("Array after adding color to the end: ", colors +"</br>");

// // c.
colors.unshift("Yellow", "Purple");
document.write("Array after adding two colors to the beginning: ", colors +"</br>");

// // d. 
colors.shift();
document.write("Array after deleting the first color: ", colors);

// // e.
colors.pop();
document.write("Array after deleting the last color: ", colors);

// f. 
let indexToAdd = parseInt(prompt("Enter the index where you want to add a color:"));
let colorToAddAtIndex = prompt("Enter the color to add at that index:");
colors.splice(indexToAdd, 0, colorToAddAtIndex);
document.write("Array after adding color at index " + indexToAdd + ": ", colors);

// g.
let indexToDelete = parseInt(prompt("Enter the index from which you want to delete colors:"));
let howManyToDelete = parseInt(prompt("Enter how many colors you want to delete:"));
colors.splice(indexToDelete, howManyToDelete);
document.write("Array after deleting " + howManyToDelete + " color(s) from index " + indexToDelete + ": ", colors);


// q10
var studentNum=[200,340,180,290];
document.write("score of student :"+ " " +studentNum+" </br>");
document.write("Ordered score of student :" +" "+ studentNum.sort());

// / q11
var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
var selectedCities = cities.slice(0, 3);
document.write("Cities List: " + cities.join(', ')+"</br>");
document.write("Selected Cities: " + selectedCities.join(', '));


// q12
document.write("<h1>Array</h1>")

var str=["This "," is "," my "," book "]; 

document.write( str + "</br>");

document.write("<h1>String</h1>")

var str=["This "," is "," my "," book "]; 

document.write(str.join(""));

// q13
let array = [];

array.push("Keyboard");
array.push("Mouse");
array.push("Peinter");
array.push("Monitor");
document.write(array+ "</br>")
for (var i=0; i<=array.length-1;i++) {
document.write("Out"+  "</br>"+array[i]+"</br>");
}
document.write(array+ "</br>")
// // q14
let arr = [];;

arr.push("Keyboard");
arr.push("Mouse");
arr.push("Peinter");
arr.push("Monitor");

for (let i = arr.length - 1; i >= 0; i--) {
document.write("Out"+  "</br>"+arr[i]+"</br>");
}


// q15

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Haier"];
document.write("<h2>Select Phone Manufacture:</h2>");
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");

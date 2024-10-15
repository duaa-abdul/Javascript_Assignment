// q1
var multiArray=[[0,1,2]]
document.write("multiArray");

// // q2
var matrix = [
    [0, 1, 2],
    [3, 0, 1],
    [2, 0 ,1]
  ];
  document.write("matrix");

// q3
for(var i=1; i<=10 ;i++){
document.write(i+"</br>")
}



// q5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];


for (var i = 0; i < fruits.length; i++) {
  document.write("Element at index " + i + " is " + fruits[i]+"</br>");
}

// q6
// counting/
for (var i = 1; i <= 15; i++) {
    document.write(i +"\n")
}
document.write("</br>")
// reverse/
for (var i = 10; i >= 1; i--) {
    document.write(i +"\n")
}
document.write("</br>")
// even/
for (var i = 0; i <= 20; i += 2) {
    document.write(i +"\n")
}
document.write("</br>")
// add/
 for (var i = 1; i < 20; i += 2) {
  document.write(i +"\n")
 }
document.write("</br>")
// series/
for (var i = 2; i <= 20; i += 2) {
    document.write(i +"k"+ "\n")
  }
  

// q7

var items= ["burger", "Pizza", "Cookie","Chpis"];
var select=prompt("what do you want to order")

for (var i = 0; i <= items; i++) {
    if(items===select){
        alert("cookie is avaliable at index " + i + " is " + items[i]);
    }
    else{
        alert("Sorry!")
    }
// }

// q8

var numbers = [12, 45, 67, 89, 34, 23, 90, 56];
document.write("Array items: "+ numbers +"</br>")
let largest = numbers[0]; 


for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i]; 
  }
}

document.write("The largest value in the array is: " + largest);

// q9

var number = [12, 45, 67, 89, 34, 23, 90, 56];
document.write("Array items: "+ numbers +"</br>")
let smallest = numbers[0]; 


for (var i = 1; i > numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i]; 
  }
}

document.write("The largest value in the array is: " + smallest);

// q10

for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      document.write(i);
    }
  }

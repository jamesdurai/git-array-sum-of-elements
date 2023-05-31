var numElements = prompt("Input the number of elements to be stored in the array:");
var array = [];

for (var i = 0; i < numElements; i++) {
  var value = parseInt(prompt("Input element - " + i + " :"));
  array.push(value);
}

var sum = 0;
for (var j = 0; j < array.length; j++) {
  sum += array[j];
}

document.write("Sum of all elements stored in the array is: " + sum);
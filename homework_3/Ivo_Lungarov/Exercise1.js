
/*
Homework 3 - JavaScript
Exercise - 1
Ivelin Lungarov

Write a script that allocates array of 20 integers and initializes
 each element by its index multiplied by 5. Print the obtained 
 array on the console.

*/

"use strict"


var arr = new Array(20);

for (var i = 0; i < arr.length; i++) {
	arr[i] = (i + 1) * 5;
	console.log(arr[i]);
}


/*
var numbers = [
				0, 1, 2, 3, 4, 
				5, 6, 7, 8, 9, 
				10, 11, 12, 13, 
				14, 15, 16, 17, 
				18, 19];

var biggerNumbers = numbers.map(function(multiplier) {
	return multiplier * 5;
});

console.log(biggerNumbers);

*/


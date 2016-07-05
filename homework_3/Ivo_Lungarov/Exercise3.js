
/*
Homework 3 - JavaScript
Exercise - 3
Ivelin Lungarov

Write a script that finds the maximal sequence of equal 
elements in an array.
Example: {2, 1, 1, 2, 3, 3, 2, 2, 2, 1}  {2, 2, 2}.


*/

"use strict"


var arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];

for (var i = 0; i < arr.length; i++) {
	if ((arr[i] == arr[i + 1]) && (arr[i] == arr[i + 2])) {
		console.log(arr[i], arr[i + 1], arr[i + 2]);
	}
}



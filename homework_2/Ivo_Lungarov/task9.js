
/*
Homework 2 - JavaScript
Task - 9
Ivelin Lungarov

Започвайки от 3, да се изведат на екрана първите N числа 
които се делят на 3. Числата да са разделени със запетая. 
Въведете N: 
22 
3,6,9,12,15,18,21 

*/

"use strict"

var n = prompt('Enter an amount');
var a = 3;
var result = ','


while (a <= n) {
	if (a % 3 == 0) {
		console.log(a + result);
	}
	a++;
	
}

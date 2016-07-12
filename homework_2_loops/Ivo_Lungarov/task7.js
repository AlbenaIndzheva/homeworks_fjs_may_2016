
/*
Homework 2 - JavaScript
Task - 7
Ivelin Lungarov

Да се изведат на екрана всички числа от 1 до N, 
които се делят на 3 и 7 едновременно.

*/

"use strict"

		
var N = prompt('Enter an amount');
var a = 1;

for (var a = 1; a <= N; a++) {
	if ((a % 3 !== 0) || (a % 7 !== 0)) {
		console.log(a);
	}
}
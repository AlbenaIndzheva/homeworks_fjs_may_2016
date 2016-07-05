
/*
Homework 4 - JavaScript
Exercise - 2
Ivo Lungarov

*/

"use strict"


function reverseNumber(num) {
	var arr = num.toString().split('');
	var reversed = arr.reverse();
	num = reversed.join('')
	parseInt(num);
	return num;
}

console.log(reverseNumber(1234567));
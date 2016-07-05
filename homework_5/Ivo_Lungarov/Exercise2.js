
/*
Homework 5 - JavaScript
Exercise - 2
Ivo Lungarov

*/

"use strict"


function bracketsChek(number) {
	var open = number.match(/\(/g);
	var close = number.match(/\)/g);

	return open.length === close.length;
}

console.log(bracketsChek('((8+5)+(35*4))'));

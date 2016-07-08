
/*
Homework 4 - JavaScript
Exercise - 1
Ivo Lungarov

*/

"use strict"



function lastDigit(num) {
	var a = num % 10;
	switch (a) {
		case 0: return 'zero'; break;
		case 1: return 'one'; break;
		case 2: return 'two'; break;
		case 3: return 'three'; break;
		case 4: return 'four'; break;
		case 5: return 'five'; break;
		case 6: return 'six'; break;
		case 7: return 'seven'; break;
		case 8: return 'eight'; break;
		case 9: return 'nine'; break;
		default: console.log('error'); break;
	}
} 

console.log(lastDigit(481));
console.log(lastDigit(5869));
console.log(lastDigit(8327489372));
"use strict"
/*
 * Да се изведат на екрана всички числа от 1 до N,
 * които се делят на 3 и 7 едновременно
 */

var number = prompt('Въведете число:');
number = parseInt(number);

for (var i = 1; i <= number; i++) {
	if ((i % 3 == 0) && (i % 7 == 0)) {
		console.log(i);
	}	
}
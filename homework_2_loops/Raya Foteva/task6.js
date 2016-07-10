"use strict"
/*
 * Да се въведе число от потребителя и да се изведе сбора на всички числа между
 * 1 и въведеното число. 
 * Въдете число: 
 * 7 
 * Резултата е 28 
 */

var number = prompt('Въведете число:');
number = parseInt(number);
var sum = 0;

for (var i = 1; i <= number; i++) {
	sum += i;
}

document.write(sum);
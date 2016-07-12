
/*
Homework 2 - JavaScript
Task - 6
Ivelin Lungarov

Да се въведе число от потребителя и да се изведе сбора на всички числа между 1 и въведеното число. 
Въдете число: 
7 
Резултата е 28 


*/

"use strict"

		
var n = prompt('Enter an amount');
var number = 1;
var sum = 0;

while (number <= n) {
	sum += number;
	number++;
}

console.log(sum);
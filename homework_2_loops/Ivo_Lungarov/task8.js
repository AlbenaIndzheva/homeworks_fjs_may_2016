
/*
Homework 2 - JavaScript
Task - 8
Ivelin Lungarov

Да се въведат N на брой числа 
и да се намерят най-малкото и най-голямото измежду тях.

*/

"use strict"

		
var N = [5, 18, 29, 45, 91, 180,];
var max = Math.max(...N);
var min = Math.min(...N);

console.log('Max value is' + ' ' + max, '\n' + 'Min value is' + ' ' + min);
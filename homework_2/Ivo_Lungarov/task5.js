
/*
Homework 2 - JavaScript
Task - 5
Ivelin Lungarov

Да се въведат от потребителя 2 числа. И да се изведат на екрана всички числа намиращи се между тях. 
Въведете първото число: 
12 
Въведете второто число: 
15 
12 13 14 15 

*/

		
var firstNumber = prompt('Enter an amount for firstNumber');
var secondNumber = prompt('Enter an amount for secondNumber');

while ((firstNumber !== secondNumber) && (firstNumber <= secondNumber)) {
	console.log(firstNumber);
	firstNumber++;
}
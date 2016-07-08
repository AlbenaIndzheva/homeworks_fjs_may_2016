"use strict"

/* Вера Манова - Задача 1: 
Да се изведат съобщения към потребителя и да се прочетат две числа от клавиатурата A и B (може да са с плаваща запетая). 
После да се прочете трето число C и да се провери дали то е между A и B. Да се изведе подходящо съобщение
 в конзолата за това дали C е между A и B. 

Пример: 
Въведете А: 
13.2 
Въведете В: 
29.5 
Въведете С: 
22.1 
Числото 22.1 е между 13.2 и 29.5 

*/

var firstNum = parseInt(prompt("Enter a number"));
var secondNum = parseInt(prompt("Enter a number"));
var thirdNum = parseInt(prompt("Enter a number"));

var a = firstNum;
var b = secondNum;
var c = thirdNum;

if(c<b && c>a){
	alert("The number "+ c + " is between " + a + " and " + b);
} else if(c<a && c>b) {
	alert("The number "+ c + " is between " + a + " and " + b);
}else {
	alert("The number " + c + " is not between " + a + "  and " + b);
}
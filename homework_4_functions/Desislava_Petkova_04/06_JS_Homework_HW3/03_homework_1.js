"use strict";
/* Ex.1
 * Да се изведат съобщения към потребителя и да се прочетат две числа от клавиатурата a и b (може да са с плаваща запетая).
 * После да се прочете трето число c и да се провери дали то е между a и b. 
 * Да се изведе подходящо съобщение в конзолата за това дали c е между a и b
 */
var a = prompt('Въведете A: ');
var b = prompt('Въведете B: ');
var c = prompt('Въведете C: ');
if ((a < b && c > a && c < b) || (a > b && c < a && c > b)){
	alert('Числото ' + c + ' е между ' + a + ' и ' + b);
} else {
	alert('Числото ' + c + ' не е между ' + a + ' и ' + b);
}
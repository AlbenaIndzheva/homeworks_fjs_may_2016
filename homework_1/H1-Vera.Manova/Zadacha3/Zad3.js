"use strict"

/* Вера Манова - Задача 3: 
Да се изведат съобщения към потребителя и да се прочетат две числа от клавиатурата A и B след което 
разменете стойността им. Разпечатайте новите стойности в конзолата.
*/

var firstNum = parseInt(prompt("Enter a number"));
var secondNum = parseInt(prompt("Enter a number"));
var c = firstNum;
firstNum = secondNum;
secondNum = c;
console.log(firstNum, secondNum);

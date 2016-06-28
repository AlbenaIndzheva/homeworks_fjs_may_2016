"use strict"

/* Вера Манова - Задача 4: 
Да се изведат съобщения към потребителя и да се прочетат две различни числа от клавиатурата A и B, разпечатайте в нарастващ ред.
*/

var firstNum = parseInt(prompt("Enter a number"));
var secondNum = parseInt(prompt("Enter a number"));

if(firstNum>secondNum){
	console.log(secondNum, firstNum);
}else{
	console.log(firstNum,secondNum);
}
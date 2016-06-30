"use strict"

/* Вера Манова Задача 5: 
Да се изведат съобщения към потребителя и да се прочетат три различни числа, разпечатайте в конзолата в низходящ ред. 
 */

 var firstNum = parseInt(prompt("Enter a number:"));
 var secondNum = parseInt(prompt("Enter a number:"));
 var thirdNum = parseInt(prompt("Enter a number:"));

if(firstNum>secondNum && firstNum>thirdNum && secondNum>thirdNum){ //hubavo e da ima >= ili <= zashtoto moje dase vuvedat ednakvi chisla 
	console.log(firstNum, secondNum, thirdNum);
}else if(secondNum>firstNum && secondNum>thirdNum && firstNum>thirdNum){
	console.log(secondNum, firstNum, thirdNum);
}else if(thirdNum>firstNum && thirdNum>secondNum && firstNum>secondNum){
	console.log(thirdNum, firstNum, secondNum);
}else if(firstNum>secondNum && firstNum>thirdNum && secondNum<thirdNum){
	console.log(firstNum, thirdNum, secondNum);
}else if(secondNum>firstNum && secondNum>thirdNum && firstNum<thirdNum){
	console.log(secondNum, thirdNum, firstNum);
}else if(thirdNum>firstNum && thirdNum>secondNum && firstNum<secondNum){
	console.log(thirdNum, secondNum, firstNum);
} 
// algoritmi za sortirane .. metoda Sort//no e metod v masivite, kojto se sravnqva leksikografski kato chuislo ili string
// orderBy ili Conver
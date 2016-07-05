
"use strict"


/* Вера Манова    Задача 6: Да се въведе число от потребителя и да се изведе сбора на всички числа между 1 и въведеното число. 
Въдете число: 
7 
Резултата е 28 
. */ 

var num = parseInt(prompt("Enter a number: ")); 

for(var i = 1; i<num ; i++){
	var c = ((num-1)+1) * (1 + num) / 2;
	console.log(c);
}
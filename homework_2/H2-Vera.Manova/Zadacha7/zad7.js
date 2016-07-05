
"use strict"


/* Вера Манова    Задача 7: Да се изведат на екрана всички числа от 1 до N, които се делят на 3 и 7 едновременно. */ 
 
var num = parseInt(prompt("Enter a number: "));

for(var i = 1; i < num; i++){
	if(i%3 ==0 , i%7 == 0){

		console.log(i);
	}
}


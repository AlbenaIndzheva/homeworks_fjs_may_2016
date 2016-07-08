
/*
Lecture 3 
Homework - Task 6
Ivelin Lungarov

Въведете три числа от клавиатурата а1, а2 и а3. 
Разменете стойностите им така, че а1 да има стойността на а2, 
а2 да има стойността на а3, а а3 да има старата стойност на а1. 
*/
		

var a1 = prompt('Enter a number for a1');
var a2 = prompt('Enter a number for a2');
var a3 = prompt('Enter a number for a3');


console.log(a1 = [a2, a2 = a1][0]);
console.log(a2 = [a3, a3 = a2][0]);
console.log(a3 = [a1, a1 = a3][0]);



//Не става да изкарам старата стойност на a1. 
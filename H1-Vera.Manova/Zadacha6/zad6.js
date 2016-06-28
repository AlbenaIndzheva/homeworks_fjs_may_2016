"use strict"

/* Вера Манова Задача 6: 
Въведете три числа от клавиатурата а1, а2 и а3. Разменете стойностите им така, че а1 да има стойността на а2, а2 да има 
стойността на а3, а а3 да има старата стойност на а1. 
*/
 var a1 = parseInt(prompt("Enter a number:"));
 var a2 = parseInt(prompt("Enter a number:"));
 var a3 = parseInt(prompt("Enter a number:"));

var one = a3;
var two = a1;

a1 = a2;
a2 = one;
a3=two;

console.log(a1, a2, a3);



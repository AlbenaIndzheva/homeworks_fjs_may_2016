
"use strict"


/* Вера Манова    Задача 8: Да се въведат N на брой числа и да се намерят най-малкото и най-голямото измежду тях. */ 



var num1 = parseInt(prompt(" Enter a number :"));
var num2 = parseInt(prompt(" Enter a number :"));
var num3 = parseInt(prompt(" Enter a number :"));
var num4 = parseInt(prompt(" Enter a number :"));

var max = Math.max(num1, num2, num3, num4);
var min = Math.min(num1, num2, num3, num4);
console.log(min);
console.log(max);
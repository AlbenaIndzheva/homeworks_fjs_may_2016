"use strict"

// Вера Манова
// Да се изведат съобщения към потребителя и да се прочетат две целочислени числа от клавиатурата A и B. 
// Запишете тяхната сума, разлика, произведение и остатък от деление в отделни променливи и разпечатайте 
// тези резултати в конзолата. Опитайте същото с числа с плаваща запетая. 

var a = parseInt(prompt("Enter a number:"));
var b = parseInt(prompt("Enter a number:"));

var num = a;
var secondNum = b;

var sum = num + secondNum;
var diff = num - secondNum;
var mult = num*secondNum;
var odd = num % secondNum;
console.log(sum, diff, mult, odd);






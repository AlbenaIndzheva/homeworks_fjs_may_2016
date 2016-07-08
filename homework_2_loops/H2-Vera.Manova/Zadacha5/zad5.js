
"use strict"


/* Вера Манова    Задача 5: Да се въведат от потребителя 2 числа. И да се изведат на екрана всички числа намиращи се между тях. 
Въведете първото число: 
12 
Въведете второто число: 
15 
12 13 14 15 
*/ 

var numFirst = parseInt(prompt("Enter a number: "));
var numSecond = parseInt(prompt("Enter second number: "));

 for (var i = numFirst; i < numSecond; i++) {
            console.log(i); 
        }

  for (var j = numSecond; j <numFirst; j++) {
            console.log(j); 
        }
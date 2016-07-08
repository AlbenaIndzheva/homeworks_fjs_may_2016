
"use strict"


/* Вера Манова    

Задача 10: Да се прочетат 2 числа от клавиатурата А и В. Да се изведат всички числа от А до В на степен 2(разделени с запетая).
 Ако някое число е кратно на 3, да се изведе съобщение че числото се пропуска „skip 3“. Ако сумата от всички изведени числа 
 (без пропуснатите) стане по-голяма от 200, да се прекрати извеждането. 
Въдете А: 
1 
Въведете B 
107 
1, 4, skip 3, 16, 25, skip 6, 49, 64, skip 9, 100 
 */ 
var numFirst = parseInt(prompt("Enter a number: "));
var numSecond = parseInt(prompt("Enter second number: "));
var c;

 for (var i = numFirst; i < numSecond; i++) {

 	if(i%3==0){	

 		console.log("skip 3");
 			
        }else {

        	c = i*i;
            console.log(c + ","); 
        }
  }

  for (var j = numSecond; j <numFirst; j++) {

  	if(j%3==0){	

 		console.log("skip 3");
 			
        }else {

        	c = j*j;
            console.log(c + ","); 
        }
           
   }
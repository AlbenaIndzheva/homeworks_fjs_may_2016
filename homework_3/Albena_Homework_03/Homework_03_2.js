/* Albena Indzheva
 * 
 * Задача 2: 
 * Дадени са текст и списък от думи, разделени със запетайка. 
 * Списъкът описва думи, които са нецензурни и не трябва да се съдържат в текста.
 * Напишете програма, която замества всички нецензурни думи от текста със звездички. 
 * Например ако имаме текста "Какъв хикс дириш тука бе менте?" 
 * и списък с нецензурни думички "менте, хикс", 
 * програмата трябва да го преработи така: "Какъв **** дириш тука бе *****?".  
 */
 
"use strict";
var text = "Какъв хикс дириш тука бе менте?";
var words = "менте, хикс";
var arrText = text.split(" ");
var arrWords = words.split(", ");
var signs = ['!', '.', '?', '.', ",", "-"];

for (var indexText in arrText) {
	for (var indexWord in arrWords) {
	 	if (arrText[indexText].indexOf(arrWords[indexWord]) != -1 ) {
	 		var x = arrText[indexText].split("");
	 		for (var index = 0; index < x.length; index++) {
    			if ( signs.indexOf(x[index]) == -1 ) {
    				x[index] = "*";
    			}
    		}	
	 		arrText[indexText] = x.join('');
	 	}
	 	
	}

}

console.log(arrText.join(" "));


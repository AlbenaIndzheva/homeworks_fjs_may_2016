/* Albena Indzheva
 * 
 * Задача 1:
 * Напишете програма, която обръща думите в дадено изречение в обратен ред. 
 * Например изречението "Брала мома къпини." трябва да се преобразува в "Къпини мома брала." 
 */

"use strict";
var sentence = "Брала мома къпини.";
var sign = sentence.charAt(sentence.length-1);
if (sign == "." || sign == "!" || sign == "?") {
	sentence = sentence.slice(0,-1); 
}
var reversed = sentence.split(" ").reverse().join(" ").toLowerCase();
var result = reversed.charAt(0).toUpperCase() + reversed.slice(1);

if (sign == "." || sign == "!" || sign == "?") {
	result = result+sign; 
}
 
console.log(result);


/* Albena Indzheva
 * 
 * Задача 1:
 * Напишете програма, която обръща думите в дадено изречение в обратен ред. 
 * Например изречението "Брала мома къпини." трябва да се преобразува в "Къпини мома брала." 
 */

"use strict";
function reverseString(str) {

	var arr = str.split(" ");
	var length = arr.length; 
	var reversed = new Array(length);

	// Initialize the reversed array
	for (var index = 0; index < length; index++) {
	    reversed[length - index - 1] = arr[index];
	}
	return reversed;
}

reverseString("Брала мома къпини");
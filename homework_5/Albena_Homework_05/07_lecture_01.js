/* Albena Indzheva
 * 
 * 1. Write a JavaScript function reverses string and returns it
 * Example: "sample" → "elpmas".
 */ 
"use strict";
function reverseString(str) {
	var result = "";
	for (var i = str.length - 1; i >= 0; i--) {
      result += str[i];
   }
   return result;
}

reverseString("sample");


  
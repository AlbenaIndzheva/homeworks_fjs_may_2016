
/*
Homework 5 - JavaScript
Exercise - 5
Ivo Lungarov

*/

"use strict"



function replaceWhiteSpace(str) {
	
	var strWhite = str.replace(/\s+/gi, '&nbsp'); 
	return strWhite;
}

console.log(replaceWhiteSpace('What is up with you?'));
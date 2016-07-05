
/*
Homework 4 - JavaScript
Exercise - 3
Ivo Lungarov

*/

"use strict"

var text ='Lorem Ipsum is Lorem lorem is not a lorem'

function findTheWord() {
	var regex = /\Lorem/ig;
	var result = text.match(regex);
	return result; 
}

console.log(findTheWord());
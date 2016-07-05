
/*
Homework 3 - JavaScript
Exercise - 2
Ivelin Lungarov

Write a script that compares two char arrays 
lexicographically (letter by letter).


*/

"use strict"


//var firstArr = ['Hello', 'what', 'is', 'your', 'name'];

//var secondArr = ['Ah', 'my', 'name', 'is', 'Spas',];


var word = prompt('Enter a word');
var word1 = prompt('Enter a word');
var word2 = prompt('Enter a word');

var firstArr = [word, word1, word2];

var word3 = prompt('Enter a word');
var word4 = prompt('Enter a word');
var word5 = prompt('Enter a word');


var secondArr = [word3, word4, word5];

for (var i = 0; i < firstArr.length; i++) {
	if (firstArr[i]>secondArr[i]) {
		console.log(firstArr[i] + ' ' + 'is after' + ' ' + secondArr[i] + ' ' + 'lexicographically');
		} else {
		console.log(firstArr[i] + ' ' + 'is before' + ' ' + secondArr[i] + ' ' + 'lexicographically');
		}
	}

	

	

/*
Homework 5 - JavaScript
Exercise - 3
Ivo Lungarov

*/

"use strict"

var yellowSubmarine = 'We are living in an yellow submarine. \
We don\'t have anything else. Inside the submarine is vary tight.\
So we are drinking all the day. We will move out of it in 5 days.'; 

var subStr = 'in';
var bigIn = 'In'

function findIn() {
	let counter = 0;
	for (let i = 0; i <= yellowSubmarine.length; i++) {
		if ((yellowSubmarine[i] + yellowSubmarine[i+1]) == subStr) {
			counter++;
		} else if ((yellowSubmarine[i] + yellowSubmarine[i+1]) == bigIn) {
			counter++;
		}
	}

	return counter; 
	}



console.log('The result is: ' + findIn());

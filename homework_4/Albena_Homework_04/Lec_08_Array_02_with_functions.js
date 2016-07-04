/* Albena Indzheva
 * 
 * Exercise 2: 
 * Write a script that compares two char arrays lexicographically (letter by letter).
 */

 "use strict";

function twoArraysComparison(arrOne, arrTwo) {
	var arrOneLength = arrOne.length;
	var arrTwoLength = arrTwo.length;
    var areArraysEqual = true; 
    if (arrOneLength == arrTwoLength) {
    	for (var i = 0; i < arrOneLength; i++) {
        	if (arrOne[i] !== arrTwo[i]) {
       	   	 	areArraysEqual = false;
       	    	break;
        	}
   	 	}
	} else {
        areArraysEqual = false;
    }

    console.log("Comparison result is " + areArraysEqual);
}

twoArraysComparison(["A", "B", "C"], ["A", "B", "D"]);
twoArraysComparison(["A", "B", "C"], ["A", "B", "C"]);



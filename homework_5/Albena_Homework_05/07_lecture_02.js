/* Albena Indzheva
 * 
 * Write a JavaScript function to check if in a given expression the
 * Wbrackets are put correctly.
 *  Example of correct expression: ((a+b)/5-d).
 *  Example of incorrect expression: )(a+b)).
 */ 
"use strict";
function checkBrackets(expression) {
	var brackets = 0;
	for (var i in expression) {
	    if (expression[i] == '(') {
	        brackets++;
	    }
	    if (expression[i] == ')') {
	        brackets--;
	    }
	    if (brackets < 0) {
	        return false;
	    }
	}
	if (brackets == 0) {
	    return true;
	} else return false;
}

var expression = ")(a+b))";
checkBrackets(expression);
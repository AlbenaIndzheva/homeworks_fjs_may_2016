"use strict"

/* Вера Манова  
Write a JavaScript function to check if in a given expression the brackets are put correctly.
Example of correct expression: ((a+b)/5-d).
Example of incorrect expression: )(a+b)).

*/


var someInput = prompt("Enter Expression: ");
var result = expr();
function expr(someexpr){

	var someexpr = "((a+b)/5-d)";
    if(someInput === someexpr){

    	console.log("Correct expression!");
    }else{
    	console.log("False!");
    }

};


console.log(result);
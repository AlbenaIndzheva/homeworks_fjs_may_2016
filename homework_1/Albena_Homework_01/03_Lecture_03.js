/* Student: Albena Indzheva
 *
 * Write a script that finds the biggest of three integers
 * using nested if statements.
 */

var maxNumber;
var a = 4;
var b = 0;
var c = -4;

if (a >= b) {
	maxNumber = a;
	if (c > a) {
		maxNumber = c;
	}
	
} else {
	maxNumber = b;
	if (c >= b) {
		maxNumber = c;
	} 
}

console.log("maxNumber  = "+ maxNumber);  


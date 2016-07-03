/* Student: Albena Indzheva
 *
 * Write a script that shows the sign (+ or -) of the product of three real numbers 
 * without calculating it. Use a sequence of if statements.
 */

var positiveSign = 0;
var a = 34.8;
var b = -1.89;
var c = 67;

if ((a == 0) || (b == 0) && (c == 0)) {
 	console.log("the product of three numbers is 0");
} else {

	if (a > 0) {
		positiveSign += 1;
	}

	if (b > 0) {
		positiveSign += 1;
	}

	if (c > 0) {
		positiveSign += 1;
	}

	if ((positiveSign == 1) || (positiveSign == 1)) {
		console.log("the product of three numbers is '+'");
	} else {
		console.log("the product of three numbers is '-'");
	}

}
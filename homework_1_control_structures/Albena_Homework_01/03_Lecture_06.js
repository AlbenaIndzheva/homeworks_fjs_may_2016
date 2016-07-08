/* Student: Albena Indzheva
 *
 * Write a script that enters the coefficients a, b and c of a quadratic equation
 *		a*x2 + b*x + c = 0
 *		and calculates and prints its real roots. Note that quadratic equations may have 0, 1 or 2 real roots
 */
 
var a = 1;
var b = 3; 
var c = -4;
var D = b*b - 4*a*c;

if (D < 0) {
	console.log("No real roots");
 } else if (D == 0) {
 		let root1 = -(b/(2*a));
        console.log("One real root = "  + root1);
 } else {
 		let root1 = (-b + Math.sqrt(D)) / (2*a);
 		let root2 = (-b - Math.sqrt(D)) / (2*a);
        console.log("root1 = " + root1 + " root2 = " + root2);
 } 
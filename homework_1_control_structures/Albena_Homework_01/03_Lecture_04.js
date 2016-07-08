/* Student: Albena Indzheva
 *
 * Sort 3 real values in descending order using nested if statements
 */

var position1, position2, position3;
var a = 5;
var b = 0;
var c = -4;
	
if (a >= b) {
	position1 = a;
	position2 = b;
	if (c > a) {
		position1 = c;
		position2 = a;
		position3 = b;
	} else if (b >= c) {
		position2 = b;
		position3 = c;

	} else  {
		position2 = c;
		position3 = b;
	}

} else {
	position1 = b;
	position2 = a;
	if (c > b) {
		position1 = c;
		position2 = b;
		position3 = a;
	} else if (a > c) {
		position2 = a;
		position3 = c;

	} else  {
		position2 = c;
		position3 = a;

	}
}

if ((position1 == position2) && (position3 == position2)) {
	console.log(position1 + " = " + position2 + " = " + position3 );  
} else if (position1 == position2) {
	console.log(position1 + " = " + position2 + " > " + position3 );  
} else if (position3 == position2) {
	console.log(position1 + " > " + position2 + " = " + position3 );  
} else {
	console.log(position1 + " > " + position2 + " > " + position3 );  
}
 



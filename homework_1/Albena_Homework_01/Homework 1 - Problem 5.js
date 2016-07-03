/* Student: Albena Indzheva
 *
 * Да се изведат съобщения към потребителя и да се прочетат три различни числа, 
 * разпечатайте в конзолата в низходящ ред. 
 */


var a = prompt("Въведете A:");
a = parseFloat(a);
var b = prompt("Въведете B:");
b = parseFloat(b);
var c = prompt("Въведете C:");
c = parseFloat(c);
var position1, position2, position3;

if (!Number.isNaN(a) && !Number.isNaN(b) && !Number.isNaN(c)) {
	if (a > b) {
		position1 = a;
		position2 = b;
		if (c >= a) {
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
 


} else {
 
 console.log("Не сте въвели 3 числа.");

}


 
	

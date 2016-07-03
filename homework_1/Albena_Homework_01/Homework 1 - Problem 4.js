/* Student: Albena Indzheva
 * 
 * Да се изведат съобщения към потребителя и да се прочетат две различни числа от клавиатурата A и B,
 * разпечатайте в нарастващ ред.
 */

var x = prompt("Въведете X:");
x = parseFloat(x);
var y = prompt("Въведете Y:");
y = parseFloat(y);


if (!Number.isNaN(x) && !Number.isNaN(y)) {

	if (x == y) {
		console.log("Двете числа са равни.");
	}
  
	if (x > y) {
		console.log(x + " > " + y);
	}

    if (y > x) {
		console.log(y + " > " + x);
	}


} else {
 
 console.log("Не сте въвели 2 числа.");

}
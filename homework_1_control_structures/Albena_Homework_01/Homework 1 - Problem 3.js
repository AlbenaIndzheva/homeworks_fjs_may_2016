/* Student: Albena Indzheva
 * 
 * Да се изведат съобщения към потребителя и да се прочетат две числа от клавиатурата A и B след което разменете стойността им.
 * Разпечатайте новите стойности в конзолата.
 */

var x = prompt("Въведете X:");
x = parseFloat(x);
var y = prompt("Въведете Y:");
y = parseFloat(y);


if (!Number.isNaN(x) && !Number.isNaN(y)) {

	let c = y;
	y = x;
	x = c;

	console.log("x = " + x); 
	console.log("y = " + y);     

} else {
 
 console.log("Не сте въвели 2 числа.");

}
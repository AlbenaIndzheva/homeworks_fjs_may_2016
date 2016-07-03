/* Student: Albena Indzheva
 *
 * Въведете три числа от клавиатурата а1, а2 и а3. 
 * Разменете стойностите им така, че а1 да има стойността на а2, а2 да има стойността на а3, а а3 да има старата стойност на а1. 
 */

var a1 = prompt("Въведете A1:");
a1 = parseFloat(a1);
var a2 = prompt ("Въведете A2:");
a2 = parseFloat(a2);
var a3 = prompt ("Въведете A3:");
a3 = parseFloat(a3);
var x = a1;

if (!Number.isNaN(a1) && !Number.isNaN(a2) && !Number.isNaN(a3)) {
	console.log("Въведените числа са: А1 = " + a1 + " А2 = " + a2 + " и А3 = " + a3);
	a1 = a2;
	a2 = a3;
	a3 = x;
	console.log("Разменените числа са: А1 = " + a1 + " А2 = " + a2 + " и А3 = " + a3);

console

} else {
 
 console.log("Не сте въвели 3 числа.");

}

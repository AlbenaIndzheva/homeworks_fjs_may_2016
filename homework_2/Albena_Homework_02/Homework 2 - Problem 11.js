/* Student: Albena Indzheva
 *
 * Въведете число от клавиатурата и определете дали е просто. 
 * Просто число е това което е по-голямо от 1 и се дели САМО на 1 и на себе си.
 * 
 */

var num = prompt("Въдете положително цяло число по-голямо от 1:");
num = parseInt(num); 

var divider = 2;
var maxDivider = Math.sqrt(num);
var prime = true;

while (prime && (divider <= maxDivider)) {
	if (num % divider == 0) {
            prime = false;
        }
    divider++;
}
           
if (prime == true) {
	console.log(num + " е просто число");
} else {
	console.log(num + " не е просто число");
}


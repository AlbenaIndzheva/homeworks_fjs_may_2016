/* Student: Albena Indzheva
 *
 * Започвайки от 3, да се изведат на екрана първите N числа които се делят на 3.
 * Числата да са разделени със запетая. 
 * 
 */

var N = prompt("Въдете число, по-голямо или равно на 1:");
N = parseInt(N);
var counter = 0;
var result = 3;
var number = 3;


for (var i = 2; i <= N; i++) {
	result = result + ", " + number*i;
}

console.log(result);


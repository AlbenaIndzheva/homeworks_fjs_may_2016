/* Student: Albena Indzheva
 *
 * Да се въведе число от потребителя и да се изведе сбора на всички числа между 1 и въведеното число. 
 * Въдете число: 
 * 7 
 * Резултата е 28 
 * 
 */


var number = prompt("Въдете число:");
number = parseInt(number);
var sum = 0;


if (number >= 1) {
	while (number >= 1) {
		sum = sum + number;
		number--; 
	}
} else {
	while (number <= 1) {
		sum = sum + number;
		number++; 
	}
}

console.log("sum = " + sum);

	


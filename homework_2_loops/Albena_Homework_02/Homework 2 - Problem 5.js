/* Student: Albena Indzheva
 *
 * Да се въведат от потребителя 2 числа. И да се изведат на екрана всички числа намиращи се между тях. 
 *  Въведете първото число: 
 *  12 
 *  Въведете второто число: 
 *  15 
 *  12 13 14 15 
 */


var firstNum = prompt("Въведете първото число:");
firstNum = parseInt(firstNum);
var secondNum = prompt("Въведете второто число: ");
secondNum = parseInt(secondNum);

if (firstNum < secondNum ) {
	for (; firstNum <= secondNum; firstNum++) {
	     console.log(firstNum);
	}
}

if (firstNum > secondNum ) {
	for (; secondNum <= firstNum; firstNum--) {
	     console.log(firstNum);
	}
}

if (firstNum == secondNum ) {
	console.log(firstNum);
}




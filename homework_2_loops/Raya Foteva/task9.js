"use strict"
/*
 * Започвайки от 3, да се изведат на екрана първите N числа които се делят на 3.
 * Числата да са разделени със запетая. 
 * Въведете N: 22
 * Резултат: 3,6,9,12,15,18,21 
 */

var N = prompt('Въведете число N:');
N = parseInt(N);

for (var i = 3; i <= N; i++) {
	if (i % 3 == 0) {
		document.write(i + ', ');
	}
}
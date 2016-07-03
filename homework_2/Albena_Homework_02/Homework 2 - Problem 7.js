/* Student: Albena Indzheva
 *
 * Да се изведат на екрана всички числа от 1 до N, които се делят на 3 и 7 едновременно.
 * 
 */


var N = prompt("Въдете число:");
N = parseInt(N);

for (let i = 1; i <= N; i++) {
	if ((i % 7 == 0) && (i % 3 == 0)) {
		console.log(i);

	}

}



/*
Lecture 3 
Homework - Task 5
Ivelin Lungarov

Да се изведат съобщения към потребителя и да се прочетат 
три различни числа, разпечатайте в конзолата в низходящ ред. 
*/
		

var a = 25;
var b = 11;
var c = 350;

window.alert('a =' + ' ' + a + ' ' + 'b =' + b + ' ' + 'c =' + c);

if (a < b && b < c ) {
	console.log(a, b, c);
} else {
	
}
	if(a < c && c < b) {
		console.log(a, c, b);
	} else {

	}
		if(b < a && a < c) {
			console.log(b, a, c);
		} else {

		}
			if(b < c && c < a) {
				console.log(b, c, a);
			} else {

			}
				if(c < a && a < b) {
					console.log(c, a, b);
				} else {

				}
					if(c < b && b < a) {
						console.log(c, b, a);
					} else {

					}



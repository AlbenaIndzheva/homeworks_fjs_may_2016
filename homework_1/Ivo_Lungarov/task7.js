
/*
Lecture 3 
Homework - Task 7
Ivelin Lungarov

Въведете три стойности от клавиатурата – час(целочислен тип), 
сума пари(число с плаваща запетая), дали съм здрав(булев тип). 
Съставете програма, която взема решения на базата на тези данни 
по следния начин: 
- ако съм болен няма да излизам 
- ако имам пари ще си купя лекарства 
- ако нямам – ще стоя вкъщи и ще пия чай 
- ако съм здрав 
- ако имам по-малко от 10 лв ще отида на кафе и т.н. 

*/
		

var hour = prompt('Въведете целочислена стойност за час');
var money = prompt('Въведете стойност за пари');
var health = prompt('Здрав ли си? (Type yes or no)');


if (health == 'no') {
	console.log('Няма да излизам,');
} else {

}

	if ((health == 'no') && (money >= 10)) {
		console.log('ще си купя лекарства');
	} else {

	}

	if ((health == 'no') && (money < 10)) {
		console.log('ще си пия чай вкъщи');
	} else {

	}

if ((health == 'yes') && (money < 10) && (hour < 18)) {
	console.log('Ще карам колело');
} else {

}
	if ((health == 'yes') && (money < 10) && (hour >= 18)) {
		console.log('Ще гледам Game of Theones');
	}

if ((health == 'yes') && (money >= 10) && (hour >= 18)) {
	console.log('Ще отида на кино');
} else {

}
	if ((health == 'yes') && (money > 10) && (hour < 18)) {
		console.log('Ще отида на басейн');
	}



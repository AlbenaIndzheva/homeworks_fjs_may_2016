"use strict"

/* Вера Манова 

Задача 2: Дадени са текст и списък от думи, разделени със запетайка. 
Списъкът описва думи, които са нецензурни и не трябва да се съдържат 
в текста. Напишете програма, която замества всички нецензурни думи от 
текста със звездички. Например ако имаме текста "Какъв хикс дириш тука бе менте?"
 и списък с нецензурни думички "менте, хикс", програмата трябва да го преработи така:
 "Какъв **** дириш тука бе *****?". 

 */


 var text = ["Какъв","хикс", "дириш","тука","бе","менте" ,"?"];
 var specialWords = ["менте", "хикс"];


 //Search a string:

_.includes('pebbles', 'eb');  // true (string contains eb)//  slagam go vyv var koqto da e true i pisha uslovie


// text.forEach(function(word){
// 	if(word === specialWords){

// 		var censored = "Какъв **** дириш тука бе **** ?";
// 		console.log(censored);
// 	}

// });
// [4, 12, 27, 14].forEach(function(number) {
//    console.log(number + " на квадрат е " + number * number);
// });
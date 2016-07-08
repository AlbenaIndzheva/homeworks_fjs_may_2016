"use strict"

/* Вера Манова 

Write a JavaScript function reverses string and returns it  

Example: "sample"  "elpmas".
 */

 var rev = reverse();

function reverse(s){

	var s = "sample";
	 return s.split('').reverse().join('');
};

 console.log(rev);
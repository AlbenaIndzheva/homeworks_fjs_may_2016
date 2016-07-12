"use strict"

/* Вера Манова 
Задача 1: Напишете програма, която обръща думите в дадено изречение в обратен ред. 
Например изречението "Брала мома къпини." трябва да се преобразува в "Къпини мома брала." 


da se probva s regular expression  == regulqrni izrazi 
*/

var a = prompt("Enter a word: ");
var b = prompt("Enter a word: ");
var c = prompt("Enter a word: ");
var d = prompt("Enter a word: ");

var sentence = [a, b, c, d];
sentence.reverse(); 

console.log(sentence); 

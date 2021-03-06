/*
 * Lecture 3 Homework
 * Exercise 1
 * Author: Stoil Kostadinow <s.k.kostadinov@gmail.com>
 */

"use strict";
// Prompt for number 1
var number1 = prompt( 'Please enter a Number 1 value in the field below!' );

// if it is not a number or
// if the box is empty or user clicks cancel,
// show another prompt with respective text
if ( isNaN( number1 ) ) {
    number1 = prompt( 'You can only enter a real number! Strings won\'t work' );
}else if ( ( number1 == '' ) || ( number1 == null ) ) {
    number1 = prompt( 'You can not leave the box empty! Please enter a number value' );
}else {
    console.log( 'Number 1 = ' + number1 );
}

// Prompt for number 2
var number2 = prompt( 'Please enter a Number 2 value in the field below!' );

// if it is not a number or
// if the box is empty or user clicks cancel,
// show another prompt with respective text
if ( isNaN( number2 ) ) {
    number2 = prompt( 'You can only enter a real number! Strings won\'t work' );
}else if ( ( number2 == '' ) || ( number2 == null ) ) {
    number2 = prompt( 'You can not leave the box empty! Please enter a number value' );
}else {
    console.log( 'Number 2 = ' + number2 );
}

// Prompt for number 3
var number3 = prompt( 'Please enter a Number 3 value in the field below!' );

// if it is not a number or
// if the box is empty or user clicks cancel,
// show another prompt with respective text
if ( isNaN( number3 ) ) {
    number3 = prompt( 'You can only enter a real number! Strings won\'t work' );
}else if ( ( number3 == '' ) || ( number3 == null ) ) {
    number3 = prompt( 'You can not leave the box empty! Please enter a number value' );
}else {
    console.log( 'Number 3 = ' + number3 );
}

// Check if number 3 is between number 1 and number 2
// or if is between number 2 and number 1
if ( number1 < number3 && number2 > number3 ) {
    console.log( number3 + ' falls between ' + number1 + ' and ' + number2 );
}else if ( number3 > number2 && number2 < number1 && number1 > number3 ) {
    console.log( number3 + ' falls between ' + number2 + ' and ' + number1 );
}else {
    console.log( number3 + '  is not between ' + number1 + ' and ' + number2 );
}
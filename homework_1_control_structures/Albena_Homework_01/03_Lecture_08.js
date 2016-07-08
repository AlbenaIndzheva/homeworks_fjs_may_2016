/* Student: Albena Indzheva
 *
 * Write a script that converts a number in the range [0...999] to a text corresponding to its English pronunciation. Examples:
 *	0 > 'Zero'
 *	273 > 'Two hundred seventy three'
 *	400 > 'Four hundred'
 *	501 > 'Five hundred and one'
 *	711 > 'Seven hundred and eleven'
*/

var number = 958;     
var hundreds = Math.floor(number / 100);
var tens = Math.floor((number - hundreds * 100) / 10);
var ones = number % 10;
var hundredsName = "";
var tensName = "";
var onesName = "";
var a;

switch (hundreds) {
    case 1: hundredsName = "One hundred "; break;
    case 2: hundredsName = "Two hundred "; break;
    case 3: hundredsName = "Three hundred "; break;
    case 4: hundredsName = "Four hundred "; break;
    case 5: hundredsName = "Five hundred "; break;
    case 6: hundredsName = "Six hundred "; break;
    case 7: hundredsName = "Seven hundred "; break;
    case 8: hundredsName = "Eight hundred "; break;
    case 9: hundredsName = "Nine hundred "; break;
    default: hundredsName = ''; break;
}

if (hundreds != 0 && (tens != 0 || (tens == 0 && ones != 0))) {
    a = "and ";
} else {
    a = "";
}

if (tens != 1) {
    switch (tens) {
        case 2: tensName = "twenty "; break;
        case 3: tensName = "thirty "; break;
        case 4: tensName = "fourty "; break;
        case 5: tensName = "fifty "; break;
        case 6: tensName = "sixty "; break;
        case 7: tensName = "seventy "; break;
        case 8: tensName = "eighty "; break;
        case 9: tensName = "ninety "; break;
        default: tensName = ''; break;
    }
    switch (ones) {
        case 1: onesName = "one"; break;
        case 2: onesName = "two"; break;
        case 3: onesName = "three"; break;
        case 4: onesName = "four"; break;
        case 5: onesName = "five"; break;
        case 6: onesName = "six"; break;
        case 7: onesName = "seven"; break;
        case 8: onesName = "eight"; break;
        case 9: onesName = "nine"; break;
        default: onesName = ''; break;
    }
}
else {
    switch (ones) {
        case 1: onesName = "eleven"; break;
        case 2: onesName = "twelve"; break;
        case 3: onesName = "thirteen"; break;
        case 4: onesName = "fourteen"; break;
        case 5: onesName = "fifteen"; break;
        case 6: onesName = "sixteen"; break;
        case 7: onesName = "seventeen"; break;
        case 8: onesName = "eighteen"; break;
        case 9: onesName = "nineteen"; break;
        default: onesName = "ten"; break;
    }
}

console.log("English pronunciation of " + number + " is: " + hundredsName + a + tensName + onesName );
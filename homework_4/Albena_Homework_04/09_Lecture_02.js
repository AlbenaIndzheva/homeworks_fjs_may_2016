
/* Albena Indzheva
 * 
 * Write a function that reverses the digits of given decimal number. Example: 256  652
 *  
 */

function reverseDigit(num) {
   var arr  = num.toString().split("");
   var reversed = arr.reverse()
   num = reversed.join("");
   parseInt(num);
   return num;
}

reverseDigit(123456);

/* Albena Indzheva
 * 
 * Write a function that counts how many
 * times given number appears in given array. 
 * Write a test function to check if the function is working correctly. 
 */

var arr = [10, 5, 8, 5, 456, 4];
var number = 5;
var i = 0;

function numberInArray(arr, number) {
   var counter = 0;
   for (i = 0; i < arr.length; i++) {
       if (arr[i] === number) {
           counter++;
       }
   }
   return counter;
}

numberInArray(arr, number);

function testFunc() {
        var test = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5];
        var i;
        for (i = 0; i < 10; i++)
        console.log('%s: %s times ', i, numberInArray(test, i))
}

testFunc();
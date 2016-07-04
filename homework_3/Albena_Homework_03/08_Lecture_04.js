/* Albena Indzheva
 * 
 * Exercise 4: 
 * Write a script that finds the maximal increasing sequence in an array.
 * Example: {3, 2, 3, 4, 2, 2, 4}  {2, 3, 4}.
 */

"use strict";

maxSequenceFinder([3, 2, 3, 4, 2, 2, 4]);

function maxSequenceFinder(arr) {
    var i;
    var maxLength = 1;
    var maxIndex = 0;
    var currentLength = 1;
     arr.reduce(function(a, b, i) {  //previousValue, currentValue, currentIndex
      currentLength = a < b ? currentLength + 1 : 1;
      if (currentLength > maxLength) {
          maxLength = currentLength;
          maxIndex = i - currentLength + 1;
      }
      return b;
    });
    

    var newArr = [];
    for (i = 0; i < maxLength; i++) {
      newArr.push(arr[maxIndex + i]);
    }

    if (newArr.length == 1) {
      console.log("no increasing sequence");
    } else {
       console.log(newArr);
    }
}






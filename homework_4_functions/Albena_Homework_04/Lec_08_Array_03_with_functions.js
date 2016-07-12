/* Albena Indzheva
 * 
 * Exercise 3: 
 * Write a script that finds the maximal sequence of equal elements in an array.
 * Example: {2, 1, 1, 2, 3, 3, 2, 2, 2, 1}  {2, 2, 2}.
 */

"use strict";

function findMaxSequence(arr) {
  var start = [0]; //индекса на началото на текущата подредица от еднакви елементи 
  var len = [1]; //дължината на текущата подредица

  for (var i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i-1]) {
        start.push(i);
        len.push(1);
      } else {
        len[len.length-1]++;
      }
  }

  var maxLen = len[0];
  var longestArr=[];

  for (var j in len) {
    if (len[j] > maxLen) {
      maxLen = len[j];
    }
  }
  
  for (var a = 0; a <= len.length; a++ ) {
    if (len[a] == maxLen ) {
      var firstSymbolIndex = start[a]; 
      for (var k = 1; k <= maxLen; k++) {
        longestArr.push(arr[firstSymbolIndex]);
        firstSymbolIndex++;      
      }
      console.log(longestArr);
      longestArr = [];
    } 
  }
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);




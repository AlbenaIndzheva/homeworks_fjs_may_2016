"use strict"

/* Вера Манова 
Write a script that finds the maximal sequence of equal elements in an array.
		Example: {2, 1, 1, 2, 3, 3, 2, 2, 2, 1}  {2, 2, 2}.

 */

 var randomElements =[2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
    var currentSequence = 1;
    var longestSequence = 1;
    var indexOfLongest;
    for (var i = 0; i < randomElements.length-1; i++) {
        if (randomElements[i] == randomElements[i + 1]) {
            currentSequence++;
        } else {
            if (longestSequence < currentSequence) {
                longestSequence = currentSequence;
                indexOfLongest = i - currentSequence + 1;
            }
            currentSequence = 1;
        }
    }
    var result = randomElements.slice(indexOfLongest, indexOfLongest + longestSequence);
    console.log('The longest sequence has ' + longestSequence + ' elements');
    console.log('It starts at position ' + indexOfLongest + ' and contains the elements [' + result + ']');
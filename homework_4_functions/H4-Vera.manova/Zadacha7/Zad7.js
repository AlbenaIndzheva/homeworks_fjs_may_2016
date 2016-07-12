"use strict"

/*  Вера Манова Write a function that returns the index of the first element in array that is 
bigger than its neighbors, or -1, if there’s no such element.
Use the function from the previous exercise.



*/

var array = [-9, 3, 4, 5, 17];
        console.log(check(array));
        function check(array) {
            for (var i = 0; i < array.length; i++) {
                if (i == 0) {
                    if (array[i] > array[i + 1]) {
                        return array[i];
                    }
                }
                else if (i == array.length - 1) {
                    if (array[i] > array[i - 1]) {
                        return array[i];
                    }
                }
                else {
                    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
                        return array[i];
                    }
                }
            }
            return -1;
        }
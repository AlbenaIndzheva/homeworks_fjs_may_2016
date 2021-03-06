"use strict"

/* Вера Манова - Write a function that counts how many times given number appears in given array. 
Write a test function to check if the function is working correctly.
                     
    */

       var array = [1, 3, 9, 0, 11, -1, 3, -1, 3, 43, 3, 0, 11, 7, 11];
        var number = 3;
        console.log(count(array, number));
        tests();
        function count(array, number) {
            var counter = 0;
            for (var i = 0; i < array.length; i++) {
                if (array[i] == number) {
                    counter++;
                }
            }
            return counter;
        }
        function tests() {
            console.assert(count(array, 100) == 0, 'Test failed!');
            console.assert(count(array, 0) == 2, 'Test failed!');
            console.assert(count(array, -1) == 2, 'Test failed!');
            console.assert(count(array, 9) == 1, 'Test failed!');
            console.assert(count(array, 11) == 3, 'Test failed!');
        }
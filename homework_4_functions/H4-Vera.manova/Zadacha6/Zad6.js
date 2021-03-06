"use strict"

/*	Вера Манова 
		
Write a function that checks if the element at given position in given array of integers is bigger than its 
two neighbors (when such exist).


*/

var array = [2, 3, 10, 5, 7];
        var number = 7;
        check(array, number);
        function check(array, number) {
            var index = findPositionOfNumber(array, number);
            if (index >= 0 && index <= array.length - 1) {
                if (index == 0) {
                    console.log('The comparable numbers are: ' + array[index] + ' and ' + array[index + 1]);
                    console.log('The biggest number is: ' + Math.max(array[index], array[index + 1]));
                }
                else if (index == array.length - 1) {
                    console.log('The comparable numbers are: ' + array[index] + ' and ' + array[index - 1]);
                    console.log('The biggest number is: ' + Math.max(array[index], array[index - 1]));
                }
                else {
                    console.log('The comparable numbers are: ' + array[index - 1] + ', ' + array[index] + ' and ' + array[index + 1]);
                    console.log('The biggest number is: ' + Math.max(Math.max(array[index], array[index + 1]), array[index - 1]));
                }
            }
            else {
                console.log('There is no such number in the array!')
            }
        }
        function findPositionOfNumber(array, number) {
            if (parseInt(number) == parseFloat(number) && number < Number.MAX_VALUE && number > Number.MIN_VALUE) {
                for (var i = 0; i < array.length; i++) {
                    if (array[i] == number) {
                        return i;
                    }
                }
            }
            else {
                return -1;
            }
        }
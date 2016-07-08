	"use strict"

	/*  Вера Манова 

			Write a function that reverses the digits of given decimal number. Example: 256  652

	  */

	   function reverseNumber() {
            var number = document.getElementById('number').value;
             
            if (isValidNumber(number)) {
                var array = new Array(number.length);
                var index = 0;
                for (var i = number.length - 1; i >= 0; i--) {
                    array[i] = number[index];
                    index++;
                }
                for (var i = 0; i < array.length; i++) {
                    console.log(array[i]);
                }
            }
            else {
                console.log('Invalid Number')
            }
        }
        function isValidNumber(number) {
            if (parseInt(number) == parseFloat(number) && number < Number.MAX_VALUE && number > Number.MIN_VALUE) {
                return true;
            }
            else {
                return false;
            }
        }
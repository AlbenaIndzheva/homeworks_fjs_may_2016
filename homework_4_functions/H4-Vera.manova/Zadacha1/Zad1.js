"use strict"

/* Вера Манова - Задача1 
Write a function that returns the last digit of given integer as an English word. 
Examples: 512  "two", 1024  "four", 12309  "nine"
                        console.log('One');
    */

  

function getLastDigit() {
            var number = document.getElementById('number').value;
            if (isValidNumber(number)) {
                var lastDigit = number % 10;
                 
                switch (lastDigit) {
                    case 1:
                        console.log('One');
                        break;
                    case 2:
                        console.log('Two');
                        break;
                    case 3:
                        console.log('Three');
                        break;
                    case 4:
                        console.log('Four');
                        break;
                    case 5:
                        console.log('Five');
                        break;
                    case 6:
                        console.log('Six');
                        break;
                    case 7:
                        console.log('Seven');
                        break;
                    case 8:
                        console.log('Eight');
                        break;
                    case 9:
                        console.log('Nine');
                        break;
                    default:
                        console.log('No such digit!');
                        break;
                }
            }
            else {
                console.log('Invalid number!');
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
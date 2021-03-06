"use strict"

/* Вера Манова - Задача3 
Write a function that finds all the occurrences of word in a text
The search can case sensitive or case insensitive
Use function overloading

    */

       var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum gravida ligula lacus, in faucibus orci ipsum ac. ' +
                   'Ipsum rhoncus Ipsum facilisis eleifend porta. Nulla eu nunc nibh. Vestibulum ut neque ac metus accumsan dignissim. ' +
                   'Aliquam tempus urna odio, vitae mollis velit sollicitudin nec. In commodo elementum tempor. Donec rhoncus ante quis mauris ' +
                   'lorem commodo. Lorem dolor justo, lacinia lorem nulla vitae, convallis egestas augue. Phasellus orci augue, suscipit ac neque a, ' +
                   'ornare congue elit. Fusce at diam at tortor sodales lorem. Nulla ac mauris lacus. Curabitur lobortis lacinia lorem.';
        var firstWord = 'Lorem';
        var secondWord = 'lorem';
        console.log(firstWord + ' ' + findWord(text, firstWord, true));
        console.log(secondWord + ' ' + findWord(text, secondWord, false));
        function findWord(text, word, isCaseSensitive) {
            if (!isCaseSensitive) {
                text = text.toLowerCase();
                word = word.toLowerCase();
            }
            var startIndex = 0;
            var occurences = 0;
            while (true) {
                startIndex = text.indexOf(word, startIndex);
                if (startIndex == -1) {
                    break;
                }
                else {
                    startIndex += word.length;
                    occurences++;
                }
            }
            return occurences;
            console.log(occurences);
        }
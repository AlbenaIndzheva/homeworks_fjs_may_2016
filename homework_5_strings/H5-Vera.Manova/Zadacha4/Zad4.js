"use strict"

/* Вера Манова 


You are given a text. Write a function that changes the text in all regions:
<upcase>text</upcase> to uppercase.
<lowcase>text</lowcase> to lowercase
<mixcase>text</mixcase> to mix casing(random)

We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. 
We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.

	The expected result:

      We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.

	Regions can be nested
 */

  var stringToParse = "We are <mixcase>living</mixcase> in a <upcase><lowcase>yellow submarine</lowcase></upcase>. " +
                   "We <mixcase>don't</mixcase> have <lowcase>ANYTHING</lowcase> else.";

                   var store = [];
            var oldf = console.log;
            console.log = function(){
            store.push(arguments);
            oldf.apply(console, arguments);
             }
        function parseStringOnClick() {

        	
            var stringToParse = console.log(("#input").toString());
            console.log(parseText(stringToParse));
        }
        function parseText(stringToParse) {
            var result = stringToParse;
            //define global regular expressions for catching all the tags by using 'g' at the end
            var mixcasePattern = /<mixcase>(.*?)<\/mixcase>/g;
            var upcasePattern = /<upcase>(.*?)<\/upcase>/g;
            var lowcasePattern = /<lowcase>(.*?)<\/lowcase>/g;
            //replace using an anonymous function for random upper/lower case
            result = result.replace(mixcasePattern, function (match) {
                var i = 0;
                for (i = 0; i < match.length; i++) {
                    var upperOrLower = Math.round(Math.random());
                    switch (upperOrLower) {
                        case 0:
                            match = match.replace(match[i], match[i].toLowerCase());
                            break;
                        case 1:
                            match = match.replace(match[i], match[i].toUpperCase());
                            break;
                    }
                    console.log(upperOrLower);
                }
                return match;
            });
            result = result.replace(upcasePattern, function (match) { return match.toUpperCase() });
            result = result.replace(lowcasePattern, function (match) { console.log(match); return match.toLowerCase() });
            
            return result;
        }
        console.log(stringToParse);
        console.log(parseText(stringToParse));
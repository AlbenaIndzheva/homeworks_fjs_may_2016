/* Albena Indzheva
 *  
 * Write a JavaScript function that finds how many times a substring is
 * contained in a given text (perform case insensitive search).
 *   
 * Example: The target substring is "in". The text is as follows:
 * 
 * We are living in an yellow submarine. We don't have anything else. 
 * Inside the submarine is very tight. 
 * So we are drinking all the day. 
 * We will move out of it in 5 days.
 * 
 * The result is: 9.
 */

"use strict";

var text = "We are living in an yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.";
var word = "in";

function countRepeatingSubstring(text, word) {
        var match = text.match(new RegExp(word, 'gi'));
        return match && match.length || 0;
}

countRepeatingSubstring(text, word);
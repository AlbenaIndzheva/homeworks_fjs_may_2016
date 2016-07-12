/* Albena Indzheva
 * 
 * Write a function that finds all the occurrences of word in a text
 * The search can case sensitive or case insensitive
 * Use function overloading  
 */

function occurrencesWord(text, word, isCaseSensitive) {
    isCaseSensitive = isCaseSensitive || false;
    var count = 0;
    var strArr;
    if (isCaseSensitive == false) {
    	text = text.toLowerCase();
    	word = word.toLowerCase();
    }       
    strArr = text.split(word);  
    count = strArr.length - 1;   
    return count;  
}

var text = "Lorem ipsum dolor sit amet, at lucilius suscipiantur ipsum vel. Qui te labitur Ipsum partiendo ullamcorper.";
var word = "ipsum";

occurrencesWord(text, word);
occurrencesWord(text, word, true);
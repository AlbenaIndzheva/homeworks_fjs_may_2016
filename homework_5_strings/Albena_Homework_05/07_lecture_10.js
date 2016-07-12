/* Albena Indzheva
 * 
 * Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".
 */


var str = "Lorem ipsum dolor sit ABBA , prima tacimates \
 hendrerit an vel, ea detraxit consulatu lamal usu,\
 est ad nulla prompta. Nullam signiferumque ea velev, ius ad partem exe noster. \
 Facilisi repudiandae mel ex, ne quot conceptam mei, utinam insolens id mel."

function isPalindrome(word) {
	var i;
    for (i = 0; i < parseInt(word.length / 2, 10); i++)
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    return true;
}

var result = str.match(/\w+/g).filter(isPalindrome);

console.log(result);
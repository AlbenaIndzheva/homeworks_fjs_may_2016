/* Albena Indzheva
 * 
 * Write a function for extracting all email addresses from given text. 
 * All substrings that match the format <identifier>@<host>…<domain> should be recognized as emails.
 * A Return the emails as array of strings
 */
 
var text = "albena_7@abv.bg, albena.Indzheva@gmail.com, ala bala@a neshto drugo"

function extractEmails(text) {
     var re = /\w+[ ._-]\w+@\w+[.]\w+([.]\w+)*/ig;
          var match = text.match(re);
     return match.join(" ");
}
  
extractEmails(text);
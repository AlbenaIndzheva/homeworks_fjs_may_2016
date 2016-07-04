/* Albena Indzheva
 * 
 * Write a script that parses an URL address given in the format:
 * [protocol]://[server]/[resource]
 * and extracts from it the [protocol], [server] and [resource] elements. 
 * Return the elements in a JSON object. For example from the URL 
 * http://www.devbg.org/forum/index.php the following information should be extracted:
 * {protocol: 'http', server: 'www.devbg.org', 
 *  resource: '/forum/index.php'}
 */

"use strict";

var urlAdress = "http://www.devbg.org/forum/index.php";

function parseUrl(urlAdress) {
     var match = /(.*):\/\/(.*?)(\/.*)/g.exec(urlAdress);
     return { protocol: match[1], server: match[2], resource: match[3] };
}
  
parseUrl(urlAdress);
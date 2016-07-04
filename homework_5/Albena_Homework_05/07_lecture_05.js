/* Albena Indzheva
 *  
 * Write a function that replaces non breaking white-spaces in a text with &nbsp;
 */

"use strict";

var text = " Lorem ipsum   dolor sit amet   ";

function escapeWhiteSpace(text) {
    return text.replace(/ /g, '&nbsp;')
}
   
escapeWhiteSpace(text);
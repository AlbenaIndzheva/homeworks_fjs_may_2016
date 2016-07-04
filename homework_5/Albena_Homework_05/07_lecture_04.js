/* Albena Indzheva
 *   
 * You are given a text. Write a function that changes the text in all regions:
 * <upcase>text</upcase> to uppercase.
 * <lowcase>text</lowcase> to lowercase
 * <mixcase>text</mixcase> to mix casing(random)
 * We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.
 *  
 * The expected result:
 * We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.
 * Regions can be nested
 */

"use strict";
var str = "We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.";

function toMixCase(str) {
    var replaced = '';
    var i;
    for (i = 0; i < str.length; i++) {
        replaced += str.charAt(i)[Math.round(Math.random()) ? 'toLowerCase' : 'toUpperCase']();
     }
    return replaced;
}

function changeText(str) {
    return str.replace(/<upcase>(.*?)<\/upcase>/g, function(match, p1) {
        return p1.toUpperCase()
    }).replace(/<lowcase>(.*?)<\/lowcase>/g, function(match, p1) {
        return p1.toLowerCase()
    }).replace(/<mixcase>(.*?)<\/mixcase>/g, function(match, p1) {
        return toMixCase(p1)
    })
}

changeText(str);
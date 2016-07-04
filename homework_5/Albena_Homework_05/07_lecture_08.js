/* Albena Indzheva
 * 
 * Write a JavaScript function that replaces in a HTML document given as string 
 * all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL]. 
 * Sample HTML fragment:
 * <p>Please visit <a href="http://www.abv.bg">our site</a>
 * to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>
 * <p>Please visit [URL=http:// www.abv.bg]our site[/URL] to choose a training course. 
 * Also visit [URL=www.devbg.org]our forum[/URL] to discuss the courses.</p>
 * 
 */

"use strict";

function replaceUrl(text) {
	var text = document.getElementById('example').innerHTML;
    var result = text.replace(/<a href="(.*?)">(.*?)<\/a>/g, '[URL=$1]$2[/URL]');
    return result;
}
 
function replaceOnClick() {
	var text = document.getElementById('example').innerHTML;
    document.getElementById('example').innerHTML = replaceUrl(text);;
} 
 
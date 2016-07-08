
/* Albena Indzheva
 * 
 * Write a function to count the number of divs on the web page
 *  
 */

 function numberDivs() {
    var number = document.getElementsByTagName("div").length;   
    return number;  
}

numberDivs();
/* Student: Albena Indzheva
 *
 * Write a script that finds the max and min number from a sequence of numbers
 * 
 */

var arr = [6, 5, 7, 8, 9, 55];
var maxNum = arr[0];
var minNum = arr[0];
for (var i in arr) {
  if (arr[i] > maxNum) {
  	maxNum = arr[i];
  }
  if (arr[i] < minNum) {
  	minNum = arr[i];
  }
}
console.log("maxNum = " + maxNum);
console.log("minNum = " + minNum);







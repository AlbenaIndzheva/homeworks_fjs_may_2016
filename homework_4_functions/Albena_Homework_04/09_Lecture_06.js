/* Albena Indzheva
 * 
 * Write a function that checks if the element at given position in 
 * given array of integers is bigger than its two neighbors (when such exist)
 */

var arr = [10, 5, 8, 5, 456, 4];
var position = 2;


function biggerThanNeighbors(arr, position) {
	var arrLength = arr.length;

	if ((position == 0 && arr[0] > arr[1]) || (position == arrLength-1 && arr[arrLength-1] > arr[arrLength-2]) || 
		(position != 0 && position != arrLength-1 && arr[position] > arr[position - 1] && arr[position] > arr[position + 1] )) {

		return "yes";
	} else {
		 return "no";
	}
}   

biggerThanNeighbors(arr, position);
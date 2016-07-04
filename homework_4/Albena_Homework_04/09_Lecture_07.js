/* Albena Indzheva
 * 
 * Write a function that returns the index of the first element in array that is bigger than its neighbors, or -1, if there’s no such element.
 * Use the function from the previous exercise.
 */

var arr = [10, 5, 8, 5, 456, 4];
var arr2 = [1, 2, 3, 10, 6, 8, 0, -1];
var position = 2;

function biggerThanNeighbors(arr, position) {
	var arrLength = arr.length;

	if ((position == 0 && arr[0] > arr[1]) || (position == arrLength-1 && arr[arrLength-1] > arr[arrLength-2]) || 
		(position != 0 && position != arrLength-1 && arr[position] > arr[position - 1] && arr[position] > arr[position + 1] )) {
		return true;
	} else {
		return false;
	}
}   

function findFirstBiggerThanNeighbours(arr2) {
	for (var i = 0; i < arr2.length; i++ ) {
	  	if (biggerThanNeighbors(arr2, i) == true) {
	  		return i;
	  	} 
	}
	return -1;
}

findFirstBiggerThanNeighbours(arr2);
 


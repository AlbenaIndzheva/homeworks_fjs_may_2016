"use strict"
/*
 * Да се въведат N на брой числа и да се намерят
 * най-малкото и най-голямото измежду тях.
 */

var arr = [33, 13, 2, 4, 44, -10];

Array.prototype.max = function() {
  return Math.max.apply(null, arr);
};

Array.prototype.min = function() {
  return Math.min.apply(null, arr);
};


alert("Max value is: "+arr.max()+"\nMin value is: "+ arr.min());
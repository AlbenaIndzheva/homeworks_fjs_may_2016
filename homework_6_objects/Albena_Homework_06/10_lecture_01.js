/* Albena Indzheva

Write functions for working with shapes in  standard Planar coordinate system
Points are represented by coordinates P(X, Y)
Lines are represented by two points, marking their beginning and ending
L(P1(X1,Y1), P2(X2,Y2))
Calculate the distance between two points
Check if three segment lines can form a triangle.
Use both the new EcmaScript6 and the old syntax to implement the classes 

*/

function Point(x, y) {
    this.x = x;
    this.y = y;
}

 
function line(point1, point2) {
    return { 
    	pointA: point1, 
    	pointB: point2,
        getDistance: function() {
	    	return Math.sqrt(Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2));
	    }
    };
}

function ifTriangle(line1, line2, line3) {
    return Math.sqrt(Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2));
}

function ifTriangle(line1, line2, line3) {
    var a = getDistance(line1.pointA, line1.pointB);
    var b = getDistance(line2.pointA, line2.pointB);
    var c = getDistance(line3.pointA, line3.pointB);
    return ((a + b > c) && (a + c > b) && (b + c > a));
} 

var point1 = new Point(3, 2);
var point2 = new Point(4, 5);
var point3 = new Point(3.5, 7);

var l1 = line(point1, point2);
var l2 = line(point2, point3);
var l3 = line(point1, point3);

console.log("Length of line 1 is " + l1.getDistance());
console.log("Can L1, l2, l3 make a triangle: " + ifTriangle(l1, l2, l3));

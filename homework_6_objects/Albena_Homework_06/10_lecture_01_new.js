/* Albena Indzheva

Write functions for working with shapes in  standard Planar coordinate system
Points are represented by coordinates P(X, Y)
Lines are represented by two points, marking their beginning and ending
L(P1(X1,Y1), P2(X2,Y2))
Calculate the distance between two points
Check if three segment lines can form a triangle.
Use both the new EcmaScript6 and the old syntax to implement the classes 

*/

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
    }

    getDistance() {
        return Math.sqrt(Math.pow((this.point1.x - this.point2.x), 2) + Math.pow((this.point1.y - this.point2.y), 2));
    }
}

class Triangle {
    constructor(line1, line2, line3) {
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
    }

    isTriangle() {
        var a = this.line1;
        var b = this.line2;
        var c = this.line3;
        return (((a + b) > c) && ((a + c) > b) && ((b + c) > a));
    }
}
// Example usage:
var point1 = new Point(3, 2);
var point2 = new Point(4, 5);
var point3 = new Point(3.5, 7);

var line1 = new Line(point1, point2);
var line2 = new Line(point2, point3);
var line3 = new Line(point1, point3);

var triangle = new Triangle(line1.getDistance(), line2.getDistance(), line3.getDistance());
console.log("Length of line 1 is " + line1.getDistance());
console.log("Can L1, l2, l3 make a triangle: " + triangle.isTriangle(line1, line2, line3));

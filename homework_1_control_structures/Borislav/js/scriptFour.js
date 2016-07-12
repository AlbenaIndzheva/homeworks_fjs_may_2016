function myFunction() {
    var а, b, c;
    a = document.getElementById("one").value;
    b = document.getElementById("two").value;
    if (a == b){

    	document.getElementById("demo").innerHTML = "the numbers are the same";
    }

    else {

    	c = (a < b) ? a + " " + b: b + " " + a;
    	document.getElementById("demo").innerHTML = c;

    }

}

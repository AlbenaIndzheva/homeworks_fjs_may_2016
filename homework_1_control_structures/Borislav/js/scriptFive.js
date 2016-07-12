function myFunction() {
    var а, b, c;
    a = document.getElementById("one").value;
    b = document.getElementById("two").value;
    c = document.getElementById("three").value;
    if ((a == b) || (a == c) || (b == c)) {

    	document.getElementById("demo").innerHTML = "in this case there is no descending order";
    }

    	if ((a < b) && (a < c) && (b < c)) {
    	document.getElementById("demo").innerHTML = c + " " + b + " " + a;
    	}

    		if ((a < b) && (a < c) && (b > c)) {

    		document.getElementById("demo").innerHTML = b + " " + c + " " + a;
    		}

    			if ((b < a) && (b < c) && (a < c)) {

    		document.getElementById("demo").innerHTML = c + " " + a + " " + b;
    		}
   
    				if ((b < a) && (b < c) && (c < a)) {

    		document.getElementById("demo").innerHTML = a + " " + c + " " + b;
    		}
    
    					if ((c < a) && (c < b) && (b < a)) {

    		document.getElementById("demo").innerHTML = a + " " + b + " " + c;
    		}

    							if ((c < a) && (c < b) && (a < b)) {
    							document.getElementById("demo").innerHTML = b + " " + a + " " + c;
    		
    	}

    }



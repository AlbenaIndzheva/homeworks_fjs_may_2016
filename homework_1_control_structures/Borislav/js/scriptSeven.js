function myFunction() {
    var a, b, c;
    a = document.getElementById("one").value;
    b = document.getElementById("two").value;
    c = document.getElementById("three").value;

    if (c = 0) {
    	document.getElementById("demo").innerHTML = "Ще спя!";
    	}

    if ((a < 16) && (b < 20) ) {
    	document.getElementById("demo").innerHTML = "Ще пия кафе!";
    	}

    if ((a < 16) && (b > 20)) {
    	document.getElementById("demo").innerHTML = "Ще пия бира и ще хапвам!";
    	}

    if ((a > 16) && (b < 20)) {
    	document.getElementById("demo").innerHTML = "Ще пия бира!";
    	}

    if ((a > 16) && (b > 20)) {
    	document.getElementById("demo").innerHTML = "Ще съм на мероприятие!";
    	}

}


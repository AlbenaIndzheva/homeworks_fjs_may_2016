function myFunction() {
    var а, b, c, equal;
    a = document.getElementById("one").value;
    b = document.getElementById("two").value;
    c = document.getElementById("three").value;
    equal = ((a < c) && (c < b)) ? c + " is": c + " is NOT";
    document.getElementById("demo").innerHTML = equal + " between " + a + " and " + b ;
}

function myFunction() {
    var а, b, sum, sub, mult, di;
    a = document.getElementById("one").value;
    b = document.getElementById("two").value;
    sum = a + b ;
    sub = a - b ;
    mult = a * b ;
    di = a % b ;
    document.getElementById("demo").innerHTML = "the sum is:" + sum + ", the substraction is:" + sub + ", the multiple is:" + mult + ", the divider is:" + di;
}

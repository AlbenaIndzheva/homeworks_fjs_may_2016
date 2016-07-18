/**
 * Created by Denislav on 16.7.2016 г..
 */
window.onload = function() {

    var current,
        screen,
        output,
        limit,
        zero,
        period,
        operator;

    screen = $('#result')[0];

    var elem = $('.num');
    var len = elem.length;

    for(var i = 0; i < len; i++ ) {

        elem[i].addEventListener("click",function() {

            num = this.value;

            output = screen.innerHTML +=num;

            limit = output.length;

            if(limit > 16 ) {

                alert("Sorry no more input is allowed");

            }

        },false);

    }
    
    $('.zero').click(function () {
        zero = this.value;

        if(screen.innerHTML === "") {

            output = screen.innerHTML = zero;
        }

        else if(screen.innerHTML === output) {

            output = screen.innerHTML +=zero;

        }
    });
    
    $('.period').click(function () {
        period = this.value;

        if(screen.innerHTML === "") {

            output = screen.innerHTML = screen.innerHTML.concat("0.");

        }

        else if(screen.innerHTML === output) {

            screen.innerHTML = screen.innerHTML.concat(".");

        }
    });

    $('#eqn-bg').click(function () {
        if(screen.innerHTML === output) {

            screen.innerHTML = eval(output);
        }

        else {
            screen.innerHTML = "";
        }
    });


    $('#del').click(function () {
       screen.innerHTML = "";
    });

    var elem1 = document.querySelectorAll(".operator");

    var len1 = elem1.length;

    for(var i = 0; i < len1; i++ ) {

        elem1[i].addEventListener("click",function() {

            operator = this.value;

            if(screen.innerHTML === "") {

                screen.innerHTML = screen.innerHTML.concat("");

            }

            else if(output) {

                screen.innerHTML = output.concat(operator);

            }

        },false);

    }
}
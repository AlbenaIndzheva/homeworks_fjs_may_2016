/**
 * Created by Denislav on 16.7.2016 г..
 */
$(document).ready(function() {
    $("#register").click(function() {
        var name = $("#name").val();
        var userName = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var cpassword = $("#cpassword").val();
        if(!name.match(/^([^0-9]*)$/)){
            alert("Name cannot contain numbers !");
        }
        else if(!userName.match(/^\S+$/)){
            alert("Username cannot contain white spaces !")
        }
        else if(!email.match(/@/)){
            alert("Username must contain @ !")
        }
        else if ((password.length) < 8) {
            alert("Password should atleast 8 character in length !");
        }
        else if (!password === cpassword) {
            alert("Your passwords don't match !");
        }
        else
            alert("Register successful !")
    });
});
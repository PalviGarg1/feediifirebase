import $ from 'jquery';

//localStorage.clear();
//localStorage.acntype = "";

// window.onload = function () {
//     setTimeout(function () {
//         $("#divLoader").css('display','none');
//         $("#login").css('display','block');
//     }, 0); //Delay just used for example and must be set to 0.
// }

$(document).ready(function () {

    // $('.shldr').click(function () {
    //     $("#divLoader").css('display', 'block');
    //     $("#login").css('display', 'none');
    // });


    $("#techr").click(function () {
        var acntype = "Teacher";
        //$('#divLoader').show();
        //$('#login').hide();
        //localStorage.acntype =  acntype;
        //alert(localStorage.acntype);
        alert('clicked');
        window.location.href  = "/getstarted/details";
    });

    $("#studnt").click(function () {
        var acntype = "Student";
        //$('#divLoader').show();
        //$('#login').hide();
        alert('clicked');
        //localStorage.acntype =  acntype;
        window.location.href  = "/getstarted/details";
    });

    $("#adminn").click(function () {
        var acntype = "School";
        //$('#divLoader').show();
        //$('#login').hide();
        alert('clicked');
        //localStorage.acntype =  acntype;
        window.location.href  = "/getstarted/details";
    });
});
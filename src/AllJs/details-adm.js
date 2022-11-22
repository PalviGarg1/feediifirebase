import $ from 'jquery';

//alert(localStorage.acntype);

// window.onload = function () {
//     setTimeout(function () {
//         $("#divLoader").css('display', 'none');
//         $("#login").css('display', 'block');
//     }, 0); //Delay just used for example and must be set to 0.
// }

// var sessiontimeout;
// sessiontimeout = $("#stot").val();
// var sessionTimeoutWarning = sessiontimeout - 1;

// var sTimeout = parseInt(sessionTimeoutWarning) * 60 * 1000;
// setTimeout('SessionEnd()', sTimeout);

// function SessionEnd() {
//     location.replace("/Error/Error_002");
// }

// $('.shldr').click(function () {
//     $("#divLoader").css('display', 'block');
//     $("#login").css('display', 'none');
// });

// $('.cstmabtnsa').click(function () {
//     $("#divLoader").css('display','block');
//     $("#login").css('display','none');
// });

$(document).ready(function () {
    var eml = $('#ademail');
    var udiv = $('#uiscs');

    eml.blur(function () {
        var ptrn = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

        if (eml.val() == '' || null) {
            //alert('email is null');
            udiv.attr('errr', '');
            //$("#uiscs .err-txt").text('Email is required');
            //$("#uiscs .kckh4-svg > g").removeClass("grn-strk").addClass("stroke");
            udiv.removeClass('valid-inp');
        }
        // else if (!ptrn.test(eml.val())) {
        //     //alert('pattern not matched');
        //     udiv.attr('errr', '');
        //     $("#uiscs .err-txt").text('Please enter correct email');
        //     $("#uiscs .kckh4-svg > g").removeClass("grn-strk").addClass("stroke");
        //     udiv.removeClass('valid-inp');
        // }
        else {
            //alert('pattern matched & email is not null');
            udiv.removeAttr('errr');
            //$("#uiscs .kckh4-svg > g").removeClass("stroke").addClass("grn-strk");
            udiv.addClass('valid-inp');
        }
    });
    

    $('.admndtlfrm1').on('submit', function (e) {
        e.preventDefault();
        var eml = $('#ademail').val();
        var udiv = $('#uiscs');
        var acnttype2 = localStorage.acntype;

        $('#nxt-btnneml #nxt-btnn-loader').css('display', 'block');
        $('#nxt-btnneml #nxt-btnn-txt').css('display', 'none');

        $.ajax({
            url: "https://entity-feedii-api.azurewebsites.net/api/login/GetUserValidated/" + eml + "-" + acnttype2 + "/",
            type: "GET",
            success: function (response) {
                
                var data = JSON.stringify(response);
               
                var obj = JSON.parse(data);
                var userMasterid = obj[0].usermasterId;
                var description_ = obj[0].description;
                localStorage.tokensnd =obj[0].confirmationToken;
                localStorage.Masteridsnd=obj[0].usermasterId;
                

               // alert(data + " || " + obj + " || " + umid);

                if (description_ == "Verification Link Send" || description_ == "Email Not Verified") {
                    window.location.href="/getstarted/accountverify";
                }
                else if (description_ == "Profile Created" || description_ == "Password Created"){

                    udiv.attr('errr', '');
                    $("#uiscs .err-txt").text('This account is already registered, please login into your account!');
                    $("#uiscs .kckh4-svg > g").removeClass("grn-strk").addClass("stroke");
                    $('#nxt-btnneml #nxt-btnn-loader').css('display', 'none');
                    $('#nxt-btnneml #nxt-btnn-txt').css('display', 'block');
                }
                else if(description_="Email Verified")
                {
                    window.location.href="/getstarted/createpassword";
                }
                else{
                    udiv.attr('errr', '');
                    $("#uiscs .err-txt").text('Your account is on hold!');
                    $("#uiscs .kckh4-svg > g").removeClass("grn-strk").addClass("stroke");
                    $('#nxt-btnneml #nxt-btnn-loader').css('display', 'none');
                    $('#nxt-btnneml #nxt-btnn-txt').css('display', 'block');
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $('#nxt-btnneml #nxt-btnn-loader').css('display', 'none');
                $('#nxt-btnneml #nxt-btnn-txt').css('display', 'block');
                if (XMLHttpRequest.status == "0") {

                    //location.replace("/Error/Error_001")

                }
                else if (XMLHttpRequest.status == "400") {
                    var message = "Error:400 Bad Request for usermasterid";
                    //$.ajax({
                    //    type: "POST",
                    //    url: " https://new-feediii-api.azurewebsites.net/api/activities/EnterlogData",
                    //    data: { logType: "Web", logdoneby: "Student", logdoneId: 0, message: message, module: "create profile", logDonefor: "Tool" },
                    //    success: function (msg) {
                    //        location.replace("/Error/Error_400")
                    //    }
                    //})
                }
                else if (XMLHttpRequest.status == "404") {
                    var message = "Error:404 Resource not found for usermasterid";

                    //$.ajax({
                    //    type: "POST",
                    //    url: " https://new-feediii-api.azurewebsites.net/api/activities/EnterlogData",
                    //    data: { logType: "Web", logdoneby: "Student", logdoneId: 0, message: message, module: "create profile", logDonefor: "Tool" },
                    //    success: function (msg) {
                    //        location.replace("/Error/Error_404")
                    //    }
                    //})
                }
                else if (XMLHttpRequest.status == "500") {
                    var message = "Error:500 Internal server error for usermasterid ";
                    //$.ajax({
                    //    type: "POST",
                    //    url: " https://new-feediii-api.azurewebsites.net/api/activities/EnterlogData",
                    //    data: { logType: "Web", logdoneby: "Student", logdoneId: 0, message: message, module: "create profile", logDonefor: "Tool" },
                    //    success: function (msg) {
                    //        location.replace("/Error/Error_500")
                    //    }
                    //})
                }
                else {
                    var message = "Unhandled Exception for usermasterid";
                    //$.ajax({
                    //    type: "POST",
                    //    url: " https://new-feediii-api.azurewebsites.net/api/activities/EnterlogData",
                    //    data: { logType: "Web", logdoneby: "Student", logdoneId: 0, message: message, module: "create profile", logDonefor: "Tool" },
                    //    success: function (msg) {
                    //        location.replace("/Error/Error")
                    //    }
                    //})
                }

            }
        });
    });
});



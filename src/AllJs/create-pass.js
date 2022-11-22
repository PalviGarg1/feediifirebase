import $ from 'jquery';


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
    var psswrd = $('#password');
    var psswrd_rpt = $('#repeatpassword');
    var udiv = $('#uiscs1');
    var udiv2 = $('#uiscs2');

    psswrd.blur(function () {
        if (psswrd.val() == '' || null) {
            udiv.attr('errr', '');
            udiv.removeClass('valid-inp');
        }       
        else {
            udiv.removeAttr('errr');
            udiv.addClass('valid-inp');
        }
    });

    // psswrd_rpt.blur(function () {
    //     if (psswrd_rpt.val() == '' || null) {
    //         udiv2.attr('errr', '');
    //         udiv2.removeClass('valid-inp');
    //     }       
    //     else {
    //         udiv2.removeAttr('errr');
    //         udiv2.addClass('valid-inp');
    //     }
    // });
});



$(document).ready(function () {
    $('.cratepswrdfm1').on('submit', function (e) {
        e.preventDefault();
  
        //alert(usermasterid + mobile_key);
        var password = $("#password").val();
        //var new_password = $("#repeatpassword").val();
        //console.log(new_password);
        if ((password == "" || null)) {
            $("#nxt-btnnpswrd #nxt-btnn-loader").css('display', 'none');
            $("#nxt-btnnpswrd #nxt-btnn-txt").css('display', 'block');
            $("#uiscs1").attr('errr', '');
            $("#uiscs2").attr('errr2', '');
            $(".kckh4-svg > g").removeClass("grn-strk");
            $(".kckh4-svg > g").addClass("stroke");
            $(".err-txt").css("display", 'flex');
            $('.err-txt').text('Password is required');
        }
        // else if (password.length < 6 && new_password.length < 6) {
        //     //alert('combo');
        //     $("#nxt-btnnpswrd #nxt-btnn-loader").css('display', 'none');
        //     $("#nxt-btnnpswrd #nxt-btnn-txt").css('display', 'block');
        //     $(".pswrdd#uiscs1").attr('errr', '');
        //     $(".rptpswrd#uiscs2").attr('errr2', '');
        //     $(".kckh4-err-spn").css("display", 'flex');
        //     $(".pswrdd#uiscs1 .kckh4-svg > g").removeClass("grn-strk");
        //     $(".pswrdd#uiscs1 .kckh4-svg > g").addClass("stroke");
        //     $(".rptpswrd#uiscs2 .kckh4-svg > g").removeClass("grn-strk");
        //     $(".rptpswrd#uiscs2 .kckh4-svg > g").addClass("stroke");
        //     $('.err-txt').text('Password length should be atleast 6 charcters');
        // }
        else if (password.length < 6) {
            //alert('pswrd');
            $("#nxt-btnnpswrd #nxt-btnn-loader").css('display', 'none');
            $("#nxt-btnnpswrd #nxt-btnn-txt").css('display', 'block');
            $(".pswrdd#uiscs1").attr('errr', ''); 
            $(".pswrdd .kckh4-err-spn").css("display", 'flex');
            $(".pswrdd #uiscs1 .kckh4-svg > g").removeClass("grn-strk");
            $(".pswrdd #uiscs1 .kckh4-svg > g").addClass("stroke");
            $('.pswrdd .err-txt').text('Password length should be atleast 6 charcters');
        }
        // else if (new_password.length < 6) {
        //     //alert('newpswrd')
        //     $("#nxt-btnnpswrd #nxt-btnn-loader").css('display', 'none');
        //     $("#nxt-btnnpswrd #nxt-btnn-txt").css('display', 'block');
        //     $(".rptpswrd#uiscs2").attr('errr2', '');
        //     $(".rptpswrd .kckh4-err-spn").css("display", 'flex');
        //     $(".rptpswrd .kckh4-svg > g").removeClass("grn-strk");
        //     $(".rptpswrd .kckh4-svg > g").addClass("stroke");
        //     $('.rptpswrd .err-txt').text('Password length should be atleast 6 charcters');
        // }
        //else if (password == new_password) {
        else {
            //$("#divLoader").show();
            //$("#login").css('display', 'none');
            $("#nxt-btnnpswrd #nxt-btnn-loader").css('display', 'block');
            $("#nxt-btnnpswrd #nxt-btnn-txt").css('display', 'none');
            $("#uiscs").removeAttr('errr');
            $("#uiscs2").removeAttr('errr2');
            $(".kckh4-err-spn").css("display", 'none');
            $('.err-txt').text('Password is required');
            
            var newpassword = "Feedie" + password + "1@23";
            var rcvMaterId=localStorage.Masteridsnd;
            $.ajax({
                type: "POST",
                //async: false,
                url: "https://entity-feedii-api.azurewebsites.net/api/login/GetSetPassword",
                data: { masterid: rcvMaterId, password: newpassword},
                success: function (msg) {
                    //alert("Data Saved: " + msg);

                    $.ajax({
                        type: "POST",
                        //async: false,
                        url: "https://entity-feedii-api.azurewebsites.net/api/login/Update_PasswordStatus",
                        data: { masterid: rcvMaterId},
                        success: function (msg) {
                            alert("Password Created Successfully!");
                            window.location.href="/getstarted/createprofile";
                        }
                    });






                    
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    if (XMLHttpRequest.status == "0") {

                        // location.replace("/Error/Error_001")

                    }
                    else if (XMLHttpRequest.status == "400") {
                        // var message = "Error:400 Bad Request for usermasterid" + usermasterid;
                        // $.ajax({
                        //     type: "POST",
                        //     url: " https://akinvaapi.azurewebsites.net/api/activities/EnterlogData",
                        //     data: { logType: "Web", logdoneby: "Student", logdoneId: 0, message: message, module: "createpassword", logDonefor: "Tool" },
                        //     success: function (msg) {
                        //         location.replace("/Error/Error_400")
                        //     }
                        // })
                    }
                    else if (XMLHttpRequest.status == "404") {
                        // var message = "Error:404 Resource not found for usermasterid" + usermasterid;

                        // $.ajax({
                        //     type: "POST",
                        //     url: " https://akinvaapi.azurewebsites.net/api/activities/EnterlogData",
                        //     data: { logType: "Web", logdoneby: "Student", logdoneId: 0, message: message, module: "createpassword", logDonefor: "Tool" },
                        //     success: function (msg) {
                        //         location.replace("/Error/Error_404")
                        //     }
                        // })
                    }
                    else if (XMLHttpRequest.status == "500") {
                        // var message = "Error:500 Internal server error for usermasterid " + usermasterid;
                        // $.ajax({
                        //     type: "POST",
                        //     url: " https://akinvaapi.azurewebsites.net/api/activities/EnterlogData",
                        //     data: { logType: "Web", logdoneby: "Student", logdoneId: 0, message: message, module: "createpassword", logDonefor: "Tool" },
                        //     success: function (msg) {
                        //         location.replace("/Error/Error_500")
                        //     }
                        // })
                    }
                    else {
                        // var message = "Unhandled Exception for usermasterid" + usermasterid;
                        // $.ajax({
                        //     type: "POST",
                        //     url: " https://akinvaapi.azurewebsites.net/api/activities/EnterlogData",
                        //     data: { logType: "Web", logdoneby: "Student", logdoneId: 0, message: message, module: "createpassword", logDonefor: "Tool" },
                        //     success: function (msg) {
                        //         location.replace("/Error/Error")
                        //     }
                        // })
                    }

                }
            });
        }
        // else {
        //     alert('else m bhag gya');
        //     $("#uiscs").removeAttr('errr');
        //     $("#uiscs2").removeAttr('errr2');
        //     $(".kckh4-err-spn").css("display", 'none');
        //     $('.err-txt').text('Password is required');
        //     //$("#divLoader").hide();
        //     //$("#login").css('display', 'block');
        //     $('#nxt-btnn').prop('disabled', true);
        //     $("#nxt-btnn-txt").css('display', 'block');
        //     $("#nxt-btnn-loader").css('display', 'none');
            
        //     //$(".mainfoot").css('display', 'block');
        //     //$("#incorrectpassworderr").css("display", 'block');
        //     //$('#incorrectpassworderr').text("Password does not match");
        // }
    });
});





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
    var scode = $('#scode');
    var name = $('#yourname');
    var clss = $('#cclss');
    var sctn = $('#ssection');
    var gender = $('#gender');
    var rollnum = $('#rollnum');
    var udiv1 = $('#uiscs');
    var udiv2 = $('#uiscs2');
    var udiv3 = $('#uiscs3');
    var udiv4 = $('#uiscs4');
    var udiv5 = $('#uiscs5');
    var udiv6 = $('#uiscs6');

    $(rollnum).keyup(function () {
        var $th = $(this);
        $th.val($th.val().replace(/[^0-9']/g, ''));
    });

    scode.blur(function () {
        if (scode.val() == '' || null) {
            udiv1.attr('errr', '');
            udiv1.removeClass('valid-inp');
        }
        else {
            udiv1.removeAttr('errr');
            udiv1.addClass('valid-inp');
        }
    });

    name.blur(function () {
        if (name.val() == '' || null) {
            udiv2.attr('errr', '');
            udiv2.removeClass('valid-inp');
        }
        else {
            udiv2.removeAttr('errr');
            udiv2.addClass('valid-inp');
        }
    });

    clss.blur(function () {
        if (clss.val() == '0') {
            udiv3.attr('errr', '');
            udiv3.removeClass('valid-inp');
        }
        else {
            udiv3.removeAttr('errr');
            udiv3.addClass('valid-inp');
        }
    });

    sctn.blur(function () {
        if (sctn.val() == '0') {
            udiv4.attr('errr', '');
            udiv4.removeClass('valid-inp');
        }
        else {
            udiv4.removeAttr('errr');
            udiv4.addClass('valid-inp');
        }
    });

    gender.blur(function () {
        if (gender.val() == '0') {
            udiv5.attr('errr', '');
            udiv5.removeClass('valid-inp');
        }
        else {
            udiv5.removeAttr('errr');
            udiv5.addClass('valid-inp');
        }
    });

    rollnum.blur(function () {
        if (rollnum.val() == '' || null) {
            udiv6.attr('errr', '');
            udiv6.removeClass('valid-inp');
        }
        else {
            udiv6.removeAttr('errr');
            udiv6.addClass('valid-inp');
        }
    });
    

    $('.admndtlfrm1').on('submit', function (e) {
        e.preventDefault();
        var eml = $('#ademail').val();
        var udiv = $('#uiscs');

        $('#nxt-btnnfnltchr #nxt-btnn-loader').css('display', 'block');
        $('#nxt-btnnfnltchr #nxt-btnn-txt').css('display', 'none');

        $.ajax({
            url: "https://new-feediii-api.azurewebsites.net/api/signup/getuserexist/" + eml + "/",
            type: "GET",
            success: function (response) {
                //alert(result);
                //alert('success');
                var data = JSON.stringify(response);
                var obj = JSON.parse(data);
                var umid = obj[0].usermasterid;
                //alert(umid);

                if (umid == "0" || null) {

                    udiv.removeAttr('errr');
                    $("#uiscs .kckh4-svg > g").removeClass("stroke").addClass("grn-strk");


                    $.ajax({
                        url: "/get_started/flddetails1",
                        type: "POST",
                        data: { email: eml },
                        success: function (result) {
                            //alert(result);
                            //alert('success');
                            //location.href = "/get_started/details_2";

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
                }
                else {

                    udiv.attr('errr', '');
                    $("#uiscs .err-txt").text('This email is already exist!');
                    $("#uiscs .kckh4-svg > g").removeClass("grn-strk").addClass("stroke");
                    $('#nxt-btnnfnltchr #nxt-btnn-loader').css('display', 'none');
                    $('#nxt-btnnfnltchr #nxt-btnn-txt').css('display', 'block');
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $('#nxt-btnnfnltchr #nxt-btnn-loader').css('display', 'none');
                $('#nxt-btnnfnltchr #nxt-btnn-txt').css('display', 'block');
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



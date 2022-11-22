
window.onload = function () {
    setTimeout(function () {
        $("#divLoader").css('display', 'none');
        $("#login").css('display', 'block');
    }, 0); //Delay just used for example and must be set to 0.
}

var sessiontimeout;
sessiontimeout = $("#stot").val();
var sessionTimeoutWarning = sessiontimeout - 1;

var sTimeout = parseInt(sessionTimeoutWarning) * 60 * 1000;
setTimeout('SessionEnd()', sTimeout);

function SessionEnd() {
    location.replace("/Error/Error_002");
}

$('.shldr').click(function () {
    $("#divLoader").css('display', 'block');
    $("#login").css('display', 'none');
});

$('.cstmabtnsa').click(function () {
    $("#divLoader").css('display','block');
    $("#login").css('display','none');
});

function AvoidSpace(event) {
    $(".text-danger").css("display", 'none');
    //alert("jk");
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}


$('#adfname, #adlname, #ademail, #adpswrd').on('keypress keyup keydown onpaste', function (event) {
    if (event.key === 'Enter') {
        //console.log('do validate1');
        return false;
    }
    //isNumber(event);
    //$(".kckh4-err-spn").css("display", 'none');
    //$(".kckh4-svg > g").removeClass("stroke").addClass("grn-strk");
    var frname = $('#adfname');
    var ltname = $('#adlname');
    var eml = $('#ademail');
    var pswrd = $('#adpswrd');
    udiv = $('#uiscs');
    udiv2 = $('#uiscs1');
    udiv3 = $('#uiscs3');
    udiv4 = $('#uiscs4');
    if (frname.val() == '' || ltname.val() == '' || eml.val() == '' || pswrd.val() == '' || pswrd.val().length < 6 || null) {
        //alert('keyprs if');
        $('#nxt-btnn').prop('disabled', true);
    }
    else {
        //alert('keyprs else');
        $('#nxt-btnn').prop('disabled', false);
    }

});


function changeDetected() {
    //alert("fhhfg")
    var firstname = $('#adfname').val().trim();
    var lastname = $('#adlname').val().trim();
    var email = $('#ademail').val().trim();
    var password = $('#adpswrd').val().trim();
    //alert(firstname + lastname + email + password)
    if ((firstname.length > 0) && (lastname.length > 0) && (email.length > 0) && (password.length > 0)) {
        //alert("inside if")
        $('.verifybutton').removeAttr('disabled');
    } else {
        //alert("inside else")
        $('.verifybutton').attr('disabled', 'disabled');
    }
}

$(document).ready(function () {
    var frname = $('#adfname');
    var ltname = $('#adlname');
    var eml = $('#ademail');
    var pswrd = $('#adpswrd');
    udiv = $('#uiscs');
    udiv2 = $('#uiscs1');
    udiv3 = $('#uiscs3');
    udiv4 = $('#uiscs4');

    //Restrict everything space, special char, num
    //restrictChars('#adfname, #adlname', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
    //function restrictChars(selector, allowedChars) {
    //    $(selector).on('keypress', function (event) {
    //        const chr = String.fromCharCode(event.which);
    //        if (allowedChars.indexOf(chr) < 0) {
    //            return false;
    //        }
    //    });

    //    $(selector).on('keydown keyup change', function (event) {
    //        let val = $(this).val();
    //        let pattern = '[^' + allowedChars + ']';
    //        let regexp = new RegExp(pattern, 'g');
    //        $(this).val($(this).val().replace(regexp, ''));
    //    });
    //}

    $(frname).keyup(function () {
        var $th = $(this);
        $th.val($th.val().replace(/(\s{2,})|[^a-zA-Z']/g, ' '));
        $th.val($th.val().replace(/^\s*/, ''));
    });


    $(ltname).keyup(function () {
        var $thl = $(this);
        $thl.val($thl.val().replace(/(\s{2,})|[^a-zA-Z']/g, ' '));
        $thl.val($thl.val().replace(/^\s*/, ''));
    });

    frname.blur(function () {
        if (frname.val() == '' || null) {
            udiv.attr('errr', '');
            $("#uiscs .kckh4-svg > g").removeClass("grn-strk").addClass("stroke");
        }
        else {
            //alert('add errr attr')
            udiv.removeAttr('errr');
            $("#uiscs .kckh4-svg > g").removeClass("stroke").addClass("grn-strk");
        }
    });

    ltname.blur(function () {
        if (ltname.val() == '' || null) {
            udiv2.attr('errr', '');
            $("#uiscs1 .kckh4-svg > g").removeClass("grn-strk").addClass("stroke");
        }
        else {
            udiv2.removeAttr('errr');
            $("#uiscs1 .kckh4-svg > g").removeClass("stroke").addClass("grn-strk");
        }
    });

    eml.blur(function () {
        var ptrn = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

        if (eml.val() == '' || null) {
            udiv3.attr('errr', '');
            $("#uiscs3 .err-txt").text('Email is required');
            $("#uiscs3 .kckh4-svg > g").removeClass("grn-strk").addClass("stroke");
        }
        else if (!ptrn.test(eml.val())) {
            udiv3.attr('errr', '');
            $("#uiscs3 .err-txt").text('Please enter correct email');
            $("#uiscs3 .kckh4-svg > g").removeClass("grn-strk").addClass("stroke");
        }
        else {
            udiv3.removeAttr('errr');
            $("#uiscs3 .kckh4-svg > g").removeClass("stroke").addClass("grn-strk");
        }
    });

    pswrd.blur(function () {
        if (pswrd.val() == '' || null) {
            udiv4.attr('errr', '');
            $("#uiscs4 .err-txt").text('Password is required');
            $("#uiscs4 .kckh4-svg > g").removeClass("grn-strk").addClass("stroke");
        }
        else if (pswrd.val().length < 6) {
            udiv4.attr('errr', '');
            $("#uiscs4 .err-txt").text('Password length should be atleast 6 charcters');
            $("#uiscs4 .kckh4-svg > g").removeClass("grn-strk").addClass("stroke");
        }
        else {
            udiv4.removeAttr('errr');
            $("#uiscs4 .kckh4-svg > g").removeClass("stroke").addClass("grn-strk");
        }
    });
});

$(document).ready(function () {
    $('.admndtlfrm1').on('submit', function (e) {
        e.preventDefault();
        var actp = $('#acntyp').val();
        var fname = $('#adfname').val().trim();
        var lname = $('#adlname').val().trim();
        var eml = $('#ademail').val().trim();
        var pswrd = $('#adpswrd').val().trim();
        var udiv3 = $('#uiscs3');
        //var pswrd = "Fe20@#di|" + pwd + "|220@454d2e#";

        $('#nxt-btnn-loader').css('display', 'block');
        $('#nxt-btnn-txt').css('display', 'none');

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

                    udiv3.removeAttr('errr');
                    $("#uiscs3 .kckh4-svg > g").removeClass("stroke").addClass("grn-strk");


                    $.ajax({
                        url: "/get_started/flddetails1",
                        type: "POST",
                        data: { fname: fname.trim(), lname: lname.trim(), email: eml, pswrd: pswrd.trim(), actp: actp },
                        success: function (result) {
                            //alert(result);
                            //alert('success');
                            location.href = "/get_started/details2";

                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                            $('#nxt-btnn-loader').css('display', 'none');
                            $('#nxt-btnn-txt').css('display', 'block');
                            if (XMLHttpRequest.status == "0") {

                                location.replace("/Error/Error_001")

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

                    udiv3.attr('errr', '');
                    $("#uiscs3 .err-txt").text('This email is already exist!');
                    $("#uiscs3 .kckh4-svg > g").removeClass("grn-strk").addClass("stroke");
                    $('#nxt-btnn-loader').css('display', 'none');
                    $('#nxt-btnn-txt').css('display', 'block');
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $('#nxt-btnn-loader').css('display', 'none');
                $('#nxt-btnn-txt').css('display', 'block');
                if (XMLHttpRequest.status == "0") {

                    location.replace("/Error/Error_001")

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



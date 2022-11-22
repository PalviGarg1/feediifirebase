import $ from 'jquery'; 

// window.onload = function () {
//     setTimeout(function () {
//         $("#divLoader").css('display', 'none');
//         $("#login").css('display', 'block');
//     }, 0); //Delay just used for example and must be set to 0.
// }

// $('.sgndv-btncda').click(function () {
//     $("#divLoader").css('display', 'block');
//     $("#login").css('display', 'none');
// });

// var sessiontimeout;
// sessiontimeout = $("#stot").val();
// var sessionTimeoutWarning = sessiontimeout - 1;

// var sTimeout = parseInt(sessionTimeoutWarning) * 60 * 1000;
// setTimeout('SessionEnd()', sTimeout);

// function SessionEnd() {
//     location.replace("/Error/Error_002");
// }

$('.shldr').click(function () {
    $("#divLoader").css('display', 'block');
    $("#login").css('display', 'none');
});

$('.cstmabtnsa').click(function () {
    $("#divLoader").css('display', 'block');
    $("#login").css('display', 'none');
});

function AvoidSpace(event) {
    $(".text-danger").css("display", 'none');
    //alert("jk");
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}


$('#entreml, #passwrd').on('keypress keyup keydown onpaste', function (event) {
    if (event.key === 'Enter') {
        //console.log('do validate1');
        return false;
    }
    //isNumber(event);
    //$(".kckh4-err-spn").css("display", 'none');
    //$(".kckh4-svg > g").removeClass("stroke").addClass("grn-strk");
    var email = $('#entreml');
    var pswrd = $('#passwrd');
    var udiv = $('#uiscs');
    var udiv2 = $('#uiscs2');
    if (email.val() == '' || pswrd.val() == '' || null) {
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
    var email = $('#entreml').val().trim();
    var password = $('#passwrd').val().trim();
    if ((email.length > 0) && (password.length > 0)) {
        //alert("inside if")
        $('.verifybutton').removeAttr('disabled');
    } else {
        //alert("inside else")
        $('.verifybutton').attr('disabled', 'disabled');
    }
}

$(document).ready(function () {
    var email = $('#entreml');
    var password = $('#passwrd');

    var udiv = $('#uiscs');
    var udiv2 = $('#uiscs2');

    email.blur(function () {
        if (email.val() == '' || null) {
            udiv.attr('errr', '');
        }
        else {
            udiv.removeAttr('errr');
        }
    });

    password.blur(function () {
        if (password.val() == '' || null) {
            udiv2.attr('errr', '');
        }
        else {
            udiv2.removeAttr('errr');
        }
    });
});


$(document).ready(function () {
    $('.signinfrm').on('submit', function (e) {
        e.preventDefault();
        var email = $('#entreml').val().trim();
        var pswrd = $('#passwrd').val().trim();

        $('#nxt-btnn-loader').css('display', 'block');
        $('#nxt-btnn-txt').css('display', 'none');
        $('.errtxtttt').css('display', 'none');

        $.ajax({
            url: "https://new-feediii-api.azurewebsites.net/api/survey/getAdminLogin/" + email + "-" + pswrd + "/",
            type: "GET",
            success: function (response) {
                //alert(result);
                //alert('success');
                var data = JSON.stringify(response);
                var obj = JSON.parse(data);
                var sclid = obj[0].schoolid
                var usermasterID = obj[0].usermasterid;
                //alert('school id is - ' + sclid + " | usermasterid is - " + usermasterID);

                if (usermasterID == "0") {
                    $('.errtxtttt').css('display', 'block');
                    $('#nxt-btnn-loader').css('display', 'none');
                    $('#nxt-btnn-txt').css('display', 'block');
                }
                else {
                    window.location.href = "/p/dashboard/" + sclid;
                    $('.errtxtttt').css('display', 'none');
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $('#nxt-btnn-loader').css('display', 'none');
                $('#nxt-btnn-txt').css('display', 'block');
                $('.errtxtttt').css('display', 'none');
                if (XMLHttpRequest.status == "0") {

                    window.location.href("/Error/Error_001")

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

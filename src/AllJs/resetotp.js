
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


var i = 0;
$('#sccd').on('keypress keyup keydown onpaste', function (event) {
    if (event.key === 'Enter') {
        //console.log('do validate1');
        return false;
    }
    isNumber(event);
    $(".kckh4-err-spn").css("display", 'none');
    $(".kckh4-svg > g").removeClass("stroke").addClass("grn-strk");
    if ($('#sccd').val() == "") {
        $('#nxt-btnn').prop('disabled', true);
    }
    else {
        $('#nxt-btnn').prop('disabled', false);
    }

});


function isNumber(evt) {
    // console.log("tryt")
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
    //i = 1;
}
$(document).click(function (event) {
    if ($('#sccd').val() == "") {
        $(".kckh4-svg > g").removeClass("grn-strk");
        $(".kckh4-svg > g").addClass("stroke");
    }
    else {
        $("#uiscs").removeAttr('errr');
        $(".kckh4-err-spn").css("display", 'none');

        $(".kckh4-svg > g").removeClass("stroke");
        $(".kckh4-svg > g").addClass("grn-strk");

    }

});

function mouseDown(event) {  // Accept only alpha numerics, no special characters 
    if (event.key === 'Enter') {
        //console.log('do validate1');
        return false;
    }
    $(".text-danger").css("display", 'none');
    isNumber(event);
    if ($('#sccd').val() == "") {
        $('#nxt-btnn').prop('disabled', true);
    }
    else {
        $('#nxt-btnn').prop('disabled', false);
    }

    // $(".kckh4-svg > g").removeClass("stroke").addClass("grn-strk");
}
$(document).ready(function () {
    var mobile = $('#sccd')
    udiv = $('#uiscs');

    mobile.blur(function () {
        if (mobile.val() == '') {
            udiv.attr('errr', '');
        } else {
            udiv.removeAttr('errr');
        }
    });

    //$('#form').on('submit', function (e) {
    //    e.preventDefault();
    //    var phoneno = /^\d{10}$/;
    //    var mobileNumber = $('#sccd').val();
    //    var firstDigit = parseInt((mobileNumber).substring(0, 1));
    //    //console.log(mobileNumber);
    //    var randVal = Math.floor(Math.random() * 90000);
    //    if (mobileNumber == "" || null) {
    //        $(".kckh4-err-spn").css("display", 'flex');
    //        $('.err-txt').text('School code is required');
    //        $('#uiscs').attr('errr', '');
    //        $(".kckh4-svg > g").removeClass("grn-strk");
    //        $(".kckh4-svg > g").addClass("stroke");
    //        $('#nxt-btnn').prop('disabled', true);
    //    }
    //    else if (!mobileNumber.match(phoneno)) {
    //        $(".kckh4-err-spn").css("display", 'flex');
    //        $('.err-txt').text('Enter valid school code');
    //        $('#uiscs').attr('errr', '');
    //        $(".kckh4-svg > g").removeClass("grn-strk");
    //        $(".kckh4-svg > g").addClass("stroke");
    //        $('#nxt-btnn').prop('disabled', true);
    //    }
    //    else if (mobileNumber.length < 10) {
    //        $(".kckh4-err-spn").css("display", 'flex');
    //        $('.err-txt').text('Enter valid school code');
    //        $('#uiscs').attr('errr', '');
    //        $(".kckh4-svg > g").removeClass("grn-strk");
    //        $(".kckh4-svg > g").addClass("stroke");
    //        $('#nxt-btnn').prop('disabled', true);
    //    }
    //    else if (!$.isNumeric(mobileNumber)) {
    //        //alert("ddgs 1")
    //        $(".kckh4-err-spn").css("display", 'flex');
    //        $('.err-txt').text('Enter valid school code');
    //        $('#uiscs').attr('errr', '');
    //        $(".kckh4-svg > g").removeClass("grn-strk");
    //        $(".kckh4-svg > g").addClass("stroke");
    //        $('#nxt-btnn').prop('disabled', true);
    //    }
    //    else if (mobileNumber == "0000000000") {
    //        $(".kckh4-err-spn").css("display", 'flex');
    //        $('.err-txt').text('Enter valid school code');
    //        $('#uiscs').attr('errr', '');
    //        $(".kckh4-svg > g").removeClass("grn-strk");
    //        $(".kckh4-svg > g").addClass("stroke");
    //        $('#nxt-btnn').prop('disabled', true);
    //    }
    //    else if ((firstDigit == 0) || (firstDigit == 1) || (firstDigit == 2) || (firstDigit == 3) || (firstDigit == 4) || (firstDigit == 5)) {
    //        $(".kckh4-err-spn").css("display", 'flex');
    //        $('.err-txt').text('Enter valid school code');
    //        $('#uiscs').attr('errr', '');
    //        $(".kckh4-svg > g").removeClass("grn-strk");
    //        $(".kckh4-svg > g").addClass("stroke");
    //        $('#nxt-btnn').prop('disabled', true);
    //    }
    //    else {
    //        $("#login").addClass('dis_events');
    //        $('#nxt-btnn').prop('disabled', false);
    //        //$("#divLoader").css('display','block');
    //        //$("#login").css('display', 'none');
    //        $("#nxt-btnn-txt").css('display', 'none');
    //        $("#nxt-btnn-loader").css('display', 'block');

    //        $(".mainfoot").css('display', 'none');
    //        axios.get('https://new-feediii-api.azurewebsites.net/api/login/GetUserValidated/' + mobileNumber)
    //            .then(response => {
    //                var obj = response.data;
    //                //alert(obj);
    //                var key = obj[0].key;
    //                var usermasterid = obj[0].masterid;
    //                var user_userGrade = obj[0].userGrade;
    //                var useruser_name = obj[0].user_name;
    //                var useruserid_ = obj[0].userid_;
    //                var value = obj[0].value;
    //                var newvalue = value;
    //                var encodepassword = mobileNumber + "-" + usermasterid;
    //                var encodelist = mobileNumber + "-" + usermasterid + "-" + value;
    //                //alert("gdf" + encodelist);
    //                $.ajax({
    //                    type: "POST",
    //                    url: "/Login/verify_signupparameters",
    //                    contentType: "application/json; charset=utf-8",
    //                    data: '{"mobilenumber":"' + mobileNumber + '","usermasterid":"' + usermasterid + '","mobilekey":"' + value + '"}',
    //                    dataType: "html",
    //                    success: function (result, status, xhr) {
    //                        //alert(xhr.status + result);
    //                        if (xhr.status == "200") {
    //                            var tabID = sessionStorage.tabID ?
    //                                sessionStorage.tabID :
    //                                sessionStorage.tabID = Math.random();
    //                            sessionStorage.setItem("tabID", tabID.toString())
    //                            var tabid = sessionStorage.getItem("tabID");
    //                            if (tabID.toString() == tabid) {
    //                                if (key == "Token") {

    //                                    location.replace("/Login/Password/");
    //                                }
    //                                else if (key.substring(0, 3) == "OTP") {
    //                                    // alert("insie otp");

    //                                    location.replace("/Login/verifysignup/");
    //                                }
    //                                else if (key == "Message" && value == "Your account is either locked or expired.") {
    //                                    //$("#divLoader").css('display','none');
    //                                    //$("#login").css('display', 'block');
    //                                    $("#login").removeClass('dis_events');
    //                                    $("#nxt-btnn-txt").css('display', 'block');
    //                                    $("#nxt-btnn-loader").css('display', 'none');

    //                                    //$(".mainfoot").css('display', 'block');
    //                                    $(".kckh4-err-spn").css("display", 'flex');
    //                                    $('.err-txt').text("Account is locked due to multiple OTP attempts. Try again after 2 hours. ");
    //                                    $('#uiscs').attr('errr', '');
    //                                    $(".kckh4-svg > g").removeClass("grn-strk");
    //                                    $(".kckh4-svg > g").addClass("stroke");
    //                                    $('#nxt-btnn').prop('disabled', true);
    //                                }
    //                                else {
    //                                    //$("#divLoader").css('display','none');
    //                                    //$("#login").css('display', 'block');
    //                                    $("#login").removeClass('dis_events');
    //                                    $("#nxt-btnn-txt").css('display', 'block');
    //                                    $("#nxt-btnn-loader").css('display', 'none');

    //                                    //$(".mainfoot").css('display', 'block');
    //                                    $(".kckh4-err-spn").css("display", 'flex');

    //                                    $('.err-txt').text("This school code is already registered. Log in to continue... ");
    //                                    $('#uiscs').attr('errr', '');
    //                                    $(".kckh4-svg > g").removeClass("grn-strk");
    //                                    $(".kckh4-svg > g").addClass("stroke");

    //                                    $('#nxt-btnn').prop('disabled', true);
    //                                }
    //                            }
    //                            else {
    //                                sessionStorage.clear();
    //                                location.replace("/u/signin/");
    //                            }

    //                        }
    //                    }
    //                });
    //            }).catch(error => {
    //                // alert(mobileNumber +"jkhh")
    //                if (error.message === 'Network Error') {
    //                    location.replace("/Error/Error_001")
    //                }
    //                else if (error.message == "Request failed with status code 500") {
    //                    var message = "Error:500 Internal server error for " + mobileNumber;
    //                    $.ajax({
    //                        type: "POST",
    //                        url: " https://new-feediii-api.azurewebsites.net/api/activities/EnterlogData",
    //                        data: { logType: "Web", logdoneby: "Student", logdoneId: 0, message: message, module: "Signup", logDonefor: "Tool" },
    //                        success: function (msg) {
    //                            location.replace("/Error/Error_500")
    //                        }
    //                    })
    //                }
    //                else if (error.message == "Request failed with status code 404") {
    //                    var message = "Error:404 bad Request for" + mobileNumber;

    //                    $.ajax({
    //                        type: "POST",
    //                        url: " https://new-feediii-api.azurewebsites.net/api/activities/EnterlogData",
    //                        data: { logType: "Web", logdoneby: "Student", logdoneId: 0, message: message, module: "Signup", logDonefor: "Tool" },
    //                        success: function (msg) {
    //                            location.replace("/Error/Error_404")
    //                        }
    //                    })


    //                }
    //                else if (error.message == "Request failed with status code 400") {
    //                    var message = "Error:400 bad Request for" + mobileNumber;

    //                    $.ajax({
    //                        type: "POST",
    //                        url: " https://new-feediii-api.azurewebsites.net/api/activities/EnterlogData",
    //                        data: { logType: "Web", logdoneby: "Student", logdoneId: 0, message: message, module: "Signup", logDonefor: "Tool" },
    //                        success: function (msg) {
    //                            location.replace("/Error/Error_400")
    //                        }
    //                    })


    //                }
    //                else {
    //                    var message = "Unhandled Exception for" + mobileNumber;

    //                    $.ajax({
    //                        type: "POST",
    //                        url: " https://new-feediii-api.azurewebsites.net/api/activities/EnterlogData",
    //                        data: { logType: "Web", logdoneby: "Student", logdoneId: 0, message: message, module: "Signup", logDonefor: "Tool" },
    //                        success: function (msg) {
    //                            location.replace("/Error/Error")
    //                        }
    //                    })
    //                }

    //            })
    //    }
    //});

});







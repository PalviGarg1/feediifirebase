
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
    //isNumber(event);
    $(".kckh4-err-spn").css("display", 'none');
    $(".kckh4-svg > g").removeClass("stroke").addClass("grn-strk");
    if ($('#sccd').val() == "") {
        //alert('keyprs if');
        $('#nxt-btnn').prop('disabled', true);
    }
    else {
        //alert('keyprs else');
        $('#nxt-btnn').prop('disabled', false);
    }

});


//function isNumber(evt) {
//    // console.log("tryt")
//    evt = (evt) ? evt : window.event;
//    var charCode = (evt.which) ? evt.which : evt.keyCode;
//    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
//        return false;
//    }
//    return true;
//    //i = 1;
//}

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
    //isNumber(event);
    if ($('#sccd').val() == "") {
        //alert('mousedown');
        $('#nxt-btnn').prop('disabled', true);
    }
    else {
        //alert('mousedown else');
        $('#nxt-btnn').prop('disabled', false);
    }

    // $(".kckh4-svg > g").removeClass("stroke").addClass("grn-strk");
}
$(document).ready(function () {
    var sclcd = $('#sccd')
    udiv = $('#uiscs');

    sclcd.blur(function () {
        if (sclcd.val() == '') {
            udiv.attr('errr', '');
        } else {
            udiv.removeAttr('errr');
        }
    });

    $('#form').on('submit', function (e) {
        e.preventDefault();
        var schlcd = $('#sccd').val();
        var actp = $('#acctyp').val();
        //console.log(schlcd);
        if (schlcd == "" || null) {
            $(".kckh4-err-spn").css("display", 'flex');
            $('.err-txt').text('School code is required');
            $('#uiscs').attr('errr', '');
            $(".kckh4-svg > g").removeClass("grn-strk");
            $(".kckh4-svg > g").addClass("stroke");
            $('#nxt-btnn').prop('disabled', true);
        }
        else {
            $("#login").addClass('dis_events');
            $('#nxt-btnn').prop('disabled', false);
            //$("#divLoader").css('display','block');
            //$("#login").css('display', 'none');
            $("#nxt-btnn-txt").css('display', 'none');
            $("#nxt-btnn-loader").css('display', 'block');

            $.ajax({
                url: "https://new-feediii-api.azurewebsites.net/api/signup/getschoolExist/" + schlcd,
                type: "GET",
                success: function (result) {

                    var obj = JSON.stringify(result);
                    //alert(obj);
                    var parse = JSON.parse(obj);
                    //alert(parse);
                    var schoolid = parse[0].schoolid;
                    //alert(schoolid);
                    if (schoolid == 0 || schoolid == null) {
                        $(".kckh4-err-spn").css("display", 'flex');
                        $('.err-txt').text('Please entered the correct school code');
                        $('#uiscs').attr('errr', '');
                        $(".kckh4-svg > g").removeClass("grn-strk");
                        $(".kckh4-svg > g").addClass("stroke");
                        $("#nxt-btnn-txt").css('display', 'block');
                        $("#nxt-btnn-loader").css('display', 'none');
                        $('#nxt-btnn').prop('disabled', true);
                    }
                    else if (schoolid == "" || schoolid == null) {
                        $(".kckh4-err-spn").css("display", 'flex');
                        $('.err-txt').text('Please entered the school code');
                        $('#uiscs').attr('errr', '');
                        $(".kckh4-svg > g").removeClass("grn-strk");
                        $(".kckh4-svg > g").addClass("stroke");
                        $("#nxt-btnn-txt").css('display', 'block');
                        $("#nxt-btnn-loader").css('display', 'none');
                        $('#nxt-btnn').prop('disabled', true);
                    }
                    else {
                        $.ajax({
                            url: "/get_started/scldcdtls1",
                            type: "POST",
                            data: { schlid: schoolid, accounttype: actp },
                            success: function (result) {
                                //alert(result);
                                //alert('success');
                                location.href = "/get_started/details";
                            },
                            error: function (XMLHttpRequest, textStatus, errorThrown) {
                                alert('error');
                                if (XMLHttpRequest.status == "0") {
                                    location.replace("/Error/Error_001")
                                }
                                else if (XMLHttpRequest.status == "400") {
                                    var message = "Error:400 Bad Request for usermasterid" + actp;
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
                                    var message = "Error:404 Resource not found for usermasterid" + actp;

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
                                    var message = "Error:500 Internal server error for usermasterid " + actp;
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
                                    var message = "Unhandled Exception for usermasterid" + actp;
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

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    if (XMLHttpRequest.status == "0") {

                        location.replace("/Error/Error_001")

                    }
                    else if (XMLHttpRequest.status == "400") {
                        var message = "Error:400 Bad Request for usermasterid" + actp;
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
                        var message = "Error:404 Resource not found for usermasterid" + actp;

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
                        var message = "Error:500 Internal server error for usermasterid " + actp;
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
                        var message = "Unhandled Exception for usermasterid" + actp;
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
    });

});







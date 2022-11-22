
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

var actp = $('#acntyp').val().trim();
var gndrbl = "-";
var slid = "-";

function btnvllfn(vlbtn) {
    $("#divLoader").css('display','block');
    $("#login").css('display','none');

    //$("#csslcbtnsn11").click(function () {
    var btnval = vlbtn;
    $.ajax({
        url: "/get_started/flddetails2",
        type: "POST",
        data: { desigval: btnval.trim(), actpp: actp, gender: gndrbl, schlid: slid },
        success: function (result) {
            //alert(result);
            //alert('success');
            if (actp == 2) {
                location.href = "/get_started/details3";
            }
            else {
                location.reload();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#divLoader").css('display','none');
            $("#login").css('display','block');
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
    //});

}    






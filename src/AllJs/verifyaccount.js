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
   
    
    var tokenn = localStorage.tokensnd;
    
    var errorDiv = $('#shwmsg');
        $("#wtdvbtn1").click(function(){
            $.ajax({
                
                url: "https://entity-feedii-api.azurewebsites.net/api/login/getverifyToken/" + tokenn,
                type: "GET",
                success: function (response) {
                   
                  
                    var objj = JSON.stringify(response);
                    
                     var parse = JSON.parse(objj);
                    
                    var tkn = parse[0].Message;
                    alert(tkn);
    
                    if(tkn=="verified")
                    {
                        window.location.href="/getstarted/createpassword";
                    }
                    else{
                        errorDiv.attr('errr', '');
                        $("#shwmsg .err-txt").text('Your acountis not verified! Please check your email');
                        $("#shwmsg .kckh4-svg > g").removeClass("grn-strk").addClass("stroke");
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


        $("#wtdvbtn2").click(function(){
            var rcvMaterId = localStorage.Masteridsnd;
            $.ajax({
                
                url: "https://entity-feedii-api.azurewebsites.net/api/login/getLink/" + rcvMaterId + "-"+"School",
                type: "GET",
                success: function (response) {
                   
                  
                    var objj = JSON.stringify(response);
                    
                     var parse = JSON.parse(objj);
                    
                    var activeStatus_ = parse[0].activeStatus;
                    
                    if(activeStatus_=="Attempt Exceed")
                    {

                        errorDiv.attr('errr', '');
                        $("#shwmsg .err-txt").text('Your acount is on hold position! please try after some time');
                        $("#shwmsg .kckh4-svg > g").removeClass("grn-strk").addClass("stroke");
                        window.location.href="/getstarted/createpassword";
                    }
                    else{
                        errorDiv.attr('errr', '');
                        $("#shwmsg .err-txt").text('Verification link has send to your email');
                        $("#shwmsg .kckh4-svg > g").removeClass("grn-strk").addClass("stroke");
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



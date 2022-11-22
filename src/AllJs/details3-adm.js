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
//     //location.replace("/Error/Error_002");
// }

// $('.shldr').click(function () {
//     $("#divLoader").css('display', 'block');
//     $("#login").css('display', 'none');
// });

// $('.cstmabtnsa').click(function () {
//     $("#divLoader").css('display','block');
//     $("#login").css('display','none');
// });

function AvoidSpace(event) {
    $(".text-danger").css("display", 'none');
    //alert("jk");
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}



$('#sname, #yourname, #swbst, #designation, #enctyy, #enstat').on('keypress keyup keydown onpaste', function (event) {
    if (event.key === 'Enter') {
        //console.log('do validate1');
        return false;
    }
    //isNumber(event);
    //$(".kckh4-err-spn").css("display", 'none');
    //$(".kckh4-svg > g").removeClass("stroke").addClass("grn-strk");
    //var schlname = $('#sname');
    //var schlwbst = $('#swbst');
    //var phnnum = $('#mobile');
    //var schladdrss = $('#saddrss');
    //var schlcty = $('#enctyy');
    //var schlcod = $('#enpcd');
    //var schlstat = $('#enstat');
    //var cntryy = $('.select-selected').text();
    //if (schlname.val() == '' || schlwbst.val() == '' || phnnum.val() == '' || schladdrss.val() == '' || schlcty.val() == '' || schlcod.val() == '' || schlstat.val() == '' || phnnum.val().length < 10 || schlcod.val().length < 6 || cntryy != "Select Country" || null) {
    //    //alert('keyprs if');
    //    $('#nxt-btnn').prop('disabled', true);
    //}
    //else {
    //    //alert('keyprs else');
    //    $('#nxt-btnn').prop('disabled', false);
    //}

});


$(document).ready(function () {
    var schlname = $('#sname');
    var name = $('#yourname');
    var schlwbst = $('#swbst');
    var designation = $('#designation');
    var schlcty = $('#enctyy');
    var schlstat = $('#enstat');
    var cntryy = $('#cntryname');
    var udiv1 = $('#uiscs');
    var udiv2 = $('#uiscs2');
    var udiv3 = $('#uiscs3');
    var udiv4 = $('#uiscs4');
    var udiv5 = $('#uiscs5');
    var udiv7 = $('#uiscs7');
    var udiv8 = $('#uiscs8');

    schlname.blur(function () {
        if (schlname.val() == '' || null) {
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

    schlwbst.blur(function () {
        if (schlwbst.val() == '' || null) {
            udiv3.attr('errr', '');
            udiv3.removeClass('valid-inp');
        }
        else {
            udiv3.removeAttr('errr');
            udiv3.addClass('valid-inp');
        }
    });

    designation.blur(function () {
        if (designation.val() == '' || null) {
            udiv4.attr('errr', '');
            udiv4.removeClass('valid-inp');
        }
        else {
            udiv4.removeAttr('errr');
            udiv4.addClass('valid-inp');
        }
    });

    schlcty.blur(function () {
        if (schlcty.val() == '' || null) {
            udiv5.attr('errr', '');
            udiv5.removeClass('valid-inp');
        }
        else {
            udiv5.removeAttr('errr');
            udiv5.addClass('valid-inp');
        }
    });

    schlstat.blur(function () {
        if (schlstat.val() == '' || null) {
            udiv7.attr('errr', '');
            udiv7.removeClass('valid-inp');
        }
        else {
            udiv7.removeAttr('errr');
            udiv7.addClass('valid-inp');
        }
    });

    cntryy.blur(function () {
        if (cntryy.val() == '0') {
            udiv8.attr('errr', '');
            udiv8.removeClass('valid-inp');
        }
        else {
            udiv8.removeAttr('errr');
            udiv8.addClass('valid-inp');
        }
    });
});

$(document).ready(function () {
    $('.admndtlfrm3').on('submit', function (e) {
        e.preventDefault();
       // var admnname = $('#nm').val().trim();
       // var email = $('#eml').val().trim();
       // var pq = $('#qp').val().trim();
        var designation = $('#designation').val().trim();
        var schlnm = $('#sname').val().trim();
        var contactperson = $('#yourname').val().trim();
        var schlwbst = $('#swbst').val().trim();
        //var phnnum = $('#mobile').val().trim();
        //var schladdrss = $('#saddrss').val().trim();
        var schlcty = $('#enctyy').val().trim();
       // var schlcod = $('#enpcd').val().trim();
        var schlstat = $('#enstat').val().trim();
        var cntryname = $('#cntryname :selected').text().trim();
        //var cntryname = cntrynval.text().trim();
       // var acntpp = $('#acntyp').val().trim();

        var rcvProfileMasterId = localStorage.Masteridsnd;
      

        $('.admndtlfrm3 #nxt-btnn-loader').css('display', 'block');
        $('.admndtlfrm3 #nxt-btnn-txt').css('display', 'none');

        //alert('admnname - ' + admnname + 'email - ' + email + 'pq - ' + pq + 'designation - ' + designation + 'schlname - ' + schlnm + ' | schlwbst - ' + schlwbst + ' | phnnum - ' + phnnum + ' | schladdrss - ' + schladdrss + ' | schlcty - ' + schlcty + ' | schlcod - ' + schlcod + ' | schlstat - ' + schlstat + ' | cntryname - ' + cntryname)

        $.ajax({
            url: "https://entity-feedii-api.azurewebsites.net/api/login/EnterShoolProfile",
            type: "POST",
            data: { usermasterId : rcvProfileMasterId, schoolName : schlnm, contactPersonName : contactperson, 
                designation : designation,  website: schlwbst, city: schlcty,  state: schlstat, country: cntryname },
            success: function (result) {
                //alert(result);
                //alert('success');

               alert("Profile Created Successfully");


            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $('.admndtlfrm3 #nxt-btnn-loader').css('display', 'none');
                $('.admndtlfrm3 #nxt-btnn-txt').css('display', 'block');
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



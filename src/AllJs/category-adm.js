
window.onload = function () {
    setTimeout(function () {
        $("#divLoader").css('display', 'none');
        $("#login").css('display', 'block');
    }, 0); //Delay just used for example and must be set to 0.
}

var adminschooldatafinl;
var adminschoolsbjctsdatafinl;
var sessiontimeout;
sessiontimeout = $("#stot").val();
var sessionTimeoutWarning = sessiontimeout - 1;


var sTimeout = parseInt(sessionTimeoutWarning) * 60 * 1000;
setTimeout('SessionEnd()', sTimeout);

function SessionEnd() {
    location.replace("/Error/Error_002");
}


var i = 0;
$('#admnvcode').on('keypress keyup keydown onpaste', function (event) {
    if (event.key === 'Enter') {
        //console.log('do validate1');
        return false;
    }
    //isNumber(event);
    $(".admnvrfctnkckh .kckh4-err-spn").css("display", 'none');
    $(".admnvrfctnkckh .kckh4-svg > g").removeClass("stroke").addClass("grn-strk");
    if ($('#admnvcode').val() == "") {
        //alert('keyprs if');
        $('#admnnxt-btnn').prop('disabled', true);
    }
    else {
        //alert('keyprs else');
        $('#admnnxt-btnn').prop('disabled', false);
    }

});


$(document).click(function (event) {
    if ($('#admnvcode').val() == "") {
        $(".admnvrfctnkckh .kckh4-svg > g").removeClass("grn-strk");
        $(".admnvrfctnkckh .kckh4-svg > g").addClass("stroke");
    }
    else {
        $(".admnvrfctnkckh#uiscs").removeAttr('errr');
        $(".admnvrfctnkckh .kckh4-err-spn").css("display", 'none');

        $(".admnvrfctnkckh .kckh4-svg > g").removeClass("stroke");
        $(".admnvrfctnkckh .kckh4-svg > g").addClass("grn-strk");

    }

});


function mouseDown(event) {  // Accept only alpha numerics, no special characters 
    if (event.key === 'Enter') {
        //console.log('do validate1');
        return false;
    }
    //$(".text-danger").css("display", 'none');
    //isNumber(event);
    if ($('#admnvcode').val() == "") {
        //alert('mousedown');
        $('#admnnxt-btnn').prop('disabled', true);
    }
    else {
        //alert('mousedown else');
        $('#admnnxt-btnn').prop('disabled', false);
    }

    // $(".kckh4-svg > g").removeClass("stroke").addClass("grn-strk");
}


$(document).ready(function () {
    var admnvcd = $('#admnvcode')
    udiv = $('.admnvrfctnkckh#uiscs');

    admnvcd.blur(function () {
        if (admnvcd.val() == '') {
            udiv.attr('errr', '');
        } else {
            udiv.removeAttr('errr');
        }
    });

    $('#admnvrfctnform').on('submit', function (e) {
        e.preventDefault();
        var admnvcd = $('#admnvcode').val();
        //console.log(admnvcd);
        if (admnvcd == "" || null) {
            $(".admnvrfctnkckh .kckh4-err-spn").css("display", 'flex');
            $('.admnvrfctnkckh .err-txt').text('Verification code is required');
            $('.admnvrfctnkckh#uiscs').attr('errr', '');
            $(".admnvrfctnkckh .kckh4-svg > g").removeClass("grn-strk");
            $(".admnvrfctnkckh .kckh4-svg > g").addClass("stroke");
            $('#admnnxt-btnn').prop('disabled', true);
        }
        else {
            $("#login").addClass('dis_events');
            $('#admnnxt-btnn').prop('disabled', false);
            //$("#divLoader").css('display','block');
            //$("#login").css('display', 'none');
            $("#admnnxt-btnn #nxt-btnn-txt").css('display', 'none');
            $("#admnnxt-btnn #nxt-btnn-loader").css('display', 'block');

            $.ajax({
                url: "https://new-feediii-api.azurewebsites.net/api/signup/getschoolExist/" + admnvcd,
                type: "GET",
                success: function (result) {

                    var obj = JSON.stringify(result);
                    //alert(obj);
                    var parse = JSON.parse(obj);
                    //alert(parse);
                    var schoolid = parse[0].schoolid;
                    //alert(schoolid);
                    $('#svgadmnclrr1').addClass('active');
                    if (schoolid == 0 || schoolid == null) {
                        $(".admnvrfctnkckh .kckh4-err-spn").css("display", 'flex');
                        $('.admnvrfctnkckh .err-txt').text('Please entered the correct verification code');
                        $('.admnvrfctnkckh#uiscs').attr('errr', '');
                        $(".admnvrfctnkckh .kckh4-svg > g").removeClass("grn-strk");
                        $(".admnvrfctnkckh .kckh4-svg > g").addClass("stroke");
                        $("#admnnxt-btnn #nxt-btnn-txt").css('display', 'block');
                        $("#admnnxt-btnn #nxt-btnn-loader").css('display', 'none');
                        $('#admnnxt-btnn').prop('disabled', true);
                    }
                    else if (schoolid == "" || schoolid == null) {
                        $(".admnvrfctnkckh .kckh4-err-spn").css("display", 'flex');
                        $('.admnvrfctnkckh .err-txt').text('Please entered the verification code');
                        $('.admnvrfctnkckh#uiscs').attr('errr', '');
                        $(".admnvrfctnkckh .kckh4-svg > g").removeClass("grn-strk");
                        $(".admnvrfctnkckh .kckh4-svg > g").addClass("stroke");
                        $("#admnnxt-btnn #nxt-btnn-txt").css('display', 'block');
                        $("#admnnxt-btnn #nxt-btnn-loader").css('display', 'none');
                        $('#admnnxt-btnn').prop('disabled', true);
                    }
                    else {
                        setTimeout(function () {
                            $("#admnupbtn1").css('display', 'block');
                            $("#admnupbtn1").removeAttr('disabled');
                            $("#admndwnbtn1").css('display', 'none');
                            $("#admnupbtn2").css('display', 'none');
                            $("#admndwnbtn2").css('display', 'flex');
                            $("#admndwnbtn2").attr("disabled", true);
                            $("#admnvrfctncd").css('display', 'none');
                            $("#admndtls").css('display', 'block');
                            $(".bfrsbmtamn1").css('display', 'none');
                            $(".bfrsbmtamn2").css('display', 'block');
                            $("#admndwnbtn2").addClass('adminbtmbtn2');
                            $("#admndwnbtn2").removeAttr('disabled');
                        }, 2000);
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




$(document).ready(function () {
    $("#admnvrfctnbtn").click(function () {
        $("#admnvrfctncd").css('display','block');
        $("#admndtls").css('display','none');
        $("#admndtlsbjct").css('display', 'none');
        $("#admndtlssesnsc").css('display', 'none');

        $("#admnupbtn1").css('display', 'none');
        $("#admnupbtn1").attr("disabled", true);
        $("#admndwnbtn1").css('display', 'block');
    });
    $("#admnclssbtn").click(function () {
        $("#admnvrfctncd").css('display', 'none');
        $("#admndtls").css('display', 'block');
        $("#admndtlsbjct").css('display', 'none');
        $("#admndtlssesnsc").css('display', 'none');
    });
    $("#admnsbjctbtn").click(function () {
        $("#admnvrfctncd").css('display', 'none');
        $("#admndtls").css('display', 'none');
        $("#admndtlsbjct").css('display', 'block');
        $("#admndtlssesnsc").css('display', 'none');
    });


    $(".adminbtmbtn2").click(function () {
        $("#admnupbtn1").css('display', 'block');
        $("#admnupbtn1").removeAttr('disabled');
        $("#admndwnbtn1").css('display', 'none');
        $("#admndwnbtn2").css('display', 'flex');
        $("#admndwnbtn2").attr("disabled", true);
        $("#admnvrfctncd").css('display', 'none');
        $("#admndtls").css('display', 'block');
    });

    $("#admnsbjctbtn").click(function () {
        $("#admndwnbtn1").css('display', 'none');
        $("#admndtls").css('display', 'none');
        $("#admndtlsbjct").css('display', 'block');
        $("#admndtlssesnsc").css('display', 'none');
    });

    $("#admnschlsnsnbtn").click(function () {
        $("#admnvrfctncd").css('display', 'none');
        $("#admndtls").css('display', 'none');
        $("#admndtlsbjct").css('display', 'none');
        $("#admndtlssesnsc").css('display', 'block');
    });
});

//for adminclass

$(function () {
    var admclsname = $("#admclsname");
    var admsctnname = $("#admsctnname");
    var admnlist = $("#admntbul");
    var x = 0;
    $("#admnadrwbtn1").on("click", function () {
        //alert('htt');
        if (admclsname.val() && admsctnname.val()) {
            //alert(admclsname.val() + "  |  " + admsctnname.val());
            schoolid = 1;

            $.ajax(
                {
                    type: "POST",
                    url: "/u/addadminclassdata",
                    data: {

                        grade: admclsname.val(),
                        section: admsctnname.val(),
                        schoolid: schoolid,
                        sno: x

                    },
                    success: function (da) {
                        //alert(da);
                        //alert("success");
                        var obj = JSON.stringify(da);
                        //alert(obj);
                        var parse = JSON.parse(obj);
                        //alert(parse);
                        adminschooldatafinl = da;
                    }
                });
            $('#admnlster1').css('display', 'none');
            admnlist.append(
                '<li class="admntblulli">' +
                '<div class="admntblullidv row m-0">' +
                '<div class="col-sm-5 br-1px pl-0">' +
                '<label class="admntblullidvlbl">' +
                'Grade - ' + '<span id="admclsnamespnvl' + x + '">' + admclsname.val() + '</span>' +
                '</label></div>' +
                '<div class="col-sm-5 br-1px">' +
                '<label class="admntblullidvlbl">' +
                'Section - ' + '<span id="admsctnnamespnvl' + x + '">' + admsctnname.val() + '</span>' +
                '</label></div>' +
                '<div class="col-sm-2 pr-0">' +
                '<div class="admntblullidv-dv">' +
                '<button class="admntblullidv-dv-btnn-rmv" id="admndltrwbtn1" type="button" title="Delete Data" onclick="myFunc(this,' + x + ')">' +
                '<span id="admnclsrfvvvl' + x  + '" style="display:none;">' + x + '</span>' + 
                '<i class="fa fa-minus-circle"></i>' +
                '</button></div></div>' +
                '</div></li>'
            );

            x++;
            admclsname.val("");
            admsctnname.val("");

        }
        else if (admclsname.val() == "" || admclsname.val() == null) {
            $('#admnlster1').css('display', 'block');
            admclsname.focus();
        }
        else if (admsctnname.val() == "" || admsctnname.val() == null) {
            $('#admnlster1').css('display', 'block');
            admsctnname.focus();
        }

    });

    //$(document).on("click", "#admndltrwbtn1", function () {
    //    admnlist.find("li").eq($(this).index()).remove();
    //    //alert(admnlist.find("li").eq($(this).index()));
    //    $('#admnlster1').css('display', 'none');
    //});
    
});


function myFunc(elem, y) {
    //alert(y);
    var admclsnamespnvl = $("#admclsnamespnvl" + y);
    var admsctnnamespnvl = $("#admsctnnamespnvl" + y);
    var admnclsrfvvvl = $("#admnclsrfvvvl" + y);

    //var ee = $(this).closest('button').attr('id');
    //alert(ee);


    //alert(admnclsrfvvvl.text());
    //var hidenvalue = parseInt(admnclsrfvvvl.text());

    var schoolid = 1;

    //alert(admclsnamespnvl.text() + "  |  " + admsctnnamespnvl.text() + " | " + schoolida + " | " + admnclsrfvvvl.text());

    $.ajax(
        {
            type: "POST",
            url: "/u/rmvadminclassdata",
            data: {
                snoval: parseInt(admnclsrfvvvl.text())
            },
            success: function (da) {
                //alert(da);
                //alert("success");
                var obj = JSON.stringify(da);
                //alert(obj);
                var parse = JSON.parse(obj);
                //alert(parse);
                adminschooldatafinl = da;
            }
        });

    let li = elem.parentNode;
    let li2 = li.parentNode;
    let li3 = li2.parentNode;
    li3.remove(li3);

}


$(document).ready(function () {
    $('#admindatafldcls').on('submit', function (e) {
        e.preventDefault();
        $('#admnclsdatasave #nxt-btnn-loader').css('display', 'block');
        $('#admnclsdatasave #nxt-btnn-txt').css('display', 'none');

        $('#admnclsdatasave #nxt-btnn-loader').css('display', 'block');
        $('#admnclsdatasave #nxt-btnn-txt').css('display', 'none');
        $('#admnlster1').css('display', 'none');

        if ($('ul#admntbul li').length < 1) {
            //alert('works');
            $('#admnlster1').css('display', 'block');
            $('#admnclsdatasave #nxt-btnn-loader').css('display', 'none');
            $('#admnclsdatasave #nxt-btnn-txt').css('display', 'block');
        }
        else {
            //alert('else');
            $('#admnlster1').css('display', 'none');
            $('#admnclsdatasave #nxt-btnn-loader').css('display', 'block');
            $('#admnclsdatasave #nxt-btnn-txt').css('display', 'none');

            $.ajax({
                type: "POST",
                url: "https://new-feediii-api.azurewebsites.net/api/signup/EnterAdminBatchdetails",
                dataType: 'json',
                data: { '': adminschooldatafinl },
                success: function (data, textStatus, xhr) {
                    //console.log(data);
                    //alert(data);
                    alert('success');
                },
                error: function (xhr, textStatus, errorThrown) {
                    //alert(errorThrown);
                    //alert('error');
                    console.log('Error in Operation');
                }
            });
        }

    });
});


//for admin subjects

$(function () {
    var admsbjtname = $("#admsbjtname");
    var admnlist2 = $("#admntbul2");
    var x = 0;
    $("#admnadrwbtn2").on("click", function () {
        //alert('htt');
        if (admsbjtname.val()) {
            //alert('tyy');
            //alert(admsbjtname.val());
            schoolid = 1;

            $.ajax(
                {
                    type: "POST",
                    url: "/u/addadminsbjctdata",
                    data: {

                        subjectname : admsbjtname.val(),
                        schoolid: schoolid

                    },
                    success: function (da) {
                        //alert(da);
                        //alert("success");
                        var obj = JSON.stringify(da);
                        //alert(obj);
                        var parse = JSON.parse(obj);
                        //alert(parse);
                        adminschoolsbjctsdatafinl = da;
                    }
                });
            $('#admnlster2').css('display', 'none');
            admnlist2.append(
                '<li class="admntblulli">' +
                '<div class="admntblullidv row m-0">' +
                '<div class="col-sm-10 br-1px pl-0">' +
                '<label class="admntblullidvlbl">' +
                'Subject - ' + '<span id="admsbjctnamespnvl' + x + '">' + admsbjtname.val() + '</span>'  +
                '</label></div>' +
                '<div class="col-sm-2 pr-0">' +
                '<div class="admntblullidv-dv">' +
                '<button class="admntblullidv-dv-btnn-rmv" id="admndltrwbtn2" type="button" title="Delete Data" onclick="myFunc2(this,' + x + ')">' +
                '<i class="fa fa-minus-circle"></i>' +
                '</button></div></div>' +
                '</div></li>'
            );

            x++;
            admsbjtname.val("");
        }
        else {
            $('#admnlster2').css('display', 'block');
            admsbjtname.focus();
        }

    });

    //$(document).on("click", "#admndltrwbtn1", function () {
    //    admnlist.find("li").eq($(this).index()).remove();
    //    //alert(admnlist.find("li").eq($(this).index()));
    //    $('#admnlster1').css('display', 'none');
    //});

});


function myFunc2(elem2, yy) {

    var admsbjtname = $("#admsbjctnamespnvl" + yy);
    alert(admsbjtname.text());
    //alert(adminschoolsbjctsdatafinl);

    var schoolid = 1;

    $.ajax(
        {
            type: "POST",
            url: "/u/rmvadminsbjctdata",
            data: {
                subjecta: admsbjtname.text()
            },
            success: function (da) {
                //alert(da);
                //alert("success");
                var obj = JSON.stringify(da);
                //alert(obj);
                var parse = JSON.parse(obj);
                //alert(parse);
                adminschoolsbjctsdatafinl = da;
            }
        });
    let li2 = elem2.parentNode;
    let li22 = li2.parentNode;
    let li23 = li22.parentNode;
    li23.remove(li23);
}

$(document).ready(function () {
    $('#admindatafldsbjct').on('submit', function (e) {
        e.preventDefault();
        $('#admnsbjcttdatasave #nxt-btnn-loader').css('display', 'block');
        $('#admnsbjcttdatasave #nxt-btnn-txt').css('display', 'none');

        $('#admnsbjcttdatasave #nxt-btnn-loader').css('display', 'block');
        $('#admnsbjcttdatasave #nxt-btnn-txt').css('display', 'none');
        $('#admnlster2').css('display', 'none');

        if ($('ul#admntbul2 li').length < 1) {
            //alert('if condition');
            $('#admnlster2').css('display', 'block');
            $('#admnsbjcttdatasave #nxt-btnn-loader').css('display', 'none');
            $('#admnsbjcttdatasave #nxt-btnn-txt').css('display', 'block');
        }
        else {
            //alert('else');
            $('#admnlster2').css('display', 'none');
            $('#admnsbjcttdatasave #nxt-btnn-loader').css('display', 'block');
            $('#admnsbjcttdatasave #nxt-btnn-txt').css('display', 'none');

            $.ajax({
                type: "POST",
                url: "https://new-feediii-api.azurewebsites.net/signup/EnterAdminSubjectdetails",
                dataType: 'json',
                data: { '': adminschoolsbjctsdatafinl },
                success: function (data, textStatus, xhr) {
                    //console.log(data);
                    //alert(data);
                    alert('success');
                },
                error: function (xhr, textStatus, errorThrown) {
                    //alert(errorThrown);
                    //alert('error');
                    console.log('Error in Operation');
                }
            });
        }
    });
});


//for session

$(function () {
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    var mxyear = dtToday.getFullYear() + 3;
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    var minDate = year + '-' + month + '-' + day;
    var maxDate = mxyear + '-' + month + '-' + day;

    // or instead:
    // var maxDate = dtToday.toISOString().substr(0, 10);

    //alert(minDate + maxDate);
    $('#sessndate1, #sessndate2').attr('min', minDate);
    $('#sessndate1, #sessndate2').attr('max', maxDate);
});



$(document).ready(function () {
    $('#admindatafldsessns').on('submit', function (e) {
        e.preventDefault();

        var schlid = 17;
        var startdate = $('#sessndate1').val();
        var enddate = $('#sessndate2').val();
        //alert(startdate + " && " + enddate);
        $('#admnlstersnserr').css('display', 'none');

        if (startdate == "" || null) {
            //alert('if condition');
            $('#admnlstersnserr').css('display', 'block');
            $('#admnssnsdatasave #nxt-btnn-loader').css('display', 'none');
            $('#admnssnsdatasave #nxt-btnn-txt').css('display', 'block');
        }

        if (enddate == "" || null) {
            //alert('if condition');
            $('#admnlstersnserr').css('display', 'block');
            $('#admnssnsdatasave #nxt-btnn-loader').css('display', 'none');
            $('#admnssnsdatasave #nxt-btnn-txt').css('display', 'block');
        }
        else {
            //alert('else');
            $('#admnlstersnserr').css('display', 'none');
            $('#admnssnsdatasave #nxt-btnn-loader').css('display', 'block');
            $('#admnssnsdatasave #nxt-btnn-txt').css('display', 'none');

            $.ajax({
                type: "POST",
                url: "https://new-feediii-api.azurewebsites.net/api/signup/EnterSchoolsession",
                dataType: 'json',
                data: { schoolid: schlid, startdate: startdate, endDate: enddate },
                success: function (data, textStatus, xhr) {
                    //console.log(data);
                    //alert(data);
                    alert('success');
                },
                error: function (xhr, textStatus, errorThrown) {
                    //alert(errorThrown);
                    //alert('error');
                    console.log('Error in Operation');
                }
            });
        }
    });
});
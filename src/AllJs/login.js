

$(window).on('load',function () {
    setTimeout(function () {
        //alert('hhh');
        $("#divLoader").css('display', 'none');
        $("#login").css('display', 'block');
    }, 0); //Delay just used for example and must be set to 0.
});

$(document).ready(function () {
    $('.shldr').click(function () {
        $("#divLoader").css('display', 'block');
        $("#login").css('display', 'none');
    });

    $("#techr").click(function () {
        var actp = 4;
        $('#divLoader').show();
        $('#login').hide();
        $.ajax(
            {
                type: "POST", //HTTP POST Method
                url: "/Login/accounttype", // Controller/View
                data: { accounttype: actp },
                dataType: "html",
                success: function (result) {
                    var obj = JSON.stringify(result);
                    //alert(obj);
                    var prse = JSON.parse(obj);
                    //alert(prse);
                    location.href = "/u/signin";
                },
                error: function (result) {
                    alert(result);
                    $('#divLoader').hide();
                    $('#login').show();
                }
            })
    });

    $("#studnt").click(function () {
        var actp = 1;
        $('#divLoader').show();
        $('#login').hide();
        $.ajax(
            {
                type: "POST", //HTTP POST Method
                url: "/Login/accounttype", // Controller/View
                data: { accounttype: actp },
                dataType: "html",
                success: function (result) {
                    var obj = JSON.stringify(result);
                    //alert(obj);
                    var prse = JSON.parse(obj);
                    //alert(prse);
                    location.href = "/u/signin";
                },
                error: function (result) {
                    alert(result);
                    $('#divLoader').hide();
                    $('#login').show();
                }
            })
    });

    $("#adminn").click(function () {
        var actp = 2;
        $('#divLoader').show();
        $('#login').hide();
        $.ajax(
            {
                type: "POST", //HTTP POST Method
                url: "/Login/accounttype", // Controller/View
                data: { accounttype: actp },
                dataType: "html",
                success: function (result) {
                    var obj = JSON.stringify(result);
                    //alert(obj);
                    var prse = JSON.parse(obj);
                    //alert(prse);
                    location.href = "/u/signin";
                },
                error: function (result) {
                    alert(result);
                    $('#divLoader').hide();
                    $('#login').show();
                }
            })
    });
});
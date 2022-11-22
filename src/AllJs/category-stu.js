
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

$("#cls-std2 li#cls-std3 #cls-std4").click(function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
});

$(document).ready(function () {
    // for adding section
    $("#adsctnbtn").click(function (e) {
        e.preventDefault();
        $('#mdler1').css('display', 'none');
        var newsctn = $('#mdlinpsctntxtt').val();
        var newsctnval = newsctn.trim();
        //alert(newsctnval);

        if (newsctnval == "" || newsctnval == " ") {
            $('#mdler1').css('display', 'block');
        }
        else {
            $('#mdler1').css('display', 'none');
            $('ul#stc-std2').append(
                $('<li class="ct-std3" id="stc-std3">').append(
                    $('<div class="ct-std4" id="stc-std4">').append(
                        $('<label class="ct-std5">').text("Section - " + newsctnval)
                    )
                )
            );
            $('#myModal').modal('toggle');
            $('#mdlinpsctntxtt').val('');
            $('#remove').css('display', 'block');
            $('#adscntn').css('display', 'none');
        }
    });

    // for adding class
    $("#adclsbtn").click(function (e) {
        e.preventDefault();
        $('#mdlercls').css('display', 'none');
        var newcls = $('#mdlinpclstxtt').val();
        var newclsnval = newcls.trim();
        //alert(newsctnval);

        if (newclsnval == "" || newclsnval == " ") {
            $('#mdlercls').css('display', 'block');
        }
        else {
            $('#mdlercls').css('display', 'none');
            $('ul#cls-std2').append(
                $('<li class="ct-std3" id="cls-std3">').append(
                    $('<div class="ct-std4" id="cls-std4">').append(
                        $('<label class="ct-std5">').text("Class - " + newclsnval)
                    )
                )
            );
            $('#myModall').modal('toggle');
            $('#mdlinpclstxtt').val('');
            $('#removecls').css('display', 'block');
            $('#adcls').css('display', 'none');
        }
    });
});
$(function () {
    $('#stc-std2').on('mouseenter', 'li', function () {
        $("#stc-std2 li#stc-std3 #stc-std4").click(function () {
            $(this).parent().addClass('active').siblings().removeClass('active');
        });
    });
});

// for remove new section
let remove = document.querySelector('#remove');
let ul = document.querySelector('#stc-std2');
remove.addEventListener('click', () => {
    ul.removeChild(ul.lastElementChild);
    $('#remove').css('display', 'none');
    $('#adscntn').css('display', 'block');
});


// for remove new class
let removecls = document.querySelector('#removecls');
let ulcls = document.querySelector('#cls-std2');
removecls.addEventListener('click', () => {
    ulcls.removeChild(ulcls.lastElementChild);
    $('#adcls').css('display', 'block');
    $('#removecls').css('display', 'none');
});




$('.ct-stdtchr5-3:checkbox').on('change', function () {
    if ($('.ct-stdtchr5-3').filter(":checked").length == $('.ct-stdtchr5-3').length) {
        $(this).closest('li').add('label[for="' + this.id + '"] span').toggleClass('active', this.checked);
        $('#slctalchkbxtchr').closest('label').add('label[for="' + this.id + '"] span').addClass('active', this.checked);
    }
    else {
        $(this).closest('li').add('label[for="' + this.id + '"] span').toggleClass('active', this.unchecked);
        $('#slctalchkbxtchr').closest('label').add('label[for="' + this.id + '"] span').removeClass('active', this.unchecked);
    }
}).trigger('change');


$(document).ready(function () {
    $('.ct-std3').removeClass('active');
    $('#slctalchkbxtchr').click(function () {
        //alert('click');
        if (!$(this).prop("checked")) {
            //alert('if contidion m');
            $(this).closest('label').add('label[for="' + this.id + '"] span').removeClass('active', this.checked);
            $(".ct-stdtchr5-3").closest('li').add('label[for="' + this.id + '"] span').removeClass('active', this.checked);
        }
        else {
            //alert('else contidion m');
            $(this).closest('label').add('label[for="' + this.id + '"] span').addClass('active', this.checked);
            $(".ct-stdtchr5-3").closest('li').add('label[for="' + this.id + '"] span').addClass('active', this.checked);
        }
    });
});

//$('#slctalchkbxtchr:checkbox').on('change', function () {
//    if (!$(this).prop("checked")) {
//        $(this).closest('label').add('label[for="' + this.id + '"] span').removeClass('active', this.unchecked);
//        $(".ct-stdtchr5-3").closest('li').add('label[for="' + this.id + '"] span').removeClass('active', this.unchecked);
//        //$(".ct-stdtchr5-3").closest('li').add('label[for="' + this.id + '"] span').removeClass('disabled', this.checked);
//    }
//    else {
//        $(this).closest('label').add('label[for="' + this.id + '"] span').toggleClass('active', this.checked);
//        $(".ct-stdtchr5-3").closest('li').add('label[for="' + this.id + '"] span').toggleClass('active', this.checked);
//        //$(".ct-stdtchr5-3").closest('li').add('label[for="' + this.id + '"] span').toggleClass('disabled', this.checked);
//    }
//}).trigger('change');


//$('#slctalchkbxtchr:checkbox').on('change', function () {
//    if (!$(this).prop("checked")) {
//        $(this).closest('label').add('label[for="' + this.id + '"] span').removeClass('active', this.unchecked);
//        $(".ct-stdtchr5-3").closest('li').add('label[for="' + this.id + '"] span').removeClass('active', this.unchecked);
//        //$(".ct-stdtchr5-3").closest('li').add('label[for="' + this.id + '"] span').removeClass('disabled', this.checked);
//    }
//    else {
//        $(this).closest('label').add('label[for="' + this.id + '"] span').toggleClass('active', this.checked);
//        $(".ct-stdtchr5-3").closest('li').add('label[for="' + this.id + '"] span').toggleClass('active', this.checked);
//        //$(".ct-stdtchr5-3").closest('li').add('label[for="' + this.id + '"] span').toggleClass('disabled', this.checked);
//    }
//}).trigger('change');


//$(document).ready(function () {
//    $(".ct-dv5-3-lbl").click(function () {
//        $('#slctalchkbxtchr:checkbox').on('change', function () {
//            if (!$(this).prop("checked")) {
//                //alert('selectall not checked');
//                $(this).closest('label').add('label[for="' + this.id + '"] span').removeClass('active', this.unchecked);
//                $(".ct-std5-3").closest('li').add('label[for="' + this.id + '"] span').removeClass('active', this.unchecked);
//            }
//            else {
//                //alert('selectall checked');
//                $(this).closest('label').add('label[for="' + this.id + '"] span').toggleClass('active', this.checked);
//                $(".ct-std5-3").closest('li').add('label[for="' + this.id + '"] span').toggleClass('active', this.checked);
//            }
//        }).trigger('change');
//    });

//    //$(".ct-dv5-3-lbl").click(function () {
//    //    $(".checkBoxClass").prop('checked', $(this).addClass('active'));
//    //});

//    //$("#slctalchkbxtchr:checkbox").change(function () {
//    //    if (!$(this).prop("checked")) {
//    //        $("#slctalchkbxtchr").prop("checked", $(this).removeClass('active'));
//    //    }
//    //});
//});


$("#sbjct01 li#sbjct02 #sbjct03").click(function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
});


$('.ct-sttutchr5-3:checkbox').on('change', function () {
        $(this).closest('li').add('label[for="' + this.id + '"] span').toggleClass('active', this.checked);
}).trigger('change');


$('.ct-stdsbjct5-3:checkbox').on('change', function () {
        $(this).closest('li').add('label[for="' + this.id + '"] span').toggleClass('active', this.checked);
}).trigger('change');
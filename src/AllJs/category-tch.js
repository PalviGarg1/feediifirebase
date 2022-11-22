
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

$("#clstch-std2 li#clstch-std3 #clstch-std4").click(function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
});


$(document).ready(function () {
    $("#adsctnbtn2").click(function (e) {
        e.preventDefault();
        var newsctn = $('#mdlinpsctntxtt2').val();
        var newsctnval = newsctn.trim();
        //alert(newsctnval);
        $('#mdler2').css('display', 'none');

        if (newsctnval == "" || newsctnval == " ") {
            $('#mdler2').css('display', 'block');
        }
        else {
            $('#mdler2').css('display', 'none');
            $('ul#scttch-std2').append(
                $('<li class="ct-std3" id="scttch-std3">').append(
                    $('<div class="ct-std4" id="scttch-std4">').append(
                        $('<label class="ct-std5">').text("Section - " + newsctnval)
                    )
                )
            );
            $('#myModal2').modal('toggle');
            $('#mdlinpsctntxtt2').val('');
            $('#removee').css('display', 'block');
            $('#adscntnn').css('display', 'none');
        }
    });
});

$(function () {
    $('#scttch-std2').on('mouseenter', 'li', function () {
        $("#scttch-std2 li#scttch-std3 #scttch-std4").click(function () {
            $(this).parent().addClass('active').siblings().removeClass('active');
        });
    });
});

//$(".sctn-dvv22").click(function () {
let remove = document.querySelector('#removee');
let ul = document.querySelector('#scttch-std2');
remove.addEventListener('click', () => {
    ul.removeChild(ul.lastElementChild);
    $('#removee').css('display', 'none');
    $('#adscntnn').css('display', 'block');
});
//});

$("#tchsbjct01 li#tchsbjct02 #tchsbjct03").click(function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
});

$('.ct-stdtchrsbjct5-3:checkbox').on('change', function () {
    $(this).closest('li').add('label[for="' + this.id + '"] span').toggleClass('active', this.checked);
}).trigger('change');
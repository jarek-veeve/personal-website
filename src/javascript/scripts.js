/* global $ */
/**
 * Created by Jarek on 14/10/2015.
 */
$(document).ready(function(){

    setTimeout(show_contact, 4000)
    setTimeout(show_text, 2000)
    setTimeout(show_hi_line, 2500);
    setTimeout(show_explore_line, 2500);
    setTimeout(show_tex_container, 2500);
    setTimeout(show_resume_social, 4000);
    setTimeout(show_arrow_down, 5000);
    setTimeout(bounce, 2000);

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });


    $("#card").flip({
        axis: 'x',
        trigger: 'hover',
        reverse: true
    });

    $('.img_circle').hover(function(){
        $(this).css('box-shadow', '0px 0px 2px 7px #173e43');
    }, function(){
        $(this).css('box-shadow', '0px 0px 2px 7px #848484');
    })
});


function bounce()
{
    setInterval(function(){
        $(".glyphicon").effect( "bounce",
            {times:4}, 1500 );
    },1500);


}

function show_contact()
{
    $('.contact-button-container').fadeIn(2000).css('display', 'inline');
}

function show_arrow_down()
{
    $('.arrow-down').fadeIn(2000).css('display', 'inherit');

}

function show_resume_social()
{
    $('.resume-social').fadeIn(2000).css('display', 'inline');
}

function show_tex_container()
{
    $('.welcome-text-container').fadeIn(2000).css('display', 'inherit');
}

function show_welcome_text()
{
    $('.welcome-text').slideDown(1300).css('display', 'inherit');
}

function show_text()
{
    $('#server').text('Client');
    setTimeout(show_text2, 800);
    //show_text2();
}

function show_text2()
{
    $('#server').text('Server');
    setTimeout(show_text, 800);
}

function show_hi_line()
{
    $('#typed-line1').typed({

        stringsElement: $('#typed-hi'),
        typeSpeed: 60,
        backDelay: 2000,
        loop: true,
        contentType: 'html', // loop
        loopCount: true,

    });
}

function show_explore_line()
{
    $('#typed-line2').typed({

        stringsElement: $('#typed-client'),
        typeSpeed: 60,
        backDelay: 1000,
        loop: true,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: true,
    });
}








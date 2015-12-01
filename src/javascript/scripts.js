/* global $ */
/**
 * Created by Jarek on 14/10/2015.
 */
$(document).ready(function(){

    $('#typed').typed({
            
            stringsElement: $('#typed-hi'),
            typeSpeed: 30,
            backDelay: 500,
            loop: true,
            contentType: 'html', // loop
            loopCount: true,

        });
    $('#typed').typed({
            
            stringsElement: $('#typed-developer'),
            typeSpeed: 30,
            backDelay: 500,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: true,
        });
    
    setTimeout(show_contact, 4000)
    setTimeout(show_text, 2000)
    setTimeout(show_welcome_text, 2000)         
        
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

    $('.img_circle').hover(function(){
        $(this).css('box-shadow', '0px 0px 2px 7px #173e43');
    }, function(){
        $(this).css('box-shadow', '0px 0px 2px 7px #848484');
    })
});


function show_contact(){
    $('.contact-button-container').fadeIn(2000).css('display', 'inline');
}

function show_welcome_text(){
    $('.welcome-text').slideDown(1300).css('display', 'inherit');
}

function show_text(){
    $('#server').text('Client');
    setTimeout(show_text2, 800);
    //show_text2();
}

function show_text2(){
    $('#server').text('Server');
    setTimeout(show_text, 800);
}








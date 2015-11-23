/**
 * Created by Jarek on 14/10/2015.
 */
$(document).ready(function(){
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



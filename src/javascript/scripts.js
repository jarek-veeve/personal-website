/**
 * Created by Jarek on 14/10/2015.
 */
$(document).ready(function(){


   function show_contact(){
       $('.contact-button-container').fadeIn(2000).css('display', 'inline');
   }
    setTimeout(show_contact, 3000)

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
/*
    $(function(){

        $(".contact-button-container").addClass("contact-button-container-slide");
        console.log($(".contact-button-container"));

    });*/

});



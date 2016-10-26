$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $('nav').addClass('shrink');
        $('nav').removeClass('grow');
        $('.logo').addClass('logoshrink');
        $('.logo').removeClass('logogrow');
        $('.social').addClass('socialshrink');
        $('.social').removeClass('socialgrow');
        $('.navbar1').addClass('navbar1shrink');
        $('.navbar1').removeClass('navbar1grow');
    } else {
        $('nav').removeClass('shrink');
        $('nav').addClass('grow');
        $('.logo').removeClass('logoshrink');
        $('.logo').addClass('logogrow');
        $('.social').removeClass('socialshrink');
        $('.social').addClass('socialgrow');
        $('.navbar1').removeClass('navbar1shrink');
        $('.navbar1').addClass('navbar1grow');
    }
});
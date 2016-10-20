$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("header").removeClass("large").addClass("small");
	} else {
		$("header").removeClass("small").addClass("large");
	}

});






/*$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $('nav').addClass('shrink');
        $('nav').removeClass('grow');
        $('.logo').addClass('logoshrink');
        $('.logo').removeClass('logogrow');
        $('.social').addClass('socialshrink');
        $('.social').removeClass('socialgrow');
    } else {
        $('nav').removeClass('shrink');
        $('nav').addClass('grow');
        $('.logo').removeClass('logoshrink');
        $('.logo').addClass('logogrow');
        $('.social').removeClass('socialshrink');
        $('.social').addClass('socialgrow');
    }
});*/

$(function() {

	$(".navbar-toggle").on('click', function() {
	    if($(".navbar-collapse").hasClass('in')) {
            $(".navbar-toggle").removeClass('is-active');
        } else {
            $(".navbar-toggle").addClass('is-active');
        }
    });


	$(".header-hmb").on('click', function() {
        if(screen.width > 480) {
            $(".header-cat").css('transform', 'translateX(0%)');
            $(".header-dog").css('transform', 'translateX(0%)');
        } else {
            $(".header-cat").fadeIn('slow');
            $(".header-dog").fadeIn('slow');
        }
        $(".header-hmb").fadeOut('slow');
    });

	$(".header-dog").on('click', function() {
	    if(screen.width > 480) {
            $(".header-cat").css('transform', 'translateX(150%)');
            $(".header-dog").css('transform', 'translateX(50%)');
            $(".header-hmb").fadeIn('slow');
        } else {
            $(".header-cat").fadeOut('slow');
            $(".header-hmb").fadeIn('slow');
        }
    });

    $(".header-cat").on('click', function() {
        if(screen.width > 480) {
            $(".header-cat").css('transform', 'translateX(-50%)');
            $(".header-dog").css('transform', 'translateX(-150%)');
            $(".header-hmb").fadeIn('slow');
        } else {
            $(".header-dog").fadeOut('slow');
            $(".header-hmb").fadeIn('slow');
        }
    });

});

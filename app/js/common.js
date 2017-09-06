$(function() {

	$(".navbar-toggle").on('click', function() {
	    if($(".navbar-collapse").hasClass('in')) {
            $(".hamburger").removeClass('is-active');
        } else {
            $(".hamburger").addClass('is-active');
        }
    });

	$(".header-hmb").on('click', function() {
        $(".header-cat").css('transform', 'translateX(0%)');
        $(".header-dog").css('transform', 'translateX(0%)');
        $(".header-hmb").fadeOut('slow');
    });

	$(".header-dog").on('click', function() {
	    $(".header-cat").css('transform', 'translateX(100%)');
        $(".header-dog").css('transform', 'translateX(50%)');
        $(".header-hmb").fadeIn('slow');
    });

    $(".header-cat").on('click', function() {
        $(".header-cat").css('transform', 'translateX(-50%)');
        $(".header-dog").css('transform', 'translateX(-100%)');
        $(".header-hmb").fadeIn('slow');
    });

});

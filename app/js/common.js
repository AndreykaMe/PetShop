$(function() {

    $petType = 'none';

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
            $(".header-cat").animate( {
                height: '300px'
            });
            $(".header-cat").css('transform', 'translateY(0px)');
            $(".header-dog").animate( {
                height: '300px'
            });
        }
        $(".header-hmb").fadeOut('slow');
        $(".header-cat").removeClass('active');
        $(".header-dog").removeClass('active');
        $(".hello-pet").animate( {
            height: '0px',
            padding: '0px'
        });
        $petType = 'none';
    });

	$(".header-dog").on('click', function() {
	    if(screen.width > 480) {
            $(".header-cat").css('transform', 'translateX(150%)');
            $(".header-dog").css('transform', 'translateX(50%)');
            $(".header-hmb").fadeIn('slow');
        } else {
            $(".header-cat").animate( {
                height: 0
            });
            $(".header-hmb").fadeIn('slow');
        }
        $(".header-dog").addClass('active');
        $("#hp-img").attr('src', 'img/Doggie-happy.png');
        $(".hello-pet").animate( {
            height: '100%',
            padding: '10px'
        });
        $petType = 'dog';
    });

    $(".header-cat").on('click', function() {
        if(screen.width > 480) {
            $(".header-cat").css('transform', 'translateX(-50%)');
            $(".header-dog").css('transform', 'translateX(-150%)');
            $(".header-hmb").fadeIn('slow');
        } else {
            //$(".header-dog").slideUp('slow');
            $(".header-dog").animate( {
                height: 0
            });
            $(".header-cat").css('transform', 'translateY(-20px)');
            $(".header-hmb").fadeIn('slow');
        }
        $(".header-cat").addClass('active');
        $("#hp-img").attr('src', 'img/Cattie.jpg');
        $(".hello-pet").animate( {
            height: '100%',
            padding: '10px'
        });
        $petType = 'cat';
    });

    $("#shop-li-recommend").on('click', function() {
        $("#shop-li-new").removeClass('active');
        $("#shop-li-recommend").addClass('active');
    });

    $("#shop-li-new").on('click', function() {
        $("#shop-li-recommend").removeClass('active');
        $("#shop-li-new").addClass('active');
    });


});

$(function () {


    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var height = window.innerHeight;
        if (height / 2 <= scrollTop) {
            $('.navigation-bar').css({
                backgroundColor: '#fff',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'
            });
            $('.navigation-bar .header-navigation-links ul li a').css({
                color: '#000',
            });
            $('.navigation-bar .logo img').attr('src', 'assets/images/logo.png');
        } else {
            $('.navigation-bar').css({
                backgroundColor: 'transparent',
                boxShadow: 'none'
            });
            $('.navigation-bar .header-navigation-links ul li a').css({
                color: '#fff'
            });
            $('.navigation-bar .logo img').attr('src', 'assets/images/footer-logo.png')
        }
    });
    var width = window.innerWidth;




    $('.snail img').css({
        left: '50%',
        transition: 'all 20s linear'
    });



    $('.home-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    $('.testimonials-card-wrapper').owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1500: {
                items: 3
            }
        }
    });


    $('.clients-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        mouseDrag: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: false,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 6
            }
        }
    });

   


});
$(function () {


   




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
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
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
            1200: {
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
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });

   


});
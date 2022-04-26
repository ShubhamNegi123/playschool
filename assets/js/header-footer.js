$(function () {


    var height = window.innerHeight;
    let windowWidth = $(window).width();


    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if (windowWidth >= 767) {

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
        }
    });


    if (windowWidth <= 767) {
        $('.navigation-bar').css({
            backgroundColor: '#fff',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'
        });
        $('header').css({
            marginTop: '50px',
        });
        $('.about-us').css({
            marginTop: '50px',
        });
        $('.navigation-bar .logo img').attr('src', 'assets/images/logo.png');
        $('.header-navigation-links .fa-bars').click(function () {
            
            $('.header-navigation-links ul').slideToggle(500, function () {
                $('.header-nav-home').css({
                    marginLeft: '0px',
                    transition: 'all .5s ease'
                });
                $('.header-nav-about').css({
                    marginLeft: '0px',
                    transition: 'all .8s ease'
                });
                $('.header-nav-packages').css({
                    marginLeft: '0px',
                    transition: 'all 1.1s ease'
                });
                $('.header-nav-portfolio').css({
                    marginLeft: '0px',
                    transition: 'all 1.4s ease'
                });
                $('.header-nav-contact').css({
                    marginLeft: '0px',
                    transition: 'all 1.7s ease'
                });

            });

        });



    }


});
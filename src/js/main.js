jQuery(document).ready(function($) {

    /*--------------------------------------------------
      POPUP
    --------------------------------------------------*/

    $('.link').on('click', function(e) {
        e.preventDefault();
        var active = $('.popup_reg_item.active');
        active.removeClass('active');
        if ($(this).hasClass('next')) {
            active.next().addClass('active');
        }
        if ($(this).hasClass('back')) {
            active.prev().addClass('active');
        }
        $('.popup_tabs a').removeClass('active').eq($('.popup_reg_item.active').index()).addClass('active');
        $('.popup_reg_in').css({ 'transform': 'translate(-' + (100 / $('.popup_reg_item').length) * ($('.popup_reg_item.active').index()) + '%,0)' });
    });

    /*--------------------------------------------------
      MENU
    --------------------------------------------------*/

    $('.icon-menu.menu_a').on('click', function(e) {
        e.preventDefault();
        $('aside').toggleClass('open');
    });
    $('.btn_right_sidebar').on('click', function(e) {
        e.preventDefault();
        $('.filter').toggleClass('close');
    });
    $('.menu_ul a').on('click', function(e) {
        if ($(this).next().length) {
            e.preventDefault();
            $(this).next().slideToggle();
            $(this).parent('li').toggleClass('current');
            $(this).next().find('li.current').removeClass('current');
            $(this).next().find('ul').slideUp();
        }
    });
    if ($('.menu_ul li').hasClass('current') && $('.menu_ul li.current ul').length) {
        $('aside').addClass('open_menu');
    } else {
        $('aside').removeClass('open_menu');
    }

    /*--------------------------------------------------
      SLIDERS
    --------------------------------------------------*/

    $('.brands').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 3
            },
            700: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });

    $('.home_slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        navContainer: '.home_slider .slide-navigation',
        navText: ['<span class="arrow arrow-left"></span>', '<span class="arrow arrow-right"></span>'],
    });
});

function openCategory(evt, categoryName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";
}
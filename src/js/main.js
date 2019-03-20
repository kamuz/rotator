var Common = {
    init: function() {;
        Common.menu();
        Common.slider();
        Common.popup();
    },
    popup: function() {
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

        })
    },
    menu: function() {
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
                check_menu()
            }
        });

        function check_menu() {
            if ($('.menu_ul li').hasClass('current') && $('.menu_ul li.current ul').length) {
                $('aside').addClass('open_menu');
            } else {
                $('aside').removeClass('open_menu');
            }
        }
        check_menu()
    },
    slider: function() {
        var owl = $('.brands');

        // Problem with flex and js owl.carousel
        function check_slider() {
            if ($(window).width() > 1000) {
                owl.trigger('destroy.owl.carousel');
            } else {
                owl.owlCarousel({
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
            }
        }
        check_slider()
        $(window).resize(function() {
            check_slider()
        })
    },

};

$(function() {
    Common.init();
});
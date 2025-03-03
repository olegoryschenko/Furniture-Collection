$(function () {
    $('.header__btn').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu--close');
        $("body").css("overflow","hidden");
        $('.rightside-menu').addClass('rightside-fixed');
    });
    $('.rightside-menu__close').on('click', function() {
        $('.rightside-menu').addClass('rightside-menu--close');
        $("body").css("overflow","auto");
    });

    $('.header__btn-menu').on('click', function() {
        $('.menu-mobile').addClass('menu--open');
    });
    $('.menu__btn--close').on('click', function() {
        $('.menu-mobile').removeClass('menu--open');
        
    });

    if($(window).width() < 651) {
        $('.works-path__item--measuring').appendTo($('.works-path__items-box'))
    }

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true 
    });

    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1700,
              settings: {
              slidesToShow: 8,
              slidesToScroll: 8,
              }
            },
            {
              breakpoint: 1510,
              settings: {
                slidesToShow: 6,
              slidesToScroll: 6,
              }
            },
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            },
            {
            breakpoint: 841,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 551,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          }
        ]
    });
    $(function() {
      let header = $('.header');
      let hederHeight = header.height(); // вычисляем высоту шапки
       
      $(window).scroll(function() {
        if($(this).scrollTop() > 1) {
         header.addClass('header__fixed');
         $('body').css({
            'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
         });
        } else {
         header.removeClass('header__fixed');
         $('body').css({
          'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
         })
        }
      });
     });
    
    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="./images/arrow-slider-1.svg" alt="arrow slider1"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="./images/arrow-slider-2.svg" alt="arrow slider2"></button>',
        
    });
   

     var mixer = mixitup('.gallery__inner', {
         load: {
              filter: '.living'
         }
        });            
})

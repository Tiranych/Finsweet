$(function () {

    Fancybox.bind("[data-fancybox]", {
    });

    $(".rateYo").rateYo({
        rating: 4.5,
        readOnly: true,
        spacing: "5px",
    });

    var mixer = mixitup('.blog__list');

    $('.blog__filter-item').on('click', function () {
        $('.blog__filter-item').removeClass('blog__filter-item--active')
        $(this).addClass('blog__filter-item--active')
    })

    $('.customers__slider').slick({
        slidesToShow: 2,
        arrows: false,
        draggable: false,
        waitForAnimate: false,
        dots: true,
        appendArrows: $('.customers__slider-arrows'),
        appendDots: $('.customers__slider-dots'),
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1
                },
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    draggable: true
                }
            }
        ]
    })

    $('.customers__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.customers__slider').slick('slickPrev')
    })

    $('.customers__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.customers__slider').slick('slickNext')
    })

    $('.faq__list-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('faq__list-link--active')) {
            $(this).removeClass('faq__list-link--active')
            $(this).children('.faq__answer').slideUp()
        } else {
            $('.faq__list-link').removeClass('faq__list-link--active')
            $('.faq__answer').slideUp()
            $(this).addClass('faq__list-link--active')
            $(this).children('.faq__answer').slideDown()
        }
    })

    async function initMap() {
        await ymaps3.ready;

        const { YMap, YMapDefaultSchemeLayer } = ymaps3;

        // Иницилиазируем карту
        const map = new YMap(
            // Передаём ссылку на HTMLElement контейнера
            document.getElementById('map'),

            // Передаём параметры инициализации карты
            {
                location: {
                    // Координаты центра карты
                    center: [-74.00320088863462, 40.71786918992676],
                    // Уровень масштабирования
                    zoom: 12
                }
            }
        );

        // Добавляем слой для отображения схематической карты
        map.addChild(new YMapDefaultSchemeLayer());
    }

    initMap();

    $('.header__nav-list a, .CTA__button, .header__button, .footer__nav-list a').on('click', function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body, html').animate({ scrollTop: top }, 800)
    })

    setInterval(() => {
        if ($(window).scrollTop() > 0 && !($('.header__top').hasClass('header__top--open'))) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0)

    $('.burger, .overlay-off').on('click', function (e) {
        e.preventDefault()
        $('.burger').toggleClass('burger--close')
        $('.overlay-off').toggleClass('overlay-on')
        $('.header__top').toggleClass('header__top--open')
    })
});

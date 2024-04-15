//инициализируем слайдер
// import Swiper from 'swiper';
// import 'swiper/css';
// import { Navigation, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import Swiper from '../../node_modules/swiper/swiper';
// import Swiper from '../../node_modules/swiper-bundle'
// "use strict"
// import Swiper from '/travel/node_modules';
// var Swiper = require('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs')
// import { Pagination, Navigation } from "/travel/node_modules/swiper/swiper.";
// import Swiper from '/travel/node_modules/swiper/swiper-bundle'

// import { Navigation, Pagination } from '/travel/node_modules/swiper/modules'


// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
// import Swiper from 'swiper/swiper-bundle';

const swiper = new Swiper('.image-slider', {
    // modules: [Navigation, Pagination],
    //стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        // буллеты
        clickable: true,
    },
    // скролл
    scrollbar: {
        el: '.swiper-scrollbar',
        //  Возможность перетаскивать скролл
        draggable: true,
    },


    //  автовісота
    // autoHeight:true,
    // autoWidth:true,
    parallax: true,
    effect: "coverflow",
    coverflowEffect: {
        // slideShadows: false,
        depth: 150,
        modifier: 0.9,
    },
    // колличество слайдов для показа
    slidesPerView: 2,
    // centerInsufficientSlides: true,
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //     },
    // },
    // Отступ между слайдами
    spaceBetween: 40,

    // колличество пролистываемых слайдов
    slidesPerGroup: 1,

    // активный слайд по центру
    centeredSlides: true,

    // cтартовый слайд
    initialSlide: 2,


    //бессконечный слайдер
    loop: true,

});


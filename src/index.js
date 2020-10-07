import './scss/index.scss';
import './js/brands';

import lozad from 'lozad';
const observer = lozad();
observer.observe();

import Swiper from './../node_modules/swiper/swiper-bundle.min';

const swiper = new Swiper('.swiper-container', {
    preloadImages: false,
    lazy: {
        loadPrevNext: true,
    },
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            let arr = new Array('виски', 'коньяк', 'ром', 'арманьяк', 'вино', 'шампанское');
            return '<span class="' + className + ' button ">' + (arr[index]) + '</span>';
        },
    },
});




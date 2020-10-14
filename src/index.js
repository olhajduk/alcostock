import './scss/index.scss';
// import $ from "jquery";
import lozad from './../node_modules/lozad/dist/lozad.min';
import Swiper from './../node_modules/swiper/swiper-bundle.min';
import './js/brands';

const observer = lozad();
observer.observe();

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
            let arr = new Array('виски', 'ром', 'коньяк', 'арманьяк', 'вино', 'шампанское');
            return '<span class="' + className + ' button ">' + (arr[index]) + '</span>';
        },
    },
});
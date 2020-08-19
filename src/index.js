import './scss/index.scss';
import $ from 'jquery';
import slick from 'slick-carousel';
console.log('Working!');

$('.slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
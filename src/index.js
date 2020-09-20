import Splide from '@splidejs/splide';
import './scss/index.scss';

// slider
new Splide( '#splide' ).mount();
new Splide( '#splide', {
    type   : 'loop',
    perPage: 3,
  } );


console.log('Working!');
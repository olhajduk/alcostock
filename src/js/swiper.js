document.addEventListener("DOMContentLoaded", function () {

    let swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          let arr = new Array('виски', 'коньяк','ром','арманьяк','вино','шампанское');
          return '<span class="' + className + ' button ">' +  (arr[index])  + '</span>';
        },
      },
    });
  
    console.log('Working!');
  });
document.addEventListener('DOMContentLoaded', () => {
    const brandsSlides = document.querySelectorAll('.brands_slide');

    let tabList = null;
    let contentList = null;
    let t = null;
    let index = null;
    let content = null;

    brandsSlides.forEach(function callback(slide) {
        tabList = slide.querySelectorAll('.brands_item');
        contentList = slide.querySelectorAll('.brands_content');

        for (let i = 0; i < tabList.length; i++) {
            tabList[i].setAttribute('data-index', i);
            contentList[i].setAttribute('data-index', i);
        }

        slide.addEventListener('click', (e) => {
            t = e.target;

            if (t.classList.contains('brands_item')) {
                index = t.getAttribute('data-index');
                content = slide.querySelector('.brands_content[data-index="' + index + '"]');
                tabList = slide.querySelectorAll('.brands_item');
                contentList = slide.querySelectorAll('.brands_content');

                for (let i = 0; i < tabList.length; i++) {
                    tabList[i].classList.remove('active');
                    contentList[i].classList.remove('active');
                }

                t.classList.add('active');
                content.classList.add('active');
            }
        });
    });
})
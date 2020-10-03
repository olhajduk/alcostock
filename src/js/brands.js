class BrandsItems {
    constructor() {
        this.tabList = document.querySelectorAll('.brands_item');
        this.contentList = document.querySelectorAll('.brands_content');
        let nav = document.querySelector('.brands_slide');

        nav.addEventListener('click', e => this.show(e));

        this.setIndex();
    }

    show(e) {
        let t = e.target;
        if (!t.classList.contains('brands_item')) return;
        this.removePrev();

        let index = t.getAttribute('data-index');
        let content = document.querySelector('.brands_content[data-index="' + index + '"]');

        t.classList.add('brands_item-active');
        content.classList.add('brands_content-active');
    }

    setIndex() {
        for (let i = 0; i < this.tabList.length; i++) {
            this.tabList[i].setAttribute('data-index', i);
            this.contentList[i].setAttribute('data-index', i);
        }
    }

    removePrev() {
        for (let i = 0; i < this.tabList.length; i++) {
            this.tabList[i].classList.remove('brands_item-active');
            this.contentList[i].classList.remove('brands_content-active');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let brandsItems = new BrandsItems();
})
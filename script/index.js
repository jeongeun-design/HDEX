const hero = document.querySelector('.hero_swiper');
const newWrap = document.querySelectorAll('.new_swiper');
const bestWrap = document.querySelector('.best_swiper');
const promotion = document.querySelector('.promotion');
const collectionWrap = document.querySelector('.collection_swiper');
const archivesWrap = document.querySelector('.archives_swiper');
const newTitle = document.querySelectorAll('.new_wrap .tab_menu a');
const newContent = document.querySelectorAll('.tab_contents .new_ct_wrap');
const bestTitle = document.querySelectorAll('.best_wrap .tab_menu a');
const bestContent = document.querySelectorAll('.tab_contents .best_swiper');
const festaTitle = document.querySelectorAll('.festa_right .tab_menu a');
const festaContent = document.querySelectorAll('.festa_right .tab_contents .festa_swiper');

console.log(hero, newWrap, bestWrap, promotion, collectionWrap, archivesWrap);
console.log('---------');
console.log(newTitle,'-----',newContent,'-----',bestTitle,bestContent, festaTitle, festaContent);

/* ================================================festa_swiper 탭메뉴 */
for(let festaTab of festaTitle){
    console.log(festaTab);
    festaTab.addEventListener('click',function(e){
        e.preventDefault();
        for (const title of festaTitle) {
            title.classList.remove('active');
        }
        for (const content of festaContent) {
            content.style.display = 'none';
        }
        festaTab.classList.add('active');
        const festaIndex = this.dataset.index;
        festaContent[festaIndex].style.display = 'block';
    });
}
/* ================================================best_swiper 탭메뉴 */
for(let bestTab of bestTitle){
    console.log(bestTab);
    bestTab.addEventListener('click',function(e){
        e.preventDefault();
        for (const title of bestTitle) {
            title.classList.remove('active');
        }
        for (const content of bestContent) {
            content.style.display = 'none';
        }
        bestTab.classList.add('active');
        const bestIndex = this.dataset.index;
        bestContent[bestIndex].style.display = 'block';
    });
}
/* ================================================new_swiper 탭메뉴 */
for(let newTab of newTitle){
    console.log(newTab);
    newTab.addEventListener('click',function(e){
        e.preventDefault();
        for (const title of newTitle) {
            title.classList.remove('active');
        }
        for (const content of newContent) {
            content.style.display = 'none';
        }
        newTab.classList.add('active');
        const ntIndex = this.dataset.index;
        newContent[ntIndex].style.display = 'block';
    });
}

/* ================================================archives Swiper */
const archivesSwiper = new Swiper(archivesWrap,{
    loop:true,
    slidesPerView:3,
    spaceBetween:20,
})
/* ================================================collection Swiper */
const collectionSwiper = new Swiper(collectionWrap,{
    loop:true,
    slidesPerView:3,
    spaceBetween:28,
    autoplay:true,
})

/* ================================================festa Swiper */
const festaTSwiper = new Swiper(festaContent[0],{
    loop:true,
    slidesPerView:3,
    spaceBetween:20,
    pagination: {
        el: '.festa_right .swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.festa_right .tab_contents .swiper-button-next.festa_next',
        prevEl: '.festa_right .tab_contents .swiper-button-prev.festa_prev',
    },
})
const festaBSwiper = new Swiper(festaContent[1],{
    loop:true,
    slidesPerView:3,
    spaceBetween:20,
    pagination: {
        el: '.festa_right .swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.festa_right .tab_contents .swiper-button-next.festa_next',
        prevEl: '.festa_right .tab_contents .swiper-button-prev.festa_prev',
    },
})

/* ================================================promotion Swiper */
const promotionSwiper = new Swiper(promotion,{
    loop:true,
    autoplay:{delay:2000,},
    navigation: {
        nextEl: '.promotion .swiper-button-next.pr_next',
        prevEl: '.promotion .swiper-button-prev.pr_prev',
    },
})

/* ================================================best Swiper */
const bestWAwiper = new Swiper(bestContent[2],{
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
    pagination: {
        el: '.best_wrap .swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.best_wrap .tab_contents .swiper-button-next.best_next',
        prevEl: '.best_wrap .tab_contents .swiper-button-prev.best_prev',
    },
})
const bestWSwiper = new Swiper(bestContent[1],{
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
    pagination: {
        el: '.best_wrap .swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.best_wrap .tab_contents .swiper-button-next.best_next',
        prevEl: '.best_wrap .tab_contents .swiper-button-prev.best_prev',
    },
})
const bestSwiper = new Swiper(bestWrap,{
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
    pagination: {
        el: '.best_wrap .swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.best_wrap .tab_contents .swiper-button-next.best_next',
        prevEl: '.best_wrap .tab_contents .swiper-button-prev.best_prev',
    },
})

/* ================================================new Swiper */
/*
const newASwiper = new Swiper(newContent[3],{
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
    pagination: {
        el: '.new_wrap .swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.new_wrap .tab_contents .swiper-button-next.new_next',
        prevEl: '.new_wrap .tab_contents .swiper-button-prev.new_prev',
    },
})
const newWSwiper = new Swiper(newContent[2],{
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
    pagination: {
        el: '.new_wrap .swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.new_wrap .tab_contents .swiper-button-next.new_next',
        prevEl: '.new_wrap .tab_contents .swiper-button-prev.new_prev',
    },
})
const newMSwiper = new Swiper(newContent[1],{
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
    pagination: {
        el: '.new_wrap .swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.new_wrap .tab_contents .swiper-button-next.new_next',
        prevEl: '.new_wrap .tab_contents .swiper-button-prev.new_prev',
    },
}) */
const newGSwiper = new Swiper(newContent[0].children[0],{
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
    pagination: {
        el: '.new_wrap .swiper-pagination.glc_pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: document.querySelector('.glc_next'),
        prevEl: document.querySelector('.glc_prev'),
    },
})

/* ================================================hero Swiper */
const heroSwiper = new Swiper(hero,{
    autoplay:{delay:2000,},
    loop:true,
    pagination: {
        el: '.hero_swiper .swiper-pagination',
        type: 'progressbar',
    },
});
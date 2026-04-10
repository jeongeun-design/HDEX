const hero = document.querySelector('.hero_swiper');
const newWrap = document.querySelector('.new_swiper');
const bestWrap = document.querySelector('.best_swiper');
const promotion = document.querySelector('.promotion');
const festaWrap = document.querySelector('.festa_swiper');
const collectionWrap = document.querySelector('.collection_swiper');
const archivesWrap = document.querySelector('.archives_swiper');
console.log(hero, newWrap, bestWrap, promotion, festaWrap, collectionWrap, archivesWrap);

const archivesSwiper = new Swiper(archivesWrap,{
    loop:true,
    slidesPerView:3,
    spaceBetween:20,
})
const collectionSwiper = new Swiper(collectionWrap,{
    loop:true,
    slidesPerView:3,
    spaceBetween:28,
    // autoplay:true,
})

const festaSwiper = new Swiper(festaWrap,{
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

const promotionSwiper = new Swiper(promotion,{
    loop:true,
    autoplay:{delay:2000,},
    navigation: {
        nextEl: '.promotion .swiper-button-next.pr_next',
        prevEl: '.promotion .swiper-button-prev.pr_next',
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

const newSwiper = new Swiper(newWrap,{
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

const heroSwiper = new Swiper(hero,{
    autoplay:{delay:2000,},
    loop:true,
    pagination: {
        el: '.hero_swiper .swiper-pagination', // 해당 슬라이더 내의 페이지네이션 선택
        type: 'progressbar', // 점(bullet)이 아닌 바(bar) 형태
    },
});
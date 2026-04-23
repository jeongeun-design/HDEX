/**
 * GitHub Repository Phishing Alert Appeal & Project Verification
이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
 * PROJECT: Portfolio Prototype
 * WARNING: This script does not process real transactions or user credentials.
 * All functions are for demonstration purposes only.
 */


const hero = document.querySelector('.hero_swiper');
const newWrap = document.querySelectorAll('.new_swiper');
const bestWrap = document.querySelector('.best_swiper');
const promotion = document.querySelector('.promotion');
const collectionWrap = document.querySelector('.collection_swiper');
const archivesWrap = document.querySelector('.archives_swiper');
const newTitle = document.querySelectorAll('.new_wrap .tab_menu a');
const newContent = document.querySelectorAll('.tab_contents .new_ct_wrap');
const bestTitle = document.querySelectorAll('.best_wrap .tab_menu a');
const bestContent = document.querySelectorAll('.tab_contents .best_ct_wrap');
// const bestCtContent = document.querySelectorAll('.tab_contents .best_ct_wrap');
const festaTitle = document.querySelectorAll('.festa_right .tab_menu a');
const festaContent = document.querySelectorAll('.festa_right .tab_contents .festa_ct_wrap');

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
console.log('.festa_bottom_prev');
const festaBSwiper = new Swiper(festaContent[1].children[0],{
    loop:true,
    slidesPerView:3,
    spaceBetween:20,
    pagination: {
        el: document.querySelector('.festa_bottom_pagination'),
        type: 'progressbar',
    },
    navigation: {
        prevEl: '.festa_bottom_prev',
        nextEl: '.festa_bottom_next',
    },
})
const festaTSwiper = new Swiper(festaContent[0].children[0],{
    loop:true,
    slidesPerView:3,
    spaceBetween:20,
    pagination: {
        el: '.festa_top_pagination',
        type: 'progressbar',
    },
    navigation: {
        prevEl: document.querySelector('.festa_top_prev'),
        nextEl: document.querySelector('.festa_top_next'),
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
const bestASwiper = new Swiper(bestContent[2].children[0],{
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
    pagination: {
        el: document.querySelector('.best_acc_pagination'),
        type: 'progressbar',
    },
    navigation: {
        prevEl: document.querySelector('.best_acc_prev'),
        nextEl: document.querySelector('.best_acc_next'),
    },
})
const bestWSwiper = new Swiper(bestContent[1].children[0],{
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
    observer: true,
    observeParents: true,
    pagination: {
        el: document.querySelector('.best_women_pagination'),
        type: 'progressbar',
    },
    navigation: {
        prevEl: document.querySelector('.best_women_prev'),
        nextEl: document.querySelector('.best_women_next'),
    },
})
const bestMSwiper = new Swiper(bestContent[0].children[0],{
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
    pagination: {
        el: document.querySelector('.best_man_pagination'),
        type: 'progressbar',
    },
    navigation: {
        prevEl: document.querySelector('.best_man_prev'),
        nextEl: document.querySelector('.best_man_next'),
    },
})

/* ================================================ new Swiper */

const newASwiper = new Swiper(newContent[3].children[0],{
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
    pagination: {
        el: '.new_wrap .swiper-pagination.new_acc_pagination',
        type: 'progressbar',
    },
    navigation: {
        prevEl: document.querySelector('.new_acc_prev'),
        nextEl: document.querySelector('.new_acc_next'),
    },
})
const newWSwiper = new Swiper(newContent[2].children[0],{
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
    pagination: {
        el: '.new_wrap .swiper-pagination.new_women_pagination',
        type: 'progressbar',
    },
    navigation: {
        prevEl: document.querySelector('.new_women_prev'),
        nextEl: document.querySelector('.new_women_next'),
    },
})
const newMSwiper = new Swiper(newContent[1].children[0],{
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
    pagination: {
        el: '.new_wrap .swiper-pagination.new_men_pagination',
        type: 'progressbar',
    },
    navigation: {
        prevEl: document.querySelector('.new_men_prev'),
        nextEl: document.querySelector('.new_men_next'),
    },
})
const newGSwiper = new Swiper(newContent[0].children[0],{
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
    pagination: {
        el: '.new_wrap .swiper-pagination.new_glc_pagination',
        type: 'progressbar',
    },
    navigation: {
        prevEl: document.querySelector('.new_glc_prev'),
        nextEl: document.querySelector('.new_glc_next'),
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
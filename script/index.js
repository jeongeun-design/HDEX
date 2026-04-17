const hero = document.querySelector('.hero_swiper');
const newWrap = document.querySelector('.new_swiper');
const bestWrap = document.querySelector('.best_swiper');
const promotion = document.querySelector('.promotion');
const festaWrap = document.querySelector('.festa_swiper');
const collectionWrap = document.querySelector('.collection_swiper');
const archivesWrap = document.querySelector('.archives_swiper');
const newTitle = document.querySelectorAll('.new_wrap .tab_menu a');
const newContent = document.querySelectorAll('.tab_contents .new_swiper');
console.log(hero, newWrap, bestWrap, promotion, festaWrap, collectionWrap, archivesWrap);
console.log('---------');
console.log(newTitle,newContent);


newTitle[0].addEventListener('click', function(e) {
    e.preventDefault();
    for (const title of newTitle) {
        title.classList.remove('active');
    }
    for (const content of newContent) {
        content.style.display = 'none';
    }
    newTitle[0].classList.add('active');
    newContent[0].style.display = 'block';
});
newTitle[1].addEventListener('click', function(e) {
    e.preventDefault();
    for (const title of newTitle) {
        title.classList.remove('active');
    }
    for (const content of newContent) {
        content.style.display = 'none';
    }
    newTitle[1].classList.add('active');
    newContent[1].style.display = 'block';
});
newTitle[2].addEventListener('click', function(e) {
    e.preventDefault();
    for (const title of newTitle) {
        title.classList.remove('active');
    }
    for (const content of newContent) {
        content.style.display = 'none';
    }
    newTitle[2].classList.add('active');
    newContent[2].style.display = 'block';
});
newTitle[3].addEventListener('click', function(e) {
    e.preventDefault();
    for (const title of newTitle) {
        title.classList.remove('active');
    }
    for (const content of newContent) {
        content.style.display = 'none';
    }
    newTitle[3].classList.add('active');
    newContent[3].style.display = 'block';
});


const archivesSwiper = new Swiper(archivesWrap,{
    loop:true,
    slidesPerView:3,
    spaceBetween:20,
})
const collectionSwiper = new Swiper(collectionWrap,{
    loop:true,
    slidesPerView:3,
    spaceBetween:28,
    autoplay:true,
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
        prevEl: '.promotion .swiper-button-prev.pr_prev',
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

/* const newSwiper = new Swiper(newWrap,{
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
})
const newGSwiper = new Swiper(newContent[0],{
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
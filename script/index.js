const hero = document.querySelector('.hero_swiper');
const newWrap = document.querySelector('.new_swiper');
console.log(hero, newWrap);

const newSwiper = new Swiper(newWrap,{
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
})

const heroSwiper = new Swiper(hero,{
    autoplay:{delay:2000,},
    loop:true,

    pagination:{
        el:'.swiper-pagination',
        type: 'progressber',
        },
});
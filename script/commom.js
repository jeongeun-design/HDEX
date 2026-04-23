const topBtn = document.querySelector('#fab #top');
const csBtn = document.querySelector('#fab #cs');
const gnb = document.querySelectorAll('header .gnb > li');
const lnb = document.querySelectorAll('header .lnb');
const subLnb = document.querySelectorAll('header .sub_lnb');
const menuBack = document.querySelector('.menu_back');
const searchWrap = document.querySelector('.user_nav .search_wrap');
const search = document.querySelector('.user_nav .search');
console.log(gnb, lnb, subLnb, menuBack, topBtn, searchWrap, search);

searchWrap.style.display = 'none';
/*
search.addEventListener('click',function(e){
    e.preventDefault(); 
    searchWrap.style.display = 'block';
}) */

topBtn.style.display = 'none';

window.addEventListener('scroll',function(){
    if(window.scrollY >= 200) topBtn.style.display = 'flex';
    else topBtn.style.display = 'none';
})

topBtn.addEventListener('click',function(e){
    e.preventDefault(); 
    window.scrollTo(0, 0);
})
csBtn.addEventListener('click',function(e){
    e.preventDefault(); 
})

for(let i of gnb){
    console.log(i.children[0]);
    i.addEventListener('mouseover', function(){
        if (i.children[1]) {
            i.children[1].style.display = 'flex';
            menuBack.style.display = 'flex';
        }
    });
    i.addEventListener('mouseout', function(){
        if (i.children[1]) {
            i.children[1].style.display = 'none';
            menuBack.style.display = 'none';
        }
    });
}

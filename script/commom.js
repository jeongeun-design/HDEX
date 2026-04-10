const gnb = document.querySelectorAll('header .gnb > li');
const lnb = document.querySelectorAll('header .lnb');
const subLnb = document.querySelectorAll('header .sub_lnb');
console.log(gnb, lnb, subLnb);
console.log('아아러ㅏ어ㅏ');

for(let i of gnb){
    console.log(i.children[0]);
    i.addEventListener('mouseover', function(){
        if (i.children[1]) {
            i.children[1].style.display = 'block';
        }
    });
    i.addEventListener('mouseout', function(){
        if (i.children[1]) {
            i.children[1].style.display = 'none';
        }
    });
}
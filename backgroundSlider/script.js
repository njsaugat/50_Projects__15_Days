const slides=document.body.querySelectorAll('.slide')
const leftArrow=document.body.querySelector('.left-arrow')
const rightArrow=document.body.querySelector('.right-arrow')
const body=document.body;

let index=0;
body.style.backgroundImage=slides[index].style.backgroundImage


rightArrow.addEventListener('click',()=>{
    removeAllActives()
    let slide=slides[(++index)%slides.length];
    slide.classList.add('active');
    body.style.backgroundImage=slide.style.backgroundImage
})
leftArrow.addEventListener('click',()=>{
    removeAllActives()
    if(index<0){
        index=slides.length-1;
    }else if(index===0){
        index=slides.length
    }
    let slide=slides[(--index)%slides.length]
    slide.classList.add('active');
    body.style.backgroundImage=slide.style.backgroundImage

})

function removeAllActives(){

    slides.forEach((slide,index)=>{
        slide.classList.remove('active')
    })
}
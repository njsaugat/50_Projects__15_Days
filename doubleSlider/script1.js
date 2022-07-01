const container=document.body.querySelector('.container');
const right=document.body.querySelector('.right')
const left=document.body.querySelector('.left')

const downBtn=document.body.querySelector('.down') 
const upBtn=document.body.querySelector('.up') 

const slidesLength=right.querySelectorAll('div').length

let activeSlideIndex=0;

left.style.top=`-${(slidesLength-1) *83.433}%`//this is just to change one element's pos

upBtn.addEventListener('click',()=> changeSlide('up') )
downBtn.addEventListener('click',()=> changeSlide('down') )

const changeSlide=(direction)=>{
    const height=container.clientHeight
    if(direction ==='up'){
        activeSlideIndex++
        if(activeSlideIndex>slidesLength-1){//at last move to top
            activeSlideIndex=0;
        }
    }
    else if(direction==='down'){
        activeSlideIndex--
        if(activeSlideIndex<0){
            activeSlideIndex=slidesLength-1;
        }
    }

    right.style.transform=`translateY(-${activeSlideIndex * height}px)`
    left.style.transform=`translateY(${activeSlideIndex * height}px)`
}
const circles=document.querySelectorAll('.circle')
const lines=document.querySelectorAll('.line')
const next=document.querySelector('.next')
const prev=document.querySelector('.prev')


const removeActiveClass=()=>{
    circles.forEach(circle=>{
        circle.classList.remove('active')
    })
    // circles[index].classList.remove('active')
}

var click=1;
var line=0
next.addEventListener('click',()=>{
    // removeActiveClass()
    if(click<circles.length){
        circles[click].classList.add('active')
        circles[click++].classList.add('active')
        lines[line++].classList.add('active-line')
        // console.log('after',click)
    }
    if(click===circles.length){
        next.classList.remove('active-button')
        click=circles.length
    }
    if(click>1){
        prev.classList.add('active-button')
    }
    
})

prev.addEventListener('click',()=>{
    if(click>1){
        click--
        line--
        circles[click].classList.remove('active')
        lines[line].classList.remove('active-line')
    }
    if(click===1){
        prev.classList.remove('active-button')
    }
    if(click<circles.length){
        next.classList.add('active-button')
    }
    
})
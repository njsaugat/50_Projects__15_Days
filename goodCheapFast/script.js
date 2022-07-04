// const sliders=document.body.querySelectorAll('.option i')
// sliders.forEach(slider=>{
//     slider.addEventListener('click',()=>{
//         slider.classList.toggle('fa-toggle-on')
//         slider.classList.toggle('fa-toggle-off')
//     })
// })

const sliders=document.body.querySelectorAll('.slider')

sliders.forEach((slider,index)=>{
    slider.addEventListener('click',()=>{
        slider.classList.toggle('active')
        checkOthers()
    })
    
})
function checkOthers(){
    let count=0;
    sliders.forEach(slide=>{
        if(slide.classList.contains('active')){
            count++;
        }
    })
    if(count>2){
        sliders[randomIndex()].classList.remove('active');
    }
}

function randomIndex(){
    return Math.floor(Math.random()* sliders.length)
}
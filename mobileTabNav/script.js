
const tabs=document.body.querySelectorAll('.tab')
const images=document.body.querySelectorAll('.image')

tabs.forEach((tab,index)=>{
    tab.addEventListener('click',function(){
        removeActiveClass()
        images[index].classList.add('active')
        this.className+=' active'
    })
})

function removeActiveClass(){
    images.forEach(image=>{
        image.classList.remove('active')
    })
    tabs.forEach(tab=>{
        tab.classList.remove('active')
    })
}
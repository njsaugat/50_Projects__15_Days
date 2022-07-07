const bars=document.body.querySelector('.nav .fa-bars')
const nav=document.body.querySelector('.nav')

const navigation=document.body.querySelector('.navigation')
const mark=document.body.querySelector('.fa-xmark')

const navis=document.body.querySelectorAll('.navi')
bars.addEventListener('click',()=>{
    navis.forEach(nav_el=>nav_el.classList.add('visible'))
    // navigation.classList.add('active')
    nav.classList.add('inactive')  

    
})

mark.addEventListener('click',()=>{
    navis.forEach(nav_el=>nav_el.classList.remove('visible'))
    // navigation.classList.remove('active')
    nav.classList.remove('inactive')
})


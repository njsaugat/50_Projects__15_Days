const elements=document.body.querySelectorAll('.animated')

window.addEventListener('load',()=>{

    setTimeout(()=>{
        document.body.classList.add('active')
        elements.forEach(element=>{
            element.classList.remove('animated')
        })
    },5000)
})
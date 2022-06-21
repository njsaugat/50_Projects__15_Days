const contents=document.querySelectorAll('.content')
window.addEventListener('scroll',()=>{
    const triggerBottom=window.innerHeight/5 *4;
    contents.forEach((content)=>{
        // content.style.opacity=1;    
        const boxTop=content.getBoundingClientRect().top;
        if(boxTop<triggerBottom){
            content.classList.add('show')
        }else{
            content.classList.remove('show')

        }
    })
})
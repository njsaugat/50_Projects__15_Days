const navigation=document.body.querySelector('.navigation')
const websiteBanner=document.body.querySelector('.website-banner')

window.addEventListener('scroll',()=>{
    
    if(websiteBanner.getBoundingClientRect().top<0){
        navigation.classList.add('active')
    }else{
        navigation.classList.remove('active')
    }

    // if(window.scrollY>navigation.offsetHeight+150){
    //     navigation.classList.add('active')
    // }else{
    //     navigation.classList.remove('active')
    // }

})


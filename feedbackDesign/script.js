const sendReview=document.body.querySelector('.send-review button')
const previous=document.body.querySelector('.previous')
const after=document.body.querySelector('.after')
const feedback =document.body.querySelector('.feedback span')

const emotions=document.body.querySelectorAll('.emotion')
let text;


// emotions.forEach((emotion,index)=>{
//     emotion.addEventListener('click',()=>{
//         removeAllActive()
//         emotion.classList.add('active')
//         passIndex(index)
//     })
// })


//using event bubbling

previous.addEventListener('click',(e)=>{
    if(e.target.parentNode.classList.contains('emotion')){
        removeAllActive()
        e.target.parentNode.classList.add('active')
        text=e.target.nextElementSibling.innerText        
        // passIndex()
    }else if(e.target.classList.contains('emotion')){
        removeAllActive()
        e.target.classList.add('active')
        text=e.target.firstChild.nextElementSibling.innerText
    }
    
})

sendReview.addEventListener('click',()=>{
    previous.style.opacity=`0`
    after.classList.add('active')
    if(text){
        feedback.innerText=text;
    }else{
        feedback.innerHTML=`No response submitted`;

    }
})

function passIndex(idx){
    text=emotions[idx].innerText
}

function removeAllActive(){
    emotions.forEach(emotion=>{
        emotion.classList.remove('active')
    })
}
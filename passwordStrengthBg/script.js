const password=document.body.querySelector("input[type='password']")
const container=document.body.querySelector(".container")
let str;
let previousLength=0;
let blurVal=27;
password.addEventListener('input',(e)=>{
   str=e.target.value
   if(str.length>previousLength){
        blurVal-=3
        document.body.style.backdropFilter=`blur(${blurVal}px)`
    }else{
        blurVal+=3
       document.body.style.backdropFilter=`blur(${blurVal}px)`
    
   }
   console.log(blurVal)
   if(blurVal<=0){
    container.classList.add('active')
    }else{
       container.classList.remove('active')

   }
   previousLength=str.length

})
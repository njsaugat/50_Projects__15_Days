const centerText=document.querySelector('.center-text');
const image=document.querySelector('.image');
let value=1;
var intervalId
let blur=99;

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
window.addEventListener('load',()=>{
    intervalId=setInterval(()=>{
        if(value<=100){
            centerText.innerHTML=`${value++}%`
            // image.style.webkitFilter = `blur(${blur--}px)`;
            // centerText.style.opacity=(blur/80)
            image.style.webkitFilter = `blur(${scale(value,0,100,30,0)}px)`;
            centerText.style.opacity=scale(value,0,100,1,0)
        }else{
            // centerText.style.display='none'
            clearInterval(intervalId)
        }
    },100)
})

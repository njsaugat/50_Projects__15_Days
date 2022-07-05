const imagesEL=document.body.querySelector('.images')
const images=document.body.querySelectorAll('.images img')

const leftBtn=document.body.querySelector('.left')
const rightBtn=document.body.querySelector('.right')
let idx=0;

let interval=setInterval(run,2000)


function run(){
    idx++;
    chanegImage()
}

function chanegImage(){
    if(idx>images.length-1){
        idx=0;
    }else if(idx<0){
        idx=images.length-1;
    }
    imagesEL.style.transform=`translateX(${-idx*500}px)`
}

function resetInterval(){
    clearInterval(interval)
    interval=setInterval(run,2000)
}

rightBtn.addEventListener('click',()=>{
    idx++;
    chanegImage();

    resetInterval()
})
leftBtn.addEventListener('click',()=>{
    idx--;
    chanegImage();

    resetInterval()
})

// let index=0
// let left=`-100%`
// setInterval(()=>{
//     // if(index<images.length){
//         console.log(index)
//         images[index].style.left=left;
//         images[index].style.opacity=`0`;
//         // passCurrentIndex(index)
//         index++
//         if(index<images.length){
//             images[index].style.opacity=`1`;
//         }else{
//             index=0
//             left=`0%`
//             images[index].style.opacity=`1`;
//             images[index].style.left=left;

//         }
    
// },2000)


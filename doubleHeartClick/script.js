const likes=document.body.querySelector('.likes span')
const image=document.body.querySelector('.image')

// const love=document.body.querySelector('.image .love')
let likesCounter;

window.addEventListener('load',()=>{
    likesCounter=0;
})

let love;
image.addEventListener('dblclick',(e)=>{
    // if(love){removeLove(love)}
    likesCounter++;
    likes.innerHTML=likesCounter;

    const totalScreenX=e.clientX;
    const totalScreenY=e.clientY;

    const imageX=e.target.offsetLeft
    const imageY=e.target.offsetTop
    // const imageX=image.offsetLeft
    // const imageY=image.offsetTop

    const insideImageX=totalScreenX-imageX;
    const insideImageY=totalScreenY-imageY;

    // love.classList.add('active')
    let love= createLove(insideImageX,insideImageY);
    removeLove(love)
    // console.log(insideImageX,insideImageY)
})

function createLove(insideImageX,insideImageY){
    const love=document.createElement('span');
    love.classList.add('love');
    love.classList.add('active');
    love.style.top=insideImageY+'px'
    love.style.left=insideImageX+'px'
    
    image.appendChild(love)
    return love;

}

function removeLove(love){
    setTimeout(()=>{
        love.remove()
    },500)
}

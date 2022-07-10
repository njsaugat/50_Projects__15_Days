const container=document.body.querySelector('.container')

const IMAGES=30;
let cb = 0;
for(let i=0;i<IMAGES;i++){
    const image=document.createElement('div')

    const date=new Date().getMilliseconds()
    setBg(image,cb)
    cb++;
    image.classList.add('image')
    container.appendChild(image) 
}

function setBg(image,date){
    setTimeout(()=>{
        const url="url(https://picsum.photos/200/300/?random&t=" + date +")";
        image.style.backgroundImage=url;
    
    },10)
}


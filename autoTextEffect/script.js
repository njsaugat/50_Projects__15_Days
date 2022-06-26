const text=document.body.querySelector('.text')
let value=0
setInterval(()=>{
    text.style.width=`${(value++)%25}%`
},100)
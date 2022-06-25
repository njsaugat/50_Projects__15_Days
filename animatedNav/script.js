// const cross=document.querySelector('.navig  i');
// const navig=document.querySelector('.navig');
// const nav=document.querySelector('.nav');
// const li=document.querySelectorAll('.nav li');
// cross.addEventListener('click',()=>{
//     nav.classList.toggle('active');
//     // const i=document.createElement('i')
//     // i.classList.add('fa-solid', 'fa-bars')
//     // navig.appendChild(i);
//     cross.classList.toggle('fa-solid', 'fa-bars')
//     // li.forEach(l=>l.style.display='none');
// })

const line=document.querySelector('.icon')
const nav=document.querySelector('.nav')
line.addEventListener('click',()=>{
    nav.classList.toggle('active')
})

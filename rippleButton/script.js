const button=document.body.querySelector('button.ripple')

button.addEventListener('click',()=>{
    const span=document.createElement('span')
    span.classList.add('circle')
    span.style=`height: 30px;
    width: 30px;
    border-radius: 15px;
    transform: scale(2);`
    button.appendChild(span)
})
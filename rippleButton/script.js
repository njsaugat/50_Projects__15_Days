const buttons=document.body.querySelectorAll('button.ripple')

// button.addEventListener('click',()=>{
//     const span=document.createElement('span')
//     span.classList.add('circle')
//     span.style=`height: 30px;
//     width: 30px;
//     border-radius: 15px;
//     transform: scale(2);`
//     button.appendChild(span)
// })

const ripple=document.body.querySelector('.ripple')

buttons.forEach(button=>{
    button.addEventListener('click',function(e){
        const x=e.clientX
        const y=e.clientY

        const buttonTop=e.target.offsetTop
        const buttonLeft=e.target.offsetLeft

        const xInside=x-buttonLeft
        const yInside=y-buttonTop

        const circle=document.createElement('span')

        circle.classList.add('circle')
        circle.style.top=yInside+'px'
        circle.style.left=xInside+'px'

        this.appendChild(circle)

        setTimeout(()=>{
            circle.remove()
        },500)
    })
})

const container= document.body.querySelector('.container')

const SQUARES=513

const colors=['#9400D3',
'#4B0082',
'#0000FF',
'#00FF00',
'#FFFF00',
'#FF7F00',
'#FF0000']

for(let i=0;i<SQUARES;i++){
    const square=document.createElement('div')
    square.classList.add('square')

    let originalColor=getComputedStyle(square).getPropertyValue('background-color')

    square.addEventListener('mouseover',()=>{
        
        console.log(originalColor)
        const color=randomColor()
        square.style.backgroundColor=color;
        // square.style.transition=`0.6s ease`
        square.style.boxShadow=`0px 0px 2px ${color}, 0 0 10px ${color}`
        setTimeout(()=>{
            square.style.backgroundColor=originalColor
            square.style.boxShadow=`0px 0px 0px ${originalColor}`
        },1000)
    })


    container.appendChild(square)
}





function randomColor(){
    return colors[(Math.floor(Math.random()* colors.length))]
}



// const squares=document.body.querySelectorAll('.square')
// console.log(squares)


// squares.forEach(square=>{
    // let originalColor=getComputedStyle(square).getPropertyValue('background-color')

    // square.addEventListener('mouseover',()=>{
        
    //     console.log(originalColor)
    //     const color=randomColor()
    //     square.style.backgroundColor=color;
    //     // square.style.transition=`0.6s ease`
    //     square.style.boxShadow=`0px 2px 5px ${color}`
    //     setTimeout(()=>{
    //         square.style.backgroundColor=originalColor
    //         square.style.boxShadow=`0px 0px 0px ${originalColor}`
    //     },500)
    // })
    // square.addEventListener('mouseleave',()=>{
    //     square.style.backgroundColor=originalColor

    // })
// })
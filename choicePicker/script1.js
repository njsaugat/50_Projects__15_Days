const textarea=document.body.querySelector('textarea')
const choicesEl=document.body.querySelector('.choices')
textarea.focus()

textarea.addEventListener('keyup',(event)=>{
    createTags(event.target.value)

    if(event.key==='Enter'){
        setTimeout(()=>{
            event.target.value=''
        },10 )

        randomSelect()
    }
})

function createTags(input){
    const choices=input.split(',')
        .filter(choice=>choice.trim()!=='')
        .map(choice=>choice.trim())             
    choicesEl.innerHTML=''

    choices.forEach(choice=>{
        const choiceEl=document.createElement('span');
        choiceEl.classList.add('choice-list')
        choiceEl.innerText=choice
        choicesEl.appendChild(choiceEl)
    })
}

function randomSelect(){
    const times=30;
    
    //setting the blinking
    const interval=setInterval(()=>{
        const randomTag=pickRandomTag()
        activateChoice(randomTag)
        
        setTimeout(()=>{
             deActivateChoice(randomTag)
        },100)
    },100)

    //finally picking one
    setTimeout(()=>{
        clearInterval(interval)
        
        setTimeout(()=>{
            const randomTag=pickRandomTag() 
            activateChoice(randomTag)
        },100)
    },times*100)
    
}

function pickRandomTag(){
    const choicelist=document.querySelectorAll('.choice-list')
    return choicelist[Math.floor(Math.random()*choicelist.length)]
}


function activateChoice(choice){
    choice.classList.add('activated')
}
function deActivateChoice(choice){
    choice.classList.remove('activated')
}







// let prevIndex=-1;
// let para=document.createElement('p')
// textarea.addEventListener('input',(e)=>{
//     let currIndex=(e.target.value.length-1) -e.target.value.split("").reverse().join("").indexOf(',');
//     let values=e.target.value.split(',')
//     if(e.target.value.includes(',') && currIndex!==prevIndex){
//         prevIndex=currIndex;
//         let para1=document.createElement('p')        
//         para=para1;
//     }
//     para.innerHTML=values[values.length-1];
//     para.classList.add('choice-list');
//     choices.appendChild(para)
//     textarea.addEventListener("keypress",(event)=>{
//         if (event.key === "Enter") {
//             choices.classList.add('active')
//             animateAll();
//         }
//     })
// })

// function animateAll(){
//     const choiceList=document.body.querySelectorAll('.choice-list');
//     choiceList.forEach(choice=>{
//         setInterval(()=>{
//             removeOther()
//             choice.classList.add('activated')
//         },5000)
//     })
// }

// function removeOther(){
//     const choiceList=document.body.querySelectorAll('.choice-list');
//     choiceList.forEach(choice=>{
//         choice.classList.remove('activated')

//     })

// }
const options=document.body.querySelectorAll('.option')
const optionsActual=document.body.querySelectorAll('.option label')
const submit=document.body.querySelector('.btn')
const ques=document.body.querySelector('.container .ques')
const circles=document.body.querySelectorAll('.circle')

const container=document.body.querySelector('.container')
const questions=[
    {
        question:'Which language runs in the browser?',
        option:['Java','Python','C++','Javascript']
    },
    {
        question:'What does CSS stand for?',
        option:['Central Style Sheets','Cascading Style Sheets','Cascading Simple Sheets', 'Cars SUVs Sailboats']
    },
    {
        question:'What does HTML stand for?',
        option:['Hypertext Mark Language ','Hypertext Markup Language','Hypertext Markdown Language','Hypertext Mark Literature']
    },
    {
        question:'When was Javascript released',
        option:['1995','1994','1993','1991']
    }
]

const answers=[3,1,1,0]
let actualScore=0
let idx=0;
let initials=0;
let selectedIndex=false;

submit.addEventListener('click',()=>{
    if(idx<=questions.length && selectedIndex){
        let index=calculateIndex()
        calculateScore(index)
        questionPlacer()
        selectedIndex=false;
    }
})

function questionPlacer(){
    removeAllActive()
    if(idx<questions.length){

        const {question,option}=questions[idx]
        ques.innerText=question
        let optionIndex=0;
        optionsActual.forEach(optionEl=>{
            optionEl.innerText=option[optionIndex++]
        })
        idx++;
    }else{
        container.classList.add('message')
        container.innerHTML=`
                <div>Completed!!</div>
            <span>You answered ${actualScore}/${questions.length} questions correctly</span>    
        `
        submit.innerText=`Reload`
        submit.addEventListener('click',()=>{
            location.reload()
        })
    }
}

questionPlacer()//-->immediately place the ques

options.forEach((option,index)=>{
    option.addEventListener('click',()=>{
        removeAllActive()
        option.childNodes[3].classList.add('active')
        selectedIndex=true
        // passOptionIndex(index)
    })
})

function calculateIndex(){
    for(let i=0;i<circles.length;i++){
        if(circles[i].classList.contains('active')){
            return i
        }
    }
}

function calculateScore(index){
    if(initials<answers.length){
        if(index===answers[initials]){
            actualScore++
        }
        initials++;
    }
    else{
        initials=0;
    }
}



function removeAllActive(){
    options.forEach(option=>{
        option.childNodes[3].classList.remove('active')

    })
}
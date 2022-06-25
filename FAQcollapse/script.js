const buttons=document.body.querySelectorAll('.question-answer i')
const questions=document.body.querySelectorAll('.question-answer')

buttons.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        const className=button.className.split(' ')
        // button.classList.remove(className[1])
        button.classList.toggle('fa-times')
        questions[index].classList.toggle('active')

    })
})
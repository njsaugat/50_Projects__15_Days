const key=document.body.querySelector('.key')
const container=document.body.querySelector('.container')
let eventKey=document.body.querySelector('.event-key')
let eventKeyCode=document.body.querySelector('.key-code')
let eventCode=document.body.querySelector('.event-code')

window.addEventListener('keydown',(event)=>{
    eventKey.innerText= event.key===' '? 'Space':event.key  
    eventKeyCode.innerText=event.keyCode
    eventCode.innerText=event.code
    container.classList.add('deactivate')
    key.classList.add('activate')
})
const notifications=document.body.querySelector('.notifications')
const notification_btn=document.body.querySelector('.notification-btn .btn')
var topVal=90;
const messages=[
    'message One', 'message Two',
    'message Three', 'message Four'
]
const colors=[
    'red','green','rebeccapurple','black'
]
// var idx=0
notification_btn.addEventListener('click',()=>{
    const notificationDiv=document.createElement('div')
    notificationDiv.classList.add('notification')
    // notificationDiv.innerText=messages[(idx++)%messages.length]
    notificationDiv.innerText=getRandomNum()
    notificationDiv.style.color=colors[Math.floor(Math.random()*colors.length )]

    notificationDiv.style.opacity='1'
    notifications.appendChild(notificationDiv)
    notificationDiv.style.top=topVal+'%'
    topVal-=10;
    callMeForTimer(notificationDiv)

})

function getRandomNum(){
    return messages[Math.floor(Math.random()*messages.length )]
}

function callMeForTimer(notificationDiv){
    setTimeout(()=>{
        // notificationDiv.style.opacity='0'    
        notificationDiv.remove()
        topVal+=10
        // idx--;
    },2000)
}
// function notificationTime(time){
// }
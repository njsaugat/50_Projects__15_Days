const time=document.body.querySelector('.time')
let currentTime=new Date();
const secondHand=document.body.querySelector('.second')
const minuteHand=document.body.querySelector('.minute')
const hourHand=document.body.querySelector('.hour')
const date=document.body.querySelector('.date')

let secondDegree=0,minuteDegree=0,hoursDegree=0;

const mode=document.body.querySelector('.btn')
const body=document.body
console.log(body)
let hours,seconds,minutes;
setInterval(()=>{
    currentTime=new Date()
    hours=currentTime.getHours()
    minutes=currentTime.getMinutes()
    seconds=currentTime.getSeconds()
    time.innerText=`${hours <10? `0${hours}`:hours  }:${minutes<10? `0${minutes}`:minutes}:${seconds<10? `0${seconds}`:seconds}`
    date.innerText=`${currentTime.getMonth()+1} : ${currentTime.getDate()}`

    secondDegree=seconds * 6;
    minuteDegree=(minutes+(seconds/60) ) * 6 ;
    hoursDegree=((hours +(minutes/60) +(seconds/3600) )*30)%360;
    
    secondHand.style.transform=`translateX(-20%) rotate(${(secondDegree)}deg) `
    minuteHand.style.transform=`translateX(-20%) rotate(${(minuteDegree)}deg) `
    hourHand.style.transform=` rotate(${(hoursDegree)}deg) `
    
},10)

mode.addEventListener('click',()=>{
    mode.classList.toggle('active')
    body.classList.toggle('active')
    if(mode.classList.contains('active')){
        mode.innerText='Light Mode'
    }else{
        mode.innerText='Dark Mode'
    }
})



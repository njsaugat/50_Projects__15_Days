const bottles=document.body.querySelectorAll('.bottle')
const drank=document.body.querySelector('.drank')
const volume=document.body.querySelectorAll('.remain')[0]
const litre=document.body.querySelectorAll('.remain')[1]
let valuePercent=12.5;
let factor=(12.5)/2
let aboveTransfer=50+factor;//50 is set by default since the text is at center
let dailyTarget=2;
let visited=new Array(bottles.length).fill(false);
bottles.forEach((bottle,index)=>{
    bottle.addEventListener('click',()=>{
        bottle.classList.add('active')
        drank.classList.add('activate')
        volume.classList.add('activate')
        litre.classList.add('activate')
        if((valuePercent<=100 || aboveTransfer<=50)&& visited[index]===false){
            visited[index]=true;
            drank.style.height=`${valuePercent}%`
            drank.innerText=`${valuePercent}%`

            valuePercent+=12.5
            volume.style.bottom=`${aboveTransfer}%`
            litre.style.bottom=`${aboveTransfer-5}%`
            dailyTarget-=0.25;
            volume.innerText=`${dailyTarget}L`
            aboveTransfer+=factor
        }
        if(dailyTarget===0){
            volume.innerText=''
            litre.innerText=''
        }
    })
})

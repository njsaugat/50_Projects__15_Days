const values=document.body.querySelectorAll('.value')

const changed=document.body.querySelector('.changed')
// const replay=document.body.querySelector('.changed button')

let idx=values.length-1
let interval=setInterval(run,1000)

function run(){
    if(idx>=0){
        values[idx].classList.add('active')
        const index=idx;
        setTimeout(()=>removeActive(index),1000)//passing by closure;
        idx--;
    }else{
        changed.classList.add('active')
        changed.innerText=`GO`

        const replay=document.createElement('button')
        replay.innerText=`Replay`
        changed.appendChild(replay)

        replay.addEventListener('click',()=>{
            location.reload()
        })
        clearInterval(interval)
    }
}


run()//-->running this auto to immediately load stuff
function removeActive(idx){//using closure to maintain this stuff
        console.log(idx)
        values[idx].classList.remove('active')
}


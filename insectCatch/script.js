const screens=document.body.querySelectorAll('.screen')
const choose_insect_btns=document.body.querySelectorAll('.choose-insect-btn')

const start_btn=document.getElementById('start-btn')
const timeEl=document.body.querySelector('.time')
const scoreEl=document.body.querySelector('.score')
console.log(scoreEl)
const messageEl=document.body.querySelector('.message')
const game_container=document.body.querySelector('.game-container')
console.log(game_container)

let seconds=0;
let score=0;

let selected_insect={}

start_btn.addEventListener('click',()=>{
    screens[0].classList.add('up')
})


choose_insect_btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const img=btn.querySelector('img')
        const src=img.getAttribute('src')
        const alt=img.getAttribute('alt')
        selected_insect={src,alt}
        screens[1].classList.add('up')

        setTimeout(createInsect,1000)
        startGame()
    })

})

function startGame(){
    setInterval(increaseTime,1000)
}

function increaseTime(){
    timeEl.innerHTML=''
    let m=Math.floor(seconds/60)
    let s=seconds%60;
    m=m<10?`0${m}`:m;
    s=s<10?`0${s}`:s;
    const time=document.createElement('span')

    time.innerHTML=`Time: ${m}:${s}`
    timeEl.appendChild(time)
    console.log(timeEl)
    seconds++
}

function createInsect(){
    const {x,y}=randomNum()

    game_container.innerHTML+=`
        <div class="insect" style="top:${y}px; left:${x}px;">
        <img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform:rotate(${Math.random()*360}deg)">

    </div>
    `

    generateOther()
}

function generateOther(){
    const insects=document.body.querySelectorAll('.insect')
    increaseScore()

    insects.forEach(insect=>{
        insect.addEventListener('click',()=>{
            setTimeout(createInsect,1500)
        })
    })
}

function increaseScore(){
    score++;
    const scoreE=document.createElement('span')

    scoreE.innerHTML=`${score}`;
    scoreEl.appendChild(scoreE)
    // console.log(scoreEl)
}

function randomNum(){
    const width=window.innerWidth
    const height=window.innerHeight
    const x= Math.floor(Math.random() * (width-200) +100)
    const y= Math.floor(Math.random() * (height-200) +100)
    return {x,y}
}
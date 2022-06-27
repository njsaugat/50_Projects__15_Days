const text=document.body.querySelector('.text')
const displayText='We love programming!'

const arr=displayText.split('')
let index=0;
const speedy=document.body.querySelector('.speed')
var speed=800/speedy.value;

function writeText(){
    if(index<arr.length){       
        text.textContent+=arr[index]
        index++;
    }else{
        text.innerText=''
        index=0;
    }

    setTimeout(writeText,speed)
}

writeText()



speedy.addEventListener('input',e=> {
    speed=1000/e.target.value
})




// function set(speed){
//     setInterval(()=>{
//         if(index<arr.length){       
//             text.textContent+=arr[index]
//             index++;
//         }else{
//             text.innerText=''
//             index=0;
//         }   
//     },speed)
// }

// set(speed)
// speedy.addEventListener('click',writeFun(speedy.value))

// function writeFun(value){
//     if(index<arr.length){       
//         text.textContent+=arr[index]
//         index++;
//     }else{
//         text.innerText=''
//         index=0;
//     }
//     setInterval(writeFun,1000/value)
// }
const checks=document.body.querySelectorAll('.criterion i')
const passwordBtn=document.body.querySelector('.generate-password')
const passwordLength=document.body.querySelector('.password-length input')
const passwordValue=document.body.querySelector('.password-value')

const passwordCopy=document.body.querySelector('.password-field i')
let uppercase,lowercase,numbers,symbols;
let value=0;
checks.forEach((check,index)=>{
    uppercase=false;
    lowercase=false;
    numbers=false;
    symbols=false;
    
    let condition
    check.addEventListener('click',()=>{
        check.classList.toggle('far')
        check.classList.toggle('fa')
        condition=checks[index].classList.contains('fa')
        console.log(index)
        if(index===0){
            if (condition){uppercase=true;value++}
            else {uppercase=false;value--}
        } 
        if(index===1){
            if (condition){lowercase=true;value++}
            else {lowercase=false;value--}
        } 
        if(index===2){
            if (condition){numbers=true;value++}
            else {numbers=false;value--}
        } 
        if(index===3){
            if (condition){symbols=true;value++}
            else {symbols=false;value--}
        } 
  
    })
})



passwordBtn.addEventListener('click',()=>{
    let password=passwordGenerator()
    passwordValue.innerText=password;

})

const randomFuc={
    lowercase:[randomCharGenerator,[122,97]],
    uppercase:[randomCharGenerator,[90,65]],
    numbers:[randomCharGenerator,[57,48]],
    symbols:[randomCharGenerator,[47,33]]
}

function passwordGenerator(){
    let password=''
    // let ascii=[[122,97],[90,65],[57,48],[47,33]]
    // console.log(Math.floor(passwordLength.value/value))
    const typesArr=[{lowercase},{uppercase},{numbers},{symbols}]
                    .filter(item=>Object.values(item)[0])

    console.log(typesArr)
    // let i=1
    for(let i=0;i<passwordLength.value;i+=value){
        typesArr.forEach(type=>{
            const funcName=Object.keys(type)[0];
            const randomObj=randomFuc[funcName]
            
            const [max,min]=randomObj[1]
            console.log(max,min)
            password+=randomObj[0](max,min)
        })
    }
    

    return password;
}

function randomCharGenerator(max,min){
    return String.fromCharCode(Math.ceil(Math.random()*(max - min)+min))
}

passwordCopy.addEventListener('click',()=>{
    const password=passwordValue.innerText
    navigator.clipboard.writeText(password)
})
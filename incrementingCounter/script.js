const contents=document.querySelectorAll('.content')
let values=[6000,00,500];
const socialsValues=[12500,3000,5000]
const socialTags=['Facebook Fans','Instagram Followers','Twitter Followers']
window.addEventListener('load',()=>{
    contents.forEach((content,index)=>{
        const id= setInterval(() => {
            if(values[index]<=socialsValues[index]){
                content.innerText=`${values[index]} `
                values[index]+=25
                const para=document.createElement('p')
                para.innerText=socialTags[index]
                content.appendChild(para)
            }
            else{
                clearInterval(id)
                console.log(values)
            }

            // if(index<=1000){
            //     content.innerText=`${value++}followers`
            // }
        }, 1);
    })
})
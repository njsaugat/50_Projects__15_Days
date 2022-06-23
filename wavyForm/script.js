const fields=document.querySelectorAll('.field')
const labels=document.querySelectorAll('label')
const inputs=document.querySelectorAll('input')


// labels.forEach((field,index)=>{
//     inputs[index].addEventListener('click',()=>{
//         removeAllActive();
//         field.classList.add('active')
//     })
// })
// function removeAllActive(){
//     labels.forEach(label=>{
//         label.classList.remove('active')
//     })
// }

// A different way of doing it
//we are trying to bring different span and make each char move up to create animation 
labels.forEach(label=>{
    label.innerHTML=label.innerText
                    .split('')//make an array
                    .map((letter,index)=>{// map returns alot of span tag with each one having one char
                        return `<span
                                    style="transition-delay:${index*50}ms"
                                    >${letter}</span>`
                    })
                    .join('')//at last we dont want array but string; so joined
})
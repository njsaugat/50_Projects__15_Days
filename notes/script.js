const addNote=document.body.querySelector('.btn')
const container=document.body.querySelector('.container')
const notes=document.body.querySelector('.notes')
let noteCount=0;
let notesArr=[]
const notesLS=JSON.parse(localStorage.getItem('notesArr'))
console.log(notesLS)
if(notesLS){
    notesLS.forEach(note=>createStuff(note))
}


addNote.addEventListener('click',()=>{
    createStuff()

})


function createStuff(text=''){
    container.innerHTML+=elementCreator(text)

    if(noteCount>0){
        textAreaToDiv(noteCount-1)
    }
    // textAreaToDiv(noteCount)
    

    
    editNote()
    saveValues()
    deleteNote()
    noteCount++;
}


function textAreaToDiv(noteCount){
    const textareas=document.body.querySelectorAll('textarea')
    const textHold=document.createElement('div')
    const note=document.body.querySelectorAll('.note')

    textHold.classList.add('texthold','active')
    textHold.innerText=textareas[noteCount].value
    textareas[noteCount].classList.add('inactive')
     
    note[noteCount].appendChild(textHold)
    
}
function elementCreator(text=''){
    return `
    <div class="notes" >
    <div class="top">
    <i class="fa-solid fa-pen-to-square"></i>
      <i class="fa-solid fa-trash"></i>
    </div>
    <div class="note">
      <textarea name="" id="" cols="30" rows="10">${text?text:''}</textarea>
    </div>
  </div>
    `
}

function saveValues(){
    const textareas=document.body.querySelectorAll('textarea')
    textareas.forEach((textarea,index)=>{
        textarea.addEventListener('change',(e)=>{
            textarea.innerText=e.target.value//we are actually storing with this line
            notesArr[index]=textarea.value;

            // updateLS(textarea.value,index)
            updateLS()
        })
    })
    
}

saveValues()

function editNote(){
    const edits=document.body.querySelectorAll('.fa-pen-to-square')
    const textHolds=document.querySelectorAll('.texthold') 
    const textAreas=document.querySelectorAll('textarea') 
    const tops=document.body.querySelectorAll('.top ')

    edits.forEach((edit,index)=>{
        edit.addEventListener('click',()=>{
            textHolds[index].remove()
           textAreas[index].classList.remove('inactive')
           const done=document.createElement('button')
           done.classList.add('btn','done')
           done.innerHTML=`<i class="fa-solid fa-check"></i>`
           tops[index].appendChild(done)

           done.addEventListener('click',()=>{
                console.log(index)
                textAreaToDiv(index)
                done.remove()
           })

        })
    })
    
}


function deleteNote(){
    const tops=document.body.querySelectorAll('.top .fa-trash')
    const notes=document.body.querySelectorAll('.notes')
    
    tops.forEach((top,index)=>{
        top.addEventListener('click',()=>{
            notes[index].remove()
            console.log(index)
            notesArr.splice(index,1)
        
            updateLS()
        })
    })

   
}



function updateLS(){
    
    localStorage.setItem('notesArr',JSON.stringify(notesArr))

}
// localStorage.setItem('name',JSON.stringify(obj))
// JSON.parse(localStorage.getItem('name'))
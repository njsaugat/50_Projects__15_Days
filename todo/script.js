const bottom=document.body.querySelector('.bottom');
const input=document.body.querySelector('.bottom input')
const todos=[]


const actTodos=JSON.parse(localStorage.getItem('todos'))
if(actTodos){
    actTodos.forEach(todo=>{
        createTodo(todo)
    })
}


input.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        createTodo(e.target.value)
        e.target.value=''
    }
})

function createTodo(text){
    const todo=document.createElement('div')
    todo.classList.add('todo')
    todo.innerText=text;
    todos.push(todo.innerText)
    bottom.appendChild(todo)
    todoComplete(todo)
    localStorage.setItem('todos',JSON.stringify(todos))
}


function todoComplete(todo){
    todo.addEventListener('click',(e)=>{
        if(e.which ==1){
            todo.classList.toggle('strike')
        }
    })
    todo.addEventListener('contextmenu',(e)=>{
        e.preventDefault()
        todo.remove()
        updateLS(todo)
    })
}

function updateLS(todo){
    const val=todo.innerText
    const index=todos.indexOf(val)
    todos.splice(index,1)
    localStorage.setItem('todos',JSON.stringify(todos))
}
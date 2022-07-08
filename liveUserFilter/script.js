const container=document.body.querySelector('.container')
const filter=document.body.querySelector('.top input')
async function userData(){
    const data=await fetch('https://randomuser.me/api/?results=50', {
        Accept: 'application/json',
      }
)
    const {results}=await data.json()
    results.forEach((user)=>{
        container.innerHTML+=`
        <div class="users">
        <div class="left" style="background-image:url('${user.picture.large}')"></div>
        <div class="right">
        <span class="name">${user.name.first} ${user.name.last}</span>
        <span class="location">${user.location.country}</span>
        </div>
        </div>
        `
    })

} 
userData()


filter.addEventListener('input',(e)=>filerData(e.target.value))

function filerData(data){
    const users=document.body.querySelectorAll('.users')
    users.forEach(user=>{
        if(!user.childNodes[3].innerText.toLowerCase().includes(data.toLowerCase())){
            user.classList.add('hide')
        }else{
            user.classList.remove('hide')
        }
    })
}


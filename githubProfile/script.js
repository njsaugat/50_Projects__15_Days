const input=document.body.querySelector('.search input')
const profile=document.body.querySelector('.profile')
const image=document.body.querySelector('.image')
const name=document.body.querySelector('.name h2')
const bio=document.body.querySelector('.description')
const followers=document.body.querySelector('.followers span')
const following=document.body.querySelector('.following span')
const repos=document.body.querySelector('.repos span')

input.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        e.preventDefault()
        profile.classList.add('active')
        displayInfo(e.target.value)
    }
})

async function displayInfo(userId){
    const config={
        headers: {
          Accept: 'application/json',
        },
      } 
    const prof=await fetch(`https://api.github.com/users/${userId}`,config)
    const actualProfile=await prof.json();
    console.log(actualProfile.pinnedItems)
    image.style.backgroundImage=`url(${actualProfile.avatar_url})`
    name.innerText=actualProfile.name;
    bio.innerText=actualProfile.bio
    followers.innerText=actualProfile.followers;
    following.innerText=actualProfile.following;
    repos.innerText=actualProfile.public_repos;

}
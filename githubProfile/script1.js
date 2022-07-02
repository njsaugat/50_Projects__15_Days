const input=document.body.querySelector('.search input')
const profile=document.body.querySelector('.profile')
const image=document.body.querySelector('.image')
const right=document.body.querySelector('.right')
const left=document.body.querySelector('.left')
const name=document.body.querySelector('.name h2')
const bio=document.body.querySelector('.description')
const followers=document.body.querySelector('.followers span')
const following=document.body.querySelector('.following span')
const repos=document.body.querySelector('.repos span')

const link=document.body.querySelector('.link')
const APIURL='https://api.github.com/users/'

input.focus()
input.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        e.preventDefault()
        profile.classList.add('active')
        displayInfo(e.target.value)
        getRepos(e.target.value)
        e.target.value=''

    }
})


async function displayInfo(userName){
    try{
        const {data:actualProfile}= await axios(APIURL+userName)
        image.style.backgroundImage=`url(${actualProfile.avatar_url})`
        name.innerText=actualProfile.name;
        bio.innerText=actualProfile.bio
        followers.innerText=actualProfile.followers;
        following.innerText=actualProfile.following;
        repos.innerText=actualProfile.public_repos;
        link.href=actualProfile.html_url
    }
    catch(err){
        if(err.response.status== 404){
            location.reload()
            alert('No Profile With this Username')
        }
    }

}

async function getRepos(username){
    try{
        const {data}=await axios(APIURL+username+'/repos?sort=created')
        
        addReposToProfile(data)
    }
    catch(err){
        if(err.response.status== 404){
            location.reload()
            alert('Problem Fetching the repos')
        }
    }
}


function addReposToProfile(repos){
    const reposEl=document.body.querySelector('.pinned-repos')
    reposEl.innerHTML=''
    repos.slice(0,5).forEach(repo=>{
        const repoEl=document.createElement('a');
        repoEl.href=repo.html_url
        repoEl.target='_blank'
        repoEl.innerText=repo.name
        repoEl.classList.add('pinned-repo')
        reposEl.appendChild(repoEl)
    })
}
// function createErrorCard(msg){
//     // profile.classList.remove('active')
    
//     left.innerHTML=''
//     right.innerHTML=`<h1>${msg}</h1>`
// }


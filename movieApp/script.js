const container=document.body.querySelector('.container')
const MOVIE_URL=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4fa5f43351cf51f47e092aa8911cb098&page=1`

const IMG_PATH='https://image.tmdb.org/t/p/w1280'

const SEARCH_URL='https://api.themoviedb.org/3/search/movie?api_key=4fa5f43351cf51f47e092aa8911cb098&query="'

// const form=document.body.querySelector('.search ')
const input=document.body.querySelector('.search input')

input.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        // e.preventDefault()
    
        const searchTerm=input.value
    
        if(searchTerm && searchTerm!==''){
            const urlVal=SEARCH_URL+searchTerm
            console.log(urlVal)
            getMovie(SEARCH_URL+searchTerm)
    
            input.value=''
        }else{
            window.location.reload()
        }
    }
})

async function getMovie(url){
    console.log(url)
    const actMovie=await fetch(url,{
        Accept: 'application/json',
    })
    const {results}= await actMovie.json()

    createMovie(results)
    

}

getMovie(MOVIE_URL)


function createMovie(movies){
    container.innerHTML=''
    movies.forEach(movie=>{
        const color=getColor(movie.vote_average)
        console.log(color)
        container.innerHTML+=`
        <div class="movie">
            <div class="photo" style="background-image:url('${IMG_PATH+movie.backdrop_path}')"></div>
            <div class="content">
                <div class="name">${movie.original_title}</div>
                <div class="rating"  style="color:${color}">${movie.vote_average}</div>
                <div class="overview">${movie.overview}</div>
            </div>
        </div>
        `
    })
}

function getColor(vote){
    if(vote>=8){return 'greenyellow'}
    else if(vote>=6){return 'orange'}
    else{return 'red'}
}
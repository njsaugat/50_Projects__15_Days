const container=document.body.querySelector('.container')

async function getPokemons(){
    const data=await fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0', {
        Accept: 'application/json',
    })
    const {results}=await data.json()
    results.forEach(async(poke,index)=>{
        const pokemo=await fetch(poke.url,{Accept: 'application/json'})
        const pokemon=await pokemo.json()
        const color=getColors(pokemon.types[0].type.name)
        create(pokemon,color)

        
    })
    
}


getPokemons()

let index=1;
function create(pokemon,color){
    container.innerHTML+=`
        <div class="pokemon" style="background-color:${color}">
            <div class="photo"><img src="${pokemon.sprites.front_default}"></div>
            <span class="id">#${(index++).toString().padStart(3,'0')}</span>
            <div class="name">${pokemon.name}</div>
            <div class="type">Type:${pokemon.types[0].type.name}</div>
        </div>
            `
}
function getColors(type){
    let color='';
    if(type.toLowerCase()==='grass'){color='rgba(179, 239, 179, 0.707)';}
    else if(type.toLowerCase()==='fire'){color='rgba(252, 162, 162, 0.604)';}
    else if(type.toLowerCase()==='bug'){color='rgba(255, 210, 164, 0.856)';}
    else if(type.toLowerCase()==='water'){color='rgba(197, 240, 255, 0.76)';}
    else if(type.toLowerCase()==='poison'){color='rgba(93, 180, 175, 0.601)';}
    else if(type.toLowerCase()==='electric'){color='rgba(178, 136, 255, 0.753)';}
    else if(type.toLowerCase()==='ground'){color='rgba(131, 127, 100, 0.753)';}
    else{color='rgba(255, 255, 255, 0.467)';}
    return color;
    
    
}

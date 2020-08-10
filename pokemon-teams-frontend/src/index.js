const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", e => {


   
   
   
    
   
    function clickHandler(){
        document.addEventListener("click", e =>{
        if(e.target.innerText === "Add Pokemon"){
            // addPokemon(e.target)
            debugger

        }



       })
   }



   function addPokemon(buttonInfo){
       trainerID = buttonInfo.dataset.trainer.id
       
       
    //Await the event listener for the add pokemon @some trainer  ID on the button
    //conditional statement to check if the trainer has less than 6 pokemon if so, 
    //make a post call and add the pokemon to that trainer
    
    }

    function fetchTrainers(){
        fetch(TRAINERS_URL)
        .then(res => res.json())
        .then(trainers =>{
        trainers.forEach(trainer =>{
         
         renderTrainer(trainer)
         console.log(trainer)
       })
    })
    }  

    function renderTrainer(trainer){
        
        const mainTag = document.querySelector("body > main")
        const pokemonLi = document.createElement("li")
        
        mainTag.innerHTML += `
        <div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
        <button data-trainer-id="${trainer.id}">Add Pokemon</button>
        <ul>  
        </ul>
        </div>
        `
        trainer.pokemons.forEach(pokemon =>{
            pokemonLi.innerHTML += `
                            <li>${pokemon.nickname} ${pokemon.species}<button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>
                            `   
                            const trainerContainerUl = document.querySelector(`[data-id="${trainer.id}"]`)
                            trainerContainerUl.append(pokemonLi)            
        })
    } //RenderFunction
    

    

    fetchTrainers()
    clickHandler()
})//DOMContentLoaded
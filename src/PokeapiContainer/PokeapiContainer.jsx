import LoadingPokeapi from '../LoadinPokeapi/LoadingPokeapi'
import { useState } from 'react'
import './PokeapiContainer.css'
import NotFoundPokeapi from '../NotFoundPokeapi/NotFoundPokeapi'
import Pokemoncard from '../PokemonCard/Pokemoncard'

const PokeapiContainer = () => {
    const [pokemon, setPokemon] = useState(null)

    //Helps us with the submit form event
    function handleSubmit (event){
        const formData = new FormData(event.currentTarget)
        event.preventDefault()
        pokeAPI(formData.get('name').toLowerCase())
        event.target.reset()
    }

    // Makes a request to PokeApi and save the data in state
    function pokeAPI(pokemon_name){
        setPokemon(null)
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
        .then(response => response.json())
        .then(json => {
            let result = fillData(json)
            setPokemon(result)
        })
        .catch(()=> setPokemon(-1))
    }

    // Filters information we need
    function fillData(data){
        let ob = {
            id: data.id,
            name: data.name,
            ability_one: data.abilities[0].ability.name,
            ability_two: data.abilities[1].ability.name,
            move_one: data.moves[0].move.name,
            move_two: data.moves[1].move.name,
            move_tree: data.moves[2].move.name,
            experience: data.base_experience,
            height: data.height,
            weight: data.weight,
            img_one: data.sprites.front_default,
            img_two: data.sprites.back_default,
            img_tree: data.sprites.front_female,
        }
        return(ob)
    }

    return (
        <div>
            <h1 className="titles">Pokeapi</h1>
            <div className="imagePokeapi"/>

            <div className="boxPokeapi">
                <form onSubmit={handleSubmit} className='row '>
                    <div class="hstack gap-3">
                        <input name='name' className="form-control" type="text" placeholder="Type the name" aria-label="" required />
                        <button className='btn search-btn' type='submit'>search</button>
                    </div>
                </form>
                <div className="responseBox">
                    {!pokemon?
                        <LoadingPokeapi />
                    :
                        pokemon== -1?
                            <NotFoundPokeapi />
                        :
                            <Pokemoncard pokemon={pokemon}/>
                    }
                </div>
            </div>

        </div>
    )
}

export default PokeapiContainer

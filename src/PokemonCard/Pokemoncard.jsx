import { useEffect, useState } from 'react'
import './pokemonCard.css'
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'

const Pokemoncard = (pokemon) => {
    const [data, setData]= useState(null)
    
    function bgImage(url){
        if(!url){
            return {backgroundImage: `url(/src/assets/no-img.png)`}
        }else{
            return {backgroundImage: `url(${url})`}
        }
    }
    useEffect(()=>{
        setData(pokemon.pokemon)
    },[])
    return (
        <>
            {!data?
                <LoadingAnimation/>
            :
            <div className='pokemonCard'>
                <h2 className='pokemon-name'>{data.name}</h2>
                <div className="pokemonDataBox pokemonDataBox-one">
                    <div className="pokemon-img" style={bgImage(data.img_one)}></div>
                    <div className="pokemonData">
                        <p className='pokemon-info'><strong>ID:</strong> {data.id}</p>
                        <p className='pokemon-info'><strong>Base experience: </strong>{data.experience}</p>
                        <p className='pokemon-info'><strong>Ability 1:</strong> {data.ability_one}</p>
                    </div>
                </div>
                <div className="pokemonDataBox pokemonDataBox-two">
                    <div className="pokemon-img"style={bgImage(data.img_two)}></div>
                    <div className="pokemonData">
                    <p className='pokemon-info'><strong>Ability 2</strong> {data.ability_two}</p>
                        <p className='pokemon-info'><strong>Move 1: </strong>{data.move_one}</p>
                        <p className='pokemon-info'><strong>Move 2:</strong> {data.move_two}</p>
                    </div>
                </div>
                <div className="pokemonDataBox pokemonDataBox-one">
                    <div className="pokemon-img" style={bgImage(data.img_tree)}></div>
                    <div className="pokemonData">
                    <p className='pokemon-info'><strong>Move 3:</strong> {data.move_tree}</p>
                        <p className='pokemon-info'><strong>Height: </strong>{data.height}</p>
                        <p className='pokemon-info'><strong>weight:</strong> {data.weight}</p>
                    </div>
                </div>

            </div>
            }
        </>
        
    )
}

export default Pokemoncard

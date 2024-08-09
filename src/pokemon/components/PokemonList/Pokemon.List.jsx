import { useState } from "react"
import pokemonJSON from "../../data/pokemon.json"

import './PokemonList.css'
import PokemonItem from "../PokemonItem/PokemonItem"

function PokemonList() {
    const [filterPokemons, setFilterPokemons] = useState(pokemonJSON)
    const [pokemons] = useState(pokemonJSON)

    const handleSearch = (e) => {
        let search = pokemons.filter((item) => {
            return item.name.toLowerCase().includes(e.target.value.toLowerCase())
        })

        setFilterPokemons(search)
    }

    return (
        <>
            <input type="text" placeholder="cari pokemon" className="search" onChange={handleSearch}/>
            <div className="list-pokemon"> {filterPokemons.length == 0 ? <div>data tidak di temukan</div> : filterPokemons.map((item) => (
                    <PokemonItem key={item.id} pokemon={item}/>
                ))}
                
            </div>
        </>
    )
}



export default PokemonList;
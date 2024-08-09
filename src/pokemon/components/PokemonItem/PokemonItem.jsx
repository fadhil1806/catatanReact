import "./PokemonItem.css"

export default function PokemonItem({ pokemon }) {
    return (
        <>
            <p>{{pokemon}}</p>
            <div className="pokemon-card" style={{ backgroundColor: pokemon.color }}>
                <img src={pokemon.imageUrl} alt={pokemon.name} width={250}></img>
                <h1>{pokemon.name}</h1>
                <p className="description">{pokemon.description}</p>
            </div>
        </>
    )
}
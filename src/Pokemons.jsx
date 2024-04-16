export default function Pokemon({Pokedex}){


    return(
        <>
            <h1>Lista próbna</h1>
            <ul>
                {
                    Pokemon.map(item=><li key={pokemon.name}>{pokemon.sprites}, {pokemon.types}</li>)
                }
            </ul>
        </>
    )
}
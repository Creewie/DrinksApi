export default function Pokemon({poke}){

    const nazwaPokemona = poke ? poke.forms[0].name : "";
    const Pokemun = nazwaPokemona.charAt(0).toUpperCase() + nazwaPokemona.slice(1)

    return(
        <>
            <h1>Pokemon: {Pokemun}</h1>
        </>
    )
}
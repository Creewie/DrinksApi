export default function Zdjecia({poke}){

    const nazwaPokemona = poke ? poke.forms[0].name : "";
    const Pokemun = nazwaPokemona.charAt(0).toUpperCase() + nazwaPokemona.slice(1)

        return(
            <a href={`https://bulbapedia.bulbagarden.net/wiki/${Pokemun}_(Pok%C3%A9mon)`}><img src={poke?.sprites.front_default} alt="" height={150}/></a> 
        )
}
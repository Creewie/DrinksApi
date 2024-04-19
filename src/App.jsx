import { useEffect, useState } from 'react'
import './App.css'
import Pokemon from './Pokemons'

function App() {
  const [pokemon, setPokemon] = useState(null)

  var rndm = Math.floor(Math.random() * 1025 + 1);

  const Pokedex = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${rndm}`)
    .then(response =>{
      return response.json()
    })
    .then(data => {
      setPokemon(data)
    })
    .catch(err => console.log(err.message))
  }

  return (
    <>
      <button onClick={Pokedex}>Losuj Pokemona!</button>
      <Pokemon poke={pokemon}/>
    </>
  )
}

export default App

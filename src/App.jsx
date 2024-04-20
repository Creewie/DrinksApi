import { useEffect, useState } from 'react'
import './App.css'
import Pokemon from './Pokemons'
import Zdjecie from './Zdjecie'
import Audio from './Audio'

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
      console.log(data)
    })
    .catch(err => console.log(err.message))
  }

  return (
    <>
    <div id='guziczki'>
      <button onClick={Pokedex}>Losuj Pokemona!</button>
    </div>
      <Pokemon poke={pokemon} />
      <Zdjecie poke={pokemon}/>
      <Audio poke={pokemon}/>
    </>
  )
}

export default App

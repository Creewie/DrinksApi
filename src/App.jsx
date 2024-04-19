import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
      console.log(data.types[0].type.name)
    })
    .catch(err => console.log(err.message))
  }

  return (
    <>
      <h1>Pokedex</h1>
      <button onClick={Pokedex}>Pobierz dane</button>
      <Pokemon poke={pokemon}/>
    </>
  )
}

export default App

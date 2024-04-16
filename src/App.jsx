import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokemon from './Pokemons'

function App() {
  const [pokemon, setPokemon] = useState(null)

// api = `https://pokeapi.co/api/v2/pokemon/${numer}`
  const Pokedex = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/35")
    .then(response =>{
      //console.log(response)
      return response.json()
    })
    .then(data => {
      console.log(data)
      console.log(data.types[0].type.name)
      setPokemon(data)
      console.log(`pokemon ${pokemon}`)
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

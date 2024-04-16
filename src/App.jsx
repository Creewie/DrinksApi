import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokemon from './Pokemons'

function App() {
  const [movies, setMovies] = useState([])

  const pobierzDaneOFilmach = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response =>{
      console.log(response)
      return response.json()
    })
    .then(data => {
      console.log(data)
      setMovies(data.results)
    })
    .catch(err => console.log(err.message))
  }

  return (
    <>
      <h1>Pokedex</h1>
      <button onClick={Pokedex}>Pobierz dane</button>
      <Pokemon Pokedex={Pokedex}/>
    </>
  )
}

export default App

import React, {useState, useEffect} from 'react'
import CardPokemon from '../../CardPokemon/CardPokemon'
import Header from '../../Header/Header'
import {Div} from '../Home/styled'
import TextImage from './textPokédex.png'
import { Button } from '../Home/styled'
import { useNavigate } from 'react-router-dom'



function Home() {
  const [pokemons, setPokemons] = useState()

  const navigate = useNavigate()
  const Back = () => {
    navigate(-1)
  }
  
  const goToMyPoke = () => {
    navigate('/mypokedex')
  }
  
  return (
    <Div>
      <Header 
      button={
        <Button
        onClick={Back}
        >RETURN</Button>
      }
      image={TextImage}
      button2={
        <Button
        onClick={goToMyPoke}
        >MY POKEDEX</Button>
      }
      />
      <CardPokemon/>
    </Div>
  )
}

export default Home
import React from 'react'
import CardPokemon from '../../CardPokemon/CardPokemon'
import Header from '../../Header/Header'
import {Div} from '../Home/styled'
import TextImage from './textPokédex.png'
import { Button } from '../Home/styled'
import { useNavigate } from 'react-router-dom'
import useRequestData from '../../Hooks/Hooks'
import {BASE_URL} from '../../Hooks/base_url'


function Home() {
  const data = useRequestData(`${BASE_URL}pokemon/`)

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
      {data && data.results && data.results.map((pokemon) =>{
        return <CardPokemon key={pokemon.name} pokemon={pokemon}/>
      })}
      
    </Div>
  )
}

export default Home
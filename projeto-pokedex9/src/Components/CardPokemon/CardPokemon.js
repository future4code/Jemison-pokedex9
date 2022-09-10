import React from 'react'
import { CardContainer, PokeImage, TextContainer, NameText, Button } from './styled'

import useRequestData from '../Hooks/Hooks';
import { BASE_URL } from '../Hooks/base_url';

function CardPokemon({pokemon}) {
  
  const data = useRequestData(`${BASE_URL}pokemon/${pokemon.name}/`);
  
  data && console.log(data)


import { useNavigate } from 'react-router-dom'

function CardPokemon({pokemon, }) {
  const navigate = useNavigate()
  const goDetails = () => {
    navigate("/details" )
  }
 

  return (
    <CardContainer>
        <PokeImage
            alt={data.name}
            src={data && data.sprites.front_default}
        />
        <TextContainer>
            <NameText>{pokemon.name}</NameText>
        </TextContainer>
        <Button onClick={()=>{}}>adicionar</Button>
        <Button onClick={goDetails}>detalhes</Button>   

    </CardContainer>
  )
}

export default CardPokemon
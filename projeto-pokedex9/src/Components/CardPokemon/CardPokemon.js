import React from 'react'
import { CardContainer, PokeImage, TextContainer, NameText, Button } from './styled'
import { useNavigate } from 'react-router-dom'

function CardPokemon({pokemon, }) {
  const navigate = useNavigate()
  const goDetails = () => {
    navigate("/details" )
  }
 
  return (
    <CardContainer>
        <PokeImage
            img
            alt={pokemon.name}
            src={pokemon.front_default}
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
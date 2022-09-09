import React from 'react'
import { CardContainer, PokeImage, TextContainer, NameText, Button } from './styled'


function CardPokemon({pokemon, }) {
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
        <Button>adicionar</Button>
        <Button>detalhes</Button>   

    </CardContainer>
  )
}

export default CardPokemon
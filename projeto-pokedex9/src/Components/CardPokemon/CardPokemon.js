import React from 'react'
import { CardContainer, PokeImage, TextContainer, NameText } from './styled'
import IMGTESTE from './pokemon_PNG149.png'

function CardPokemon() {
  return (
    <CardContainer>
        <PokeImage
            alt='Nome pokemon'
            src={IMGTESTE}
        />
        <TextContainer>
            <NameText>Bulbassaro</NameText>
        </TextContainer>
    </CardContainer>
  )
}

export default CardPokemon
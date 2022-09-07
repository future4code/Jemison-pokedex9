import React from 'react'
import { Headers } from './StyledHeader'
import textPokédex from './textPokédex.png'

function Header() {
  return (
    <Headers>
      <img src={textPokédex} alt="Pokédex" />
    </Headers>
  )
}

export default Header
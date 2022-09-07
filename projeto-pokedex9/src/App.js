import React from 'react'
import Header from './Components/Header/Header'
import styled from 'styled-components'
import { GlobalStyle } from './GlobalStyled'
import IMG from '../src/Components/Pages/Home/Background.jpg'
import CardPokemon from './Components/CardPokemon/CardPokemon'

function App() {
  return (
    <Div>
      <GlobalStyle/>
      <Header/>
      <CardPokemon/>
      <CardPokemon/>
      <CardPokemon/>
    </Div>
  )
}

export default App


const Div = styled.div `

  display: flex;
  flex-wrap: wrap;
  background-image: url(${IMG});
  height: 100vh;
  
`
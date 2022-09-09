import React from 'react'
import {Div} from '../Home/styled'
import Header from '../../Header/Header'
import MyPoke from './MyPokedex.png'
import { Button } from './styled'
import { useNavigate } from 'react-router-dom'


function Pokedex() {

  const navigate = useNavigate()


  const goToHome = () => {
    navigate('/')
  }

  return (
    <Div>
        <Header 
        button={
          <Button
          onClick={goToHome}
          >HOME</Button>
        }
        image={MyPoke}
        />
    </Div>
  )
}

export default Pokedex
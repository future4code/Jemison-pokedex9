import React from 'react'
import {Div} from '../Home/styled'
import Header from '../../Header/Header'
import Details from './Details.png'
import { Button } from './styled'
import { useNavigate } from 'react-router-dom'

function DetalheDePokemon() {
  const navigate = useNavigate()


  const goToHome = () => {
    navigate('/')
  }


  return (
    <Div>
        <Header 
        image={Details}
        button={
            <Button
            onClick={goToHome}
            >HOME</Button>
        }
        />
    </Div>
  )
}

export default DetalheDePokemon
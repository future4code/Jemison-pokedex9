import React from 'react'
import {Div} from '../Home/styled'
import Header from '../../Header/Header'
import Details from './Details.png'
import { Button } from './styled'
import { useNavigate } from 'react-router-dom'
import { 
  ContainerDivs, 
  ContainerIMG, 
  ContainerStats, 
  ContainerTypesMoves, 
  FrontIMG, 
  BackIMG, 
  Types, 
  Moves, 
  Stats} from './styled'

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
        <ContainerDivs>
          <ContainerIMG>
            <FrontIMG>

            </FrontIMG>
            <BackIMG>

            </BackIMG>
          </ContainerIMG>
          <ContainerStats>
              <Stats>

              </Stats>
          </ContainerStats>
          <ContainerTypesMoves>
              <Types>

              </Types>
              <Moves>

              </Moves>
          </ContainerTypesMoves>


        </ContainerDivs>
    </Div>
  )
}

export default DetalheDePokemon
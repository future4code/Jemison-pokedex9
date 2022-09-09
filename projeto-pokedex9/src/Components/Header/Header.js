import React from 'react'
import { Headers, Center, Start, End } from './StyledHeader'



function Header(props) {
  return (
    <Headers>
      <Start>
        <div>{props.button}</div>
      </Start>
      <Center>
        <img src={props.image} />
      </Center> 
      <End>
        <div>{props.button2}</div>
      </End>
    </Headers>
  )
}

export default Header
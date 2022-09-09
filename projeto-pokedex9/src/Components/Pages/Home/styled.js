import styled from "styled-components";
import IMG from './Background.jpg'

export const Div = styled.div `
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  background-image: url(${IMG});
  position: relative;
  overflow: auto;
  height: 100vh;
  
`


export const Button = styled.button `
    font-family: 'Press Start 2P', cursive;
    background: rgba( 255, 255, 255, 0.0 );
    cursor: pointer;
    padding: 5px;
    width: 180px;
    margin-bottom: 5px;

    :hover {
        background: #ffcc03;
        border-color: #2083F8;
        color: #2083F8;
    }

`
import styled from "styled-components";

export const CardContainer = styled.div`
    width: 200px;
    height: 350px;
    display: flex;
    flex-flow: row wrap;
    margin: 100px 10px 0px;
    justify-content: space-around;
    background: rgba( 255, 255, 255, 0.0 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 12.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    :hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
    }
    
`

export const PokeImage = styled.img`
    width: 100%;
    height: 240px;
    
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding: 10px;
    width: 100%;

  
`

export const NameText = styled.h2`
    margin: 10px;
    font-family: 'Press Start 2P', cursive;
    font-size: 15px;
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
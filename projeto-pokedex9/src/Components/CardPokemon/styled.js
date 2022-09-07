import styled from "styled-components";

export const CardContainer = styled.div`
    width: 200px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba( 255, 255, 255, 0.0 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 12.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const PokeImage = styled.img`
    width: 100%;
    height: 250px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 10px;
    width: 100%;
  
`;

export const NameText = styled.h2`
    margin: 10px;
    font-family: 'Press Start 2P', cursive;
    font-size: 15px;
`;
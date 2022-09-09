import styled from "styled-components";

export const Headers = styled.header `
    display: flex;
    height: 8vh;
    width: 100%;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background: rgba( 255, 255, 255, 0.10 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 12.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );

`

export const Center = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 0 1 728px;
    min-width: 0px;

`
export const Start = styled.div `
    display: flex;
    flex-direction: row;
`

export const End = styled.div `
   align-items: center;
   justify-content: flex-end;
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

export const Button2 = styled.button `
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
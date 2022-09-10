import styled from "styled-components"

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

export const ContainerDivs = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
   
`

export const ContainerIMG = styled.div `
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const FrontIMG = styled.div `
    width: 350px;
    height: 350px;
    margin: 100px 0px 0px;
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

export const BackIMG = styled.div `

    width: 350px;
    height: 350px;
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

export const ContainerStats = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
export const Stats = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 800px;
    margin: 100px 10px 0px;
    background: rgba( 255, 255, 255, 0.0 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 12.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    :hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
    }
`

export const ContainerTypesMoves = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const Types = styled.div `
    width: 350px;
    height: 60px;
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

export const Moves = styled.div `
    width: 350px;
    height: 640px;
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


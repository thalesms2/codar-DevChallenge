import styled, { createGlobalStyle } from 'styled-components'

const red = "#D6000D";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    body {
        font-family: 'Roboto', sans-serif;
    }
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    @media(max-width: 800px) {
        justify-content: center;
        flex-direction: column;
    }
    @media(min-width: 800px) {
        flex-direction: row;
        justify-content: space-between; 
        min-height: 80px;
        padding: 0 2em;
    }
`

export const Title = styled.h1`
    color: ${red};
    span {
        color: black;
    }
`

export const Link = styled.a`
    margin-right: 4vw;
    font-family: 'Roboto', sans-serif;
`

export const Button = styled.button`
    background-color: ${red};
    color: #fff;
    border-radius: .5em;
    padding: .5em 3em;
`

export const About = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        max-width: 500px;
    }
`
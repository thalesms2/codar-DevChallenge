import styled from 'styled-components'

export const mainColor = "#D6000D"

export const Header = styled.section`
    display: flex;
    align-items: center;
    padding: 0 3em;
    min-height: 100px;
    h1 {
        color: ${mainColor};
        font-size: 3em;
        span {
            color: black;
        }
    }
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    a {
        color: black;
        font-size: 1.1em;
    }
    @media (min-width:800px) {
        justify-content: space-between;
        flex-direction: row;
        a {
            margin-right: 3vw;
        }
    }
    @media (max-width: 800px) {
        justify-content: center;
        flex-direction: column;
        Button {
            display: none;
        }
        a:nth-child(1), a:nth-child(2) {
            margin-right: 10vw;
        }
    }
`

export const Services = styled.section`
    display: flex;
    justify-content: space-around;
    img {
        max-width: 500px;
        max-height: 400px;
    }
    @media (min-width:800px) {
        padding: 0 20vw;
        margin: 10em 0;
    }
    @media(max-width: 800px) {
        flex-direction: column;
        margin: 4em 0;
        padding: 0 10vw;
    }
`

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    span:nth-child(1) {
        font-size: 1.2em;
        font-weight: bold;
    }
    span:nth-child(2) {
        color: ${mainColor};
        font-size: 3em;
        font-weight: 900;
    }
    Button {
        max-width: 250px;
    }
    @media (min-width:800px) {
        justify-content: center;
        span:nth-child(2) {
            margin-bottom: .8em;
        }
    }
    @media(max-width: 800px) {
        align-items: center;
        padding-top: 2em;
        span:nth-child(2) {
            margin-bottom: .5em;
        }
    }
`

export const ListDiv = styled.div`
    @media (min-width: 800px) {
        padding-top: 110px;
    }
    @media (max-width: 800px) {
        padding-top: 30px;
        order: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const List = styled.ul`
    list-style: none;
    li {
        line-height: 2.4em;
    }
    li:before {
        content: "\f00c";
        font-family: FontAwesome;
        display: inline;
        font-size: 1.2em;
        margin-right: 2em;
        padding: .2em;
        color: white;
        border-radius: 10em;
        background-color: ${mainColor};
    }
`

export const Contact = styled.section`
    display: flex;
    flex-direction: column;
    form {
        padding: .5em 0;
    }
    input {
        background-color: #BABABA;
        padding: 1em;
        border-radius: .5em;
    }
    @media (min-width: 800px) {
        margin-top: 60px;
        input {
            margin-right: .5em;
            min-width: 250px;
        }
    }
    @media (max-width: 800px) {
        margin-top: 30px;
        justify-content: center;
        input {
            margin-bottom: .5em;
        }
        form {
            display: flex;
            flex-direction: column;
        }
    }

`

export const Comments = styled.section`
    display: flex;
    @media (min-width: 800px) {
        justify-content: space-around;
        padding: 0 5em;
    }
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        padding: 0 1em;
    }
`

export const Card = styled.div`
    display: flex;
    border-radius: 1em;
    background-color: #BABABA;
    padding: 1em;
    width: 600px;
    margin: 1em;
    div:nth-child(1) {
        width: 80px;
        height: 80px;
        background-color: ${mainColor};
        border-radius: 25em;
    }
    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 1em;
    }
    span:nth-child(1) {
        max-width: 400px;
        font-size: 1.2em;
        margin-top: .2em;
    }
    span:nth-child(2) {
        font-size: 1.4em;
        font-weight: bold;
        margin-top: .3em;
    }
    span:nth-child(3) {
        font-weight: bold;
    }
`

export const Footer = styled.section`
    min-height: 300px;
    background-color: black;
    margin-top: 5em;
    color: white;
    display: flex;
    padding: 3em;
    div {
        display: flex;
        flex-direction: column;
        max-width: 200px;
        h2 {
            font-size: 3em;
            font-style: italic;
            margin-bottom: .5em;
        }
        h3 {
            font-size: 1.5em;
            margin-bottom: .5em;
            margin-top: .9em;
        }
        span {
            margin-bottom: 1em;
        }
        svg {
            fill: ${mainColor};
        }
    }
    @media (min-width: 800px) {
        flex-direction: row;
        justify-content: space-around;
    }
    @media (max-width: 800px) {
        flex-direction: column;
        div:nth-child(1) {
            align-self: center;
            align-items: center;
        }
    }

`

export const IconsDiv = styled.div`
    display: flex;
    flex-direction: row !important;
    justify-content: space-around;
`
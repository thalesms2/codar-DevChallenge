import styled from 'styled-components'

export const mainColor = "#D6000D"

export const Header = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
        margin-right: 3vw;
        font-size: 1.1em;
    }
`

export const Services = styled.section`
    display: flex;
    justify-content: space-around;
    img {
        max-width: 500px;
        max-height: 400px;
    }
    margin-bottom: 10em;
    padding: 0 20vw;
`

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    span:nth-child(1) {
        font-size: 1.2em;
        font-weight: bold;
    }
    span:nth-child(2) {
        color: ${mainColor};
        font-size: 3em;
        font-weight: 900;
        margin-bottom: .8em;
    }
    Button {
        max-width: 250px;
    }
`

export const ListDiv = styled.div`
    padding-top: 110px;
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
    margin-top: 60px;
    form {
        padding: .5em 0;
    }
    input {
        background-color: #BABABA;
        padding: 1em;
        border-radius: .5em;
        margin-right: .5em;
        min-width: 250px;
    }
`

export const Comments = styled.section`
    display: flex;
    justify-content: space-around;
    padding: 0 5em;
`

export const Card = styled.div`
    display: flex;

    background-color: #BABABA;
    padding: 1em;
    width: 600px;
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
    flex-direction: row;
    padding: 3em;
    justify-content: space-around;
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
`

export const IconsDiv = styled.div`
    display: flex;
    flex-direction: row !important;
    justify-content: space-around;
`
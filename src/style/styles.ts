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
        background-color: #cfcfcf;
        padding: 1em;
        border-radius: .5em;
        margin-right: .5em;
    }
`

export const Comments = styled.section`

`

export const Footer = styled.section`

`
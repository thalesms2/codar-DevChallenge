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
    justify-content: center;
    img {
        max-width: 500px;
    }
    margin-bottom: 10em;
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
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

`

export const Comments = styled.section`

`

export const Footer = styled.section`

`
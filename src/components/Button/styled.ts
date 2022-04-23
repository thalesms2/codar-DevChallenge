import styled from 'styled-components'
import { mainColor } from '../../style/styles'

import { ButtonProps } from '.'

export const ButtonComponent = styled.button<ButtonProps>`
    background-color: ${mainColor};
    color: white;
    padding: .5em 2.2em;
    border-radius: .5em;
    font-size: 1.2em;
`
import { ButtonComponent } from './styled'

export interface ButtonProps {
    text?: string;
}

function Button({ text }: ButtonProps) {
    return(
        <ButtonComponent>
            { text }
        </ButtonComponent>
    )
}

export default Button
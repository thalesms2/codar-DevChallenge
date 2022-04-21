import { Title, Link, HeaderWrapper, Button } from './styles'

const Header = () => {
    return (
        <HeaderWrapper>
            <Title>Codar<span>.</span></Title>
            <div>
                <Link>Início</Link>
                <Link>Serviços</Link>
                <Link>Contato</Link>
                <Button>Login</Button>
            </div>
        </HeaderWrapper>
    )
}

export default Header
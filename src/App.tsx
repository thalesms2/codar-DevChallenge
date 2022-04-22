import { GlobalStyles } from './style/globalstyles'
import { Header, Services, List, Contact, Comments, Footer } from './style/styles'
import Button from './components/Button/index'

import coding from './assets/coding_.png'
import videoCall from './assets/video_call.png'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Codar<span>.</span></h1>
        <div>
          <a href="#">Inicio</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
          <Button text="Login"/>
        </div>
      </Header>

      <Services id="services">
        <img src={videoCall} alt="video call" />
        <div>
          <p>
            Alavanque seu negócio com um
            Website incrível
          </p>
          <Button text="Solicitar orçamento"/>
        </div>
      </Services>

      <Services id="services">
        <div>
          <List>
            <li>Domínio personalizado</li>
            <li>Hospedagem</li>
            <li>Site responsivo</li>
            <li>Redes sociais</li>
            <li>Chat online</li>
            <li>Blog integrado</li>
          </List>
        </div>
        <img src={coding} alt="coding" />
      </Services>

      <Contact>
        <h2>Nossa equipe está à disposição!</h2>
        <form>
          <input type="text" />
          <Button text="Ligamos para você"/>
        </form>
      </Contact>

      <Comments>
        <div>
          <div></div>
          <p>
            Já tive experiência com outras 4 empresas da área e a Codar é sem sombra de dúvidas superior em todos os aspectos.
          </p>
          <span>Pedro Ferreira</span>
          <span>Construtora Minari</span>
        </div>
        <div>
          <div></div>
          <p>
            Processos bem simples e criação de um site exatamente como a minha escola queria!
          </p>
          <span>Maria Rita</span>
          <span>Escola Criança Feliz</span>
        </div>
      </Comments>

      <Footer>
        <div>
          <h2>Codar.</h2>
          <p>Criamos websites incríveis</p>
        </div>
        <div>
          <h3>Sobre</h3>
          <p>Amamos criar soluções e entregar sites incríveis</p>
        </div>
        <div>
          <h3>Contato</h3>
          <p>
            123 Av. Manjar - Nárnia
            +55 96 2321-3131
            contato@codar.com
          </p>
        </div>
        <div>
          <h3>Redes sociais</h3>
          <div>
            {/* icones facebook insta e twitter*/}
          </div>
        </div>
      </Footer>
    </>
  )
}

export default App

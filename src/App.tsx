import { GlobalStyles } from './style/globalstyles'
import { Header, Services, List, Contact, Comments, Footer, TextDiv, ListDiv, IconsDiv, Card } from './style/styles'
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
        <TextDiv>
          <span>
            Alavanque seu negócio com um
          </span>
          <span>
            Website incrível
          </span>
          <Button text="Solicitar orçamento"/>
        </TextDiv>
      </Services>

      <Services id="services">
        <ListDiv>
          <List>
            <li>Domínio personalizado</li>
            <li>Hospedagem</li>
            <li>Site responsivo</li>
            <li>Redes sociais</li>
            <li>Chat online</li>
            <li>Blog integrado</li>
          </List>
          <Contact>
            <h2>Nossa equipe está à disposição!</h2>
            <form>
              <input type="text" placeholder='Celular'/>
              <Button text="Ligamos para você"/>
            </form>
          </Contact>
        </ListDiv>
        <img src={coding} alt="coding" />
      </Services>


      <Comments>
        <Card>
          <div></div>
          <div>
            <span>
              Já tive experiência com outras 4 empresas da área e a Codar é sem sombra de dúvidas superior em todos os aspectos.
            </span>
            <span>Pedro Ferreira</span>
            <span>Construtora Minari</span>
          </div>
        </Card>
        <Card>
          <div></div>
          <div>
            <span>
              Processos bem simples e criação de um site exatamente como a minha escola queria!
            </span>
            <span>Maria Rita</span>
            <span>Escola Criança Feliz</span>
          </div>
        </Card>
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
          <span>
            123 Av. Manjar - Nárnia
          </span>
          <span>
            +55 96 2321-3131
          </span>
          <span>
            contato@codar.com
          </span>
        </div>
        <div>
          <h3>Redes sociais</h3>
          <IconsDiv>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="30" height="30"
              viewBox="0 0 30 30">    
              <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="30" height="30"
              viewBox="0 0 24 24">    
              <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="30" height="30"
              viewBox="0 0 24 24">    
              <path d="M21,3H3v18h18V3z M17.05,9.514c0,0.086,0,0.171,0,0.343c0,3.257-2.486,7.029-7.029,7.029c-1.371,0-2.657-0.429-3.771-1.114 c0.171,0,0.429,0,0.6,0c1.114,0,2.229-0.429,3.086-1.029c-1.114,0-1.971-0.771-2.314-1.714c0.171,0,0.343,0.086,0.429,0.086 c0.257,0,0.429,0,0.686-0.086c-1.114-0.257-1.971-1.2-1.971-2.4c0.343,0.171,0.686,0.257,1.114,0.343 c-0.686-0.6-1.114-1.286-1.114-2.143c0-0.429,0.086-0.857,0.343-1.2c1.2,1.457,3,2.486,5.057,2.571c0-0.171-0.086-0.343-0.086-0.6 c0-1.371,1.114-2.486,2.486-2.486c0.686,0,1.371,0.257,1.8,0.771c0.6-0.086,1.114-0.343,1.543-0.6 c-0.171,0.6-0.6,1.029-1.114,1.371c0.514-0.086,0.943-0.171,1.457-0.429C17.907,8.743,17.479,9.171,17.05,9.514z"></path>
            </svg>
          </IconsDiv>
        </div>
      </Footer>
      <a href="https://icons8.com.br/"></a>
    </>
  )
}

export default App

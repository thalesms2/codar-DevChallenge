import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import { GlobalStyle } from "./components/styles"

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App

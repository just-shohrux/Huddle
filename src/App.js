import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import Container from './components/styles/Container.styled'
import GlobalStyle from './components/styles/Global.styled'
import content from './content'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Fragment>
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </Fragment>
    </ThemeProvider>
  )
}

export default App

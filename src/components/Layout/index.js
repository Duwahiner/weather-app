import Head from 'next/head'
import { Container } from './styles'

const Header = ({ children }) => {
  return (
    <Container
      width={1}
      justifyContent='center'
      flex='auto'
    >
      <Head>
        <title> Inicio | app </title>
      </Head>
      {children}
    </Container>
  )
}

export default Header

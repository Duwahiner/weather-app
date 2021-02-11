import Link from 'next/link'
import Head from 'next/head'
import { Flex, Box } from 'rebass'
import { useTheme } from '@emotion/react'
import { ButtonPage, NotFound, Title } from './styles'

const NotFound404 = (props) => {
  const theme = useTheme()
  return (
    <Flex
      width={1}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height={theme.viewport.height}
      bg='background404'
    >
      <Head> <title> Error 404 </title> </Head>
      <Box> <Title> Error, esta página no existe </Title> </Box>
      <Box mt={[3]}> <NotFound> 404 </NotFound> </Box>
      <Box mt={[3]}>
        <Link href='/'>
          <ButtonPage> Ir a la página principal → </ButtonPage>
        </Link>
      </Box>
    </Flex>
  )
}

export default NotFound404

import { Box } from 'rebass'
import { ContainerHeader, Image } from './styles'

const Layout = (props) => {
  return (
    <ContainerHeader
      width={1}
      height='60px'
      px={5}
      mt={3}
      flex='none'
      justifyContent={['center', 'flex-end']}
      sx={{
        boxSizing: 'border-box'
      }}
    >
      <Box width='auto' height='60px'>
        <Image src='/image/logo-1.png' />
      </Box>
    </ContainerHeader>
  )
}

export default Layout

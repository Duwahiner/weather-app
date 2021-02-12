import { Flex } from 'rebass'
import RenderView from '../RenderView'
import { Container, Wrapper } from './styles'

const Section = (props) => {
  return (
    <Flex
      width={1}
      pb={4}
      justifyContent='center'
    >
      <Container width={1} px={['10px', '30px']} justifyContent='center'>
        <Wrapper width={1} justifyContent='center' mt='20px'>
          <RenderView />,
        </Wrapper>
      </Container>
    </Flex>
  )
}

export default Section

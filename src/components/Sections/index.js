import { Box, Flex } from 'rebass'
import RenderView from '../RenderView'
import { Container, Wrapper } from './styles'

const Section = (props) => {
  return (
    <Flex
      width={1}
      bg='reds'
      pb={4}
      justifyContent='center'
    >
      <Container width={1} px='220px'>
        <Wrapper width={1}>
          <RenderView />
        </Wrapper>
      </Container>
    </Flex>
  )
}

export default Section

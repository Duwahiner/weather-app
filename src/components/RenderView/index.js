import { Box, Flex } from 'rebass'
import DetailState from '../DetailState'
import ViewTopCity from '../ViewTopCity'
import { Container } from './styles'

const RenderView = (props) => {
  return (
    <Container width={1} flexDirection='column'>
      <Flex width={1} flex='none'>
        <ViewTopCity />
      </Flex>
      <Flex width={1} bg='' flex='auto'>
        <DetailState />
      </Flex>
    </Container>
  )
}

export default RenderView

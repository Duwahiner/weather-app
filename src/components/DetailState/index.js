import { Flex } from 'rebass'
import { Container } from './styles'
import ContentViewDays from '../ContentViewDays'
import ContentViewVisit from '../ContentViewVisit'
import ContentViewTop from '../ContentViewTop'
import ContentViewWeather from '../ContentViewWeather'

const DetailState = (props) => {
  return (
    <Container width={1} px='40px' mb={2}>
      <Flex width={1} bg='' mr='40px'>
        <Flex width={1 / 4.5} mr='20px'>
          <ContentViewDays />
        </Flex>
        <Flex width={1 / 4.3} mr='20px'>
          <ContentViewVisit />
        </Flex>
        <Flex width={1 / 5} mr='20px'>
          <ContentViewTop />
        </Flex>
        <Flex flex='auto'>
          <ContentViewWeather />
        </Flex>
      </Flex>
    </Container>
  )
}

export default DetailState

import { Flex } from 'rebass'
import { Container } from './styles'
import ContentViewDays from '../ContentViewDays'
import ContentViewVisit from '../ContentViewVisit'
import ContentViewTop from '../ContentViewTop'
import ContentViewWeather from '../ContentViewWeather'

const DetailState = (props) => {
  return (
    <Container width={1} px={['10px', '40px']} mb={[3, 2]}>
      <Flex
        width={1} bg='' mr={['0px', '0px', '40px']}
        flexDirection={['column', 'column', 'row']}
      >
        <Flex width={[1, 1 / 2, 1 / 4.5]} mr={['0px', 'auto', '20px']} ml='auto'>
          <ContentViewDays />
        </Flex>
        <Flex width={[1, 1 / 2, 1 / 4.3]} mr={['0px', 'auto', '20px']} ml='auto'>
          <ContentViewVisit />
        </Flex>
        <Flex width={[1, 1 / 2, 1 / 5]} mr={['0px', 'auto', '20px']} ml='auto'>
          <ContentViewTop />
        </Flex>
        <Flex justifyContent='center' flex={['auto']} mr={['0px', '20px']}>
          <ContentViewWeather />
        </Flex>
      </Flex>
    </Container>
  )
}

export default DetailState

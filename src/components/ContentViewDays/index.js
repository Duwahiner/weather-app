import { useTheme } from '@emotion/react'
import { Box, Flex } from 'rebass'
import ItemsDays from '../ItemsDays'
import { Container, Text } from './styles'

const ContentViewDays = (props) => {
  const theme = useTheme()

  return (
    <Container
      minWidth='232px'
      maxWidth={['auto', '480px', '100%']}
      width={1} px={2}
      mb={[5, 5, 2]}
      flexDirection='column'
    >
      <Flex width={1} justifyContent='center' mb={[3, 4, 4]}>
        <Box mr={1}>
          <Text
            fontFamily='RobotoBold'
            fontSize='23px'
            color={theme.colors.colorText}
          >
            3 Days
          </Text>
        </Box>
        <Box>
          <Text
            fontFamily='RobotoRegular'
            fontSize='23px'
            color={theme.colors.colorText}
          >
            Farecast
          </Text>
        </Box>
      </Flex>

      <ItemsDays
        title='Friday'
        subTitle='Rain'
        degrees='32° / 23°'
        urlSvg='svg/s-1.svg'
      />
      <ItemsDays
        title='Saturday'
        subTitle='Clear'
        degrees='32° / 23°'
        urlSvg='svg/s-4.svg'
      />
      <ItemsDays
        title='Sunnday'
        subTitle='Cloudy'
        degrees='32° / 23°'
        urlSvg='svg/s-2.svg'
      />
    </Container>
  )
}

export default ContentViewDays

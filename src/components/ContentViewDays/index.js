import { useTheme } from '@emotion/react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { Box, Flex } from 'rebass'
import { getIcon } from '../../config'
import ItemsDays from '../ItemsDays'
import { Container, Text } from './styles'

const ContentViewDays = (props) => {
  const theme = useTheme()
  const { forecast } = useSelector(state => state.data)
  const day1 = moment(forecast?.day1.dt_txt).format('LLLL').split(',')[0]
  const day2 = moment(forecast?.day2.dt_txt).format('LLLL').split(',')[0]
  const day3 = moment(forecast?.day3.dt_txt).format('LLLL').split(',')[0]

  const degrees1 =
  forecast
    ? `${forecast?.day1.main.temp_max.toString().slice(0, 2)}° /
      ${forecast?.day1.main.temp_min.toString().slice(0, 2)}°'
      `
    : ''

  const degrees2 =
  forecast
    ? `${forecast?.day2.main.temp_max.toString().slice(0, 2)}° /
      ${forecast?.day2.main.temp_min.toString().slice(0, 2)}°
      `
    : ''

  const degrees3 =
  forecast
    ? `${forecast?.day3.main.temp_max.toString().slice(0, 2)}° /
      ${forecast?.day3.main.temp_min.toString().slice(0, 2)}°
      `
    : ''

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
        title={day1}
        subTitle={forecast?.day1.weather[0].main}
        urlSvg={getIcon(forecast?.day1.weather[0].main) || ''}
        degrees={degrees1}
      />
      <ItemsDays
        title={day2}
        subTitle={forecast?.day2.weather[0].main}
        urlSvg={getIcon(forecast?.day2.weather[0].main) || ''}
        degrees={degrees2}
      />
      <ItemsDays
        title={day3}
        subTitle={forecast?.day3.weather[0].main}
        urlSvg={getIcon(forecast?.day3.weather[0].main) || ''}
        degrees={degrees3}
      />
    </Container>
  )
}

export default ContentViewDays

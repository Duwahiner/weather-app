import { useSelector } from 'react-redux'
import { getIcon } from '../../config'
import ItemsWeather from '../ItemsWeather'
import ItemsWeatherAdd from '../ItemsWeatherAdd'
import { Container } from './styles'

const ContentViewWeather = (props) => {
  const { parisFrance, liyoFrance } = useSelector(state => state.data)

  return (
    <Container
      minWidth='260px'
      maxWidth={['auto', '480px', '100%']}
      width={1} px={2}
      flexDirection='column'
      mt={['0px', '0px', '-110px']}
    >
      <ItemsWeather
        degreeNumber={
          liyoFrance ? liyoFrance?.main.temp_max.toString().slice(0, 2) : ''
        }
        degree='°C'
        name='Lyon'
        subName='Francia'
        urlSvg={getIcon(liyoFrance?.weather[0].main) || ''}
        textItem1={'Humidicity ' + liyoFrance?.main.humidity + '%'}
        textItem2='Northwest'
        textItem3={liyoFrance?.wind.speed + 'mk/h'}
      />

      <ItemsWeather
        degreeNumber={
          parisFrance ? parisFrance?.main.temp_max.toString().slice(0, 2) : ''
        }
        degree='°C'
        name='Paris'
        subName='Francia'
        urlSvg={getIcon(parisFrance?.weather[0].main) || ''}
        textItem1={'Humidicity ' + parisFrance?.main.humidity + '%'}
        textItem2='Northwest'
        textItem3={parisFrance?.wind.speed + 'mk/h'}
      />

      <ItemsWeatherAdd />
    </Container>
  )
}

export default ContentViewWeather

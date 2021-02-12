import ItemsWeather from '../ItemsWeather'
import ItemsWeatherAdd from '../ItemsWeatherAdd'
import { Container } from './styles'

const ContentViewWeather = (props) => {
  return (
    <Container
      minWidth='260px'
      maxWidth={['auto', '480px', '100%']}
      width={1} px={2}
      flexDirection='column'
      mt={['0px', '0px', '-110px']}
    >
      <ItemsWeather
        degreeNumber='29'
        degree='°C'
        name='Liyon'
        subName='Francia'
        urlSvg='svg/s-3.svg'
        textItem1='Humidicity 60%'
        textItem2='Northwest'
        textItem3='8.3mk/h'
      />

      <ItemsWeather
        degreeNumber='12'
        degree='°C'
        name='Paris'
        subName='Francia'
        urlSvg='svg/s-6.svg'
        textItem1='Humidicity 60%'
        textItem2='Northwest'
        textItem3='8.3mk/h'
      />

      <ItemsWeatherAdd />
    </Container>
  )
}

export default ContentViewWeather

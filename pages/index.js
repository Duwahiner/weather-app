import PageHome from '../src/components/PageHome'
import { Flex } from 'rebass'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actions } from '../src/actions'
import { getWeatherCity, getWeatherForecast } from '../src/api'

const Home = (props) => {
  const dispatch = useDispatch()

  const getData = async () => {
    const parisFrance = await getWeatherCity('paris')
    const liyoFrance = await getWeatherCity('lyon')
    const bogotaColombia = await getWeatherCity('bogota')
    const bogotaForecast = await getWeatherForecast('bogota') || []
    const forecast = []
    const ignore = []

    if ((Array.isArray(bogotaForecast.list))) {
      bogotaForecast.list.forEach((item) => {
        const year = item.dt_txt.slice(0, 10)
        const hour = item.dt_txt.slice(10, item.dt_txt.length)
        const result = ignore.find((elem) => elem === year)
        if (result) return item
        else {
          forecast.push(year + hour)
          return ignore.push(year)
        }
      })
    }

    const day1 = bogotaForecast.list.find((ele) => ele.dt_txt === forecast[0])
    const day2 = bogotaForecast.list.find((ele) => ele.dt_txt === forecast[1])
    const day3 = bogotaForecast.list.find((ele) => ele.dt_txt === forecast[2])
    dispatch(actions.getInitAppWeather({
      parisFrance,
      liyoFrance,
      bogotaColombia,
      forecast: {
        day1,
        day2,
        day3
      }
    }))
  }

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <Flex width={1}>
      <PageHome />
    </Flex>
  )
}

export default Home

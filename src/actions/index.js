import { consts } from '../const'

const getInitAppWeather = (data) => {
  return {
    type: consts.GET_INIT_APP_WEATHER,
    payload: data
  }
}

export const actions = {
  getInitAppWeather
}

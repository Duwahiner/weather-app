import { consts } from '../const'

const getInitAppWeather = (movies) => {
  return {
    type: consts.GET_INIT_APP_WEATHER,
    payload: movies
  }
}

export const actions = {
  getInitAppWeather,
}

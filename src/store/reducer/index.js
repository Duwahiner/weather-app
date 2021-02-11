import { consts } from '../../const'

const initialState = {
  data: {},
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case consts.GET_INIT_APP_WEATHER:
      return {
        ...state,
        data: payload
      }
      
    default:
      return state
  }
}

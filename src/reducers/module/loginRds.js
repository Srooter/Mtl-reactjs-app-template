import { GO_LOGIN } from '../../actions'
import Cookies from 'js-cookie'

let user = Cookies.get('user')
const initialState = user ? user : {}

export const loginRds = (state = initialState, action) => {
  switch (action.type) {
    case GO_LOGIN:
      return { ...state, ...action.param }
    default:
      return { ...state, ...action.param }
  }
}

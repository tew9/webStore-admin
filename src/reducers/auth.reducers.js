import { authConstants } from "../actions/constants"

const initialState = {
  token: null,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    picture: ''
  },
  authenticated: false,
  authenticating: false,
  error: ''
}

export default (state = initialState, action) => {
  switch(action.type){
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true
      }
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticated: true,
      }
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        authenticating: true,
      }
      break;
    case authConstants.ALREADY_LOGGEDIN:
      state = {
        authenticated: action.payload.authenticated,
        token: action.payload.token
      }
  }
  return state;

}
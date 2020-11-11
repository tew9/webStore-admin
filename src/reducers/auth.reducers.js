import { authConstants } from "../actions/constants"

const initialState = {
  token: null,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    picture: '',
    role: ''
  },
  authenticated: false,
  authenticating: false,
  error: ''
}

export const authReducer = (state = initialState, action)=>{
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
        authenticating: false
      }
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        authenticating: false,
      }
      break;
    case authConstants.ALREADY_LOGGEDIN:
      state = {
        authenticated: action.payload.authenticated,
        token: action.payload.token
      }
      break;
    case authConstants.LOGOUT_REQUEST:
      state ={
        ...state,
        authenticating: true,
      }
      break
    case authConstants.LOGOUT_SUCCESS:
    state ={
      ...initialState
    }
    break
    case authConstants.LOGOUT_FAILURE:
    state ={
      ...state,
      authenticating: false,
      error: action.payload.error
    }
    break
    default: 
      return state
  }
  return state
}
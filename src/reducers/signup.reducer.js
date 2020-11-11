import { signupConstants } from "../actions/constants";

const initState = {
  message: '',
  isRegistered: false,
  registering: false,
  error: ''
}

export const signupReducer =  (state=initState, action) => {
  switch(action.type){
    case signupConstants.SIGNUP_REQUEST:
      state = {
        ...state,
        registering: true
      }
      break;
    case signupConstants.SIGNUP_SUCCESS:
      state ={
        message: action.payload.message,
        isRegistered: true,
        registering: false
      }
      break;
    case signupConstants.SIGNUP_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        isRegistered: false,
      }
      break;
    default:
      return state;
  }
  return state;
}
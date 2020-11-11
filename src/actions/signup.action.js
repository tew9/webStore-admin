import { signupConstants } from "./constants";
import axios from '../utilities/axios';

export const signup = (user) => {
  
  return async (dispatch) => {
    
    dispatch({type: signupConstants.SIGNUP_REQUEST})
    try{
      const res = await axios.post('/signup', {
        ...user
      });

      if(res.status === 201){
        const {message} = res.data;
        dispatch({
          type: signupConstants.SIGNUP_SUCCESS,
          payload: {message}
        })
      }
      else {
        if(res.status === 409){
          dispatch({
            type: signupConstants.SIGNUP_FAILURE,
            payload: {
              error:res.data.error,
              isRegistered: false,
            }
          })
        }
      }
    }
    catch(error){
      dispatch({
        type: signupConstants.SIGNUP_FAILURE,
        payload: {
          error: "Registration failed: "+ error,
        }
      })
    }
  }
}

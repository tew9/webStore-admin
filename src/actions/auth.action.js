import { authConstants } from "./constants";
import axios from '../utilities/axios';

export const login = (user) => {
  return async (dispatch) => {
    dispatch({type: authConstants.LOGIN_REQUEST})
    const res = await axios.post('/signin', {
      email: user.email,
      password: user.password
    });
    
    if(res.status === 200){
      console.log(res.data)
      const {token, user} = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          user,
          token
        }
      })
    }
    else{
      console.log(res)
      if(res.status === 400){
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: {
            error: res.data.error
          }
        })
      }
    }
  }
}

export const isUserLoggedIn = () => {
  return async dispatch => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if(token){
      dispatch({
        type: authConstants.ALREADY_LOGGEDIN,
        payload: {authenticated: true,
        token: token,
        user: user} 
      })
    }else{
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload:{error: "User needs to login"} 
      })
    }
  }
}
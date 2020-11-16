import { authConstants } from "./constants";
import axios from '../utilities/axios';

export const login = (user) => {
  return async (dispatch) => {
    dispatch({type: authConstants.LOGIN_REQUEST})
    try{
      const res = await axios.post('/signin', {
        email: user.email,
        password: user.password
      });
      
      if(res.status === 200){
        const {token, user} = res.data;
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('user', JSON.stringify(user));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            user,
            token
          }
        })
      }
    }
    catch{
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          error: "Username or password is incorrect, please try again"
        }
      })
    }
  }
}

export const isUserLoggedIn = () => {
  return async dispatch => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if(token !== null){
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token, user
        }
      })
    }else{
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload:{error: "User needs to login"} 
      })
    }
  }
}

export const signout = () => {
  return async dispatch => {
    dispatch({type: authConstants.LOGOUT_REQUEST})
    const res = await axios.post('/signout')
    if(res){
      window.localStorage.clear();
      dispatch({type: authConstants.LOGOUT_SUCCESS})
    }else{
      dispatch({type: authConstants.LOGOUT_FAILURE,
      payload: {error: "something went wrong while loging out!!!"}})
    }
   
  }
}



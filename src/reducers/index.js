import { combineReducers } from "redux"
import { authReducer } from "./auth.reducers"
import { signupReducer }  from './signup.reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer
});

export default rootReducer;
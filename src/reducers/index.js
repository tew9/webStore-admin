import { combineReducers } from "redux"
import { authReducer } from "./auth.reducers"
import { signupReducer }  from './signup.reducer'
import { productReducer } from './product.reducers'
import { orderReducer } from './order.reducers'
import { categoryReducer } from './category.reducers'

const rootReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer,
  product: productReducer,
  category: categoryReducer,
  order: orderReducer
});

export default rootReducer;
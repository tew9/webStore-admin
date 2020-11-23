import { productConstants } from '../actions/constants';
import Products from '../containers/Products/products';

const initState = {
  error: '',
  loading: false,
  productList: ''
}

const buildNewProduct = (_Id, products, newProduct) => {
  let newProducts = [];
  // console.log(products, newProduct)
  for(let prod of products){
    newProducts.push({...prod, ...newProduct})
  }
  return newProducts;
}

export const productReducer =  (state=initState, action) => {
  switch(action.type){
    case productConstants.GET_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;
    case productConstants.GET_PRODUCT_SUCCESS:
      state ={
        ...state,
        productList: action.payload.productList,
        loading: false,
      }
      break;
    case productConstants.GET_PRODUCT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      }
      break;
    
    case productConstants.ADD_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;

    case productConstants.ADD_PRODUCT_SUCCESS:
      const newProduct = action.payload.productList;
      const updatedProduct =  buildNewProduct(newProduct._id, state.productList, newProduct);
      console.log("updated product",updatedProduct)
      state = {
        ...state,
        productList: updatedProduct,
        loading: false,
      }
      break;

    case productConstants.ADD_PRODUCT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      }
      break;
      
    default:
      return state;
  }
  return state;
}
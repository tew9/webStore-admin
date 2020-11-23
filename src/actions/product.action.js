import { productConstants } from './constants';
import axios from '../utilities/axios';

export const getAllProducts = () =>  {
  return async dispatch => {
    dispatch({type: productConstants.GET_PRODUCT_REQUEST});
    const res = await axios.get('/products/get');
    const { productList } = res.data;
    if(res.status === 200){
      dispatch({
        type: productConstants.GET_PRODUCT_SUCCESS,
        payload: {
          productList
        }
      })
    }
    else
    {
      dispatch({
        type: productConstants.GET_PRODUCT_FAILURE,
        payload: {
          error: "Error from the backend: "+res.data.error
        }
      })
    }
  }
}

export const addProducts = (form) =>  {
  return async dispatch => {
    dispatch({type: productConstants.ADD_PRODUCT_REQUEST});
    const res = await axios.post('/products/create', form);
    if(res.status === 201){
      dispatch({
        type: productConstants.ADD_PRODUCT_SUCCESS,
        payload: {productList: res.data.product}
      })
    }
    else{
      dispatch({
        type: productConstants.ADD_PRODUCTS_FAILURE,
        payload: { error: res.data.error}
      })
    }
  }
}
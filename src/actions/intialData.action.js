import { dataConstants, productConstants, categoryConstants } from "./constants";
import axios from '../utilities/axios';

/**
* @author
* @function initialData
**/

export const getInitialData = () => {
  return async dispatch => {
    dispatch({type: dataConstants.GET_DATA_REQUEST})
    const res = await axios.post("/initialData")
    console.log(res.categoryList)
    const { categoryList, productList } = res.data;
    if(res.status === 200){
      dispatch({
        type: categoryConstants.CATEGORY_SUCCESS,
        payload: { categoryList}
      })
      dispatch({
        type: productConstants.GET_PRODUCT_SUCCESS,
        payload: { productList}
      })
    }
    else{
      dispatch({
        type: productConstants.GET_PRODUCT_FAILURE,
        payload: { error: res.data.error}
      })
    }
  }
 }
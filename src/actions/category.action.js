import { categoryConstants } from './constants';
import axios from '../utilities/axios';

export const getAllCategories = () =>  {
  return async dispatch => {
    dispatch({type: categoryConstants.CATEGORY_REQUEST});
    const res = await axios.get('/categories/get');
    const {categoryList } = res.data;
    if(res.status === 200){
      dispatch({
        type: categoryConstants.CATEGORY_SUCCESS,
        payload: {
          categoryList
        }
      })
    }
    else{
        dispatch({
          type: categoryConstants.CATEGORY_FAILURE,
          payload: {
            error: "Error from the backend: "+res.data.error
          }
        })
      }
    
  }
}

export const addCategories = (form, categoryList) =>  {
  return async dispatch => {
    dispatch({type: categoryConstants.ADD_CATEGORY_REQUEST});
    const res = await axios.post('/categories/create', form);
    if(res.status === 201){
      dispatch({
        type: categoryConstants.ADD_CATEGORY_SUCCESS,
        payload: {categoryList: res.data.category}
      })
    }
    else{
      dispatch({
        type: categoryConstants.ADD_CATEGORY_FAILURE,
        payload: { error: res.data.error}
      })
    }
  }
}
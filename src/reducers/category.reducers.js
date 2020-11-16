import { categoryConstants } from "../actions/constants";

const initState = {
  categoryList: '',
  loading: false,
  error: ''
}

const buildNewCategories = (parentId, categories, category) => {
  let newCategories = [];

  for(let cat of categories){
    if(cat._id === parentId){
      newCategories.push({
        ...cat,
        children: cat.children && cat.children.length > 0? buildNewCategories(parentId, 
          [...cat.children, {
          children: category.children,
          _id: category._id, 
          name: category.name,
          slug: category.slug,
          parentId: category.parentId,
        }], category): []
      })
    }
    else{
      newCategories.push({
        ...cat,
        children: cat.children && cat.children.length > 0? buildNewCategories(parentId, cat.children, category): []
      })
    }
  }
  return newCategories;
}

export const categoryReducer =  (state=initState, action) => {
  switch(action.type){
    case categoryConstants.CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;
    case categoryConstants.CATEGORY_SUCCESS:
      state ={
        ...state,
        categoryList: action.payload.categoryList,
        loading: false,
      }
      break;
    case categoryConstants.CATEGORY_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      }
      break;
    
    case categoryConstants.ADD_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;
    case categoryConstants.ADD_CATEGORY_SUCCESS:
      const newCategory = action.payload.categoryList;
      const updatedCat =  buildNewCategories(newCategory.parentId, state.categoryList, newCategory);
      console.log("updated category",updatedCat)
      state = {
        ...state,
        categoryList: updatedCat,
        loading: false,
      }
      break;
    case categoryConstants.ADD_CATEGORY_FAILURE:
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
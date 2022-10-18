import axios from "axios"
import ACTIONS from "./index"




export const getAllCategories = async()=>{
    return async dispatch => {
    
        const res = await axios.get('/api/category/getCategories');

      
            const {categoryList} = res.data
console.log(categoryList);
            dispatch({type:ACTIONS.GET_ALL_CATEGORY,
            payload :{categories:categoryList}
            })
      
    
   
  
}
}
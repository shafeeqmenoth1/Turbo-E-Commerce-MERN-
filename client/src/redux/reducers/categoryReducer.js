import ACTIONS from '../actions/index'


const initialState = {
    categories: [],
    loading:false,
    error:null
}


const categoryReducer = (state = initialState,action) => {
    switch(action.type) {
        case ACTIONS.GET_ALL_CATEGORY:
            return {
                ...state,
                categories: action.payload.categories
            }
            
            default: 
            return state
    }
}

export default categoryReducer
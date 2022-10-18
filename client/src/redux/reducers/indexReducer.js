import {combineReducers} from "redux"
import auth from "./authReducer"
import token from "./tokenReducer"
import order from "./orderReducer"
import category from "./categoryReducer"
import product from "./productReducer"

export default combineReducers({
    auth,
    token,
    order,
    category,
    product
}) 
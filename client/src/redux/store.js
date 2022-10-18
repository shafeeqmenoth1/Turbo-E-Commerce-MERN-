import React from 'react'
import {applyMiddleware, createStore} from "redux"
import rootReducer from './reducers/indexReducer'
import  {Provider} from "react-redux"
import thunk from "redux-thunk"

const store = createStore(rootReducer,applyMiddleware(thunk))

function DataProvider({children}) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default DataProvider
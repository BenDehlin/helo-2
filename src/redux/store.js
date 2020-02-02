import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import authReducer from './authReducer'
import postReducer from './postReducer'

const rootReducer = combineReducers({
  postReducer, authReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
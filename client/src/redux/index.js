import {combineReducers}from 'redux'
import authReducer from './authReducer'
import courseReducer from './courseReducer'
import categorieReducer from './categorieReducer'


export default combineReducers ({authReducer,courseReducer,categorieReducer});
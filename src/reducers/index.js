// Archivo para combinar los reducers 
import {combineReducers} from 'redux'
import LicorReducer from './LicorReducer'

export default combineReducers({
    productos: LicorReducer
})
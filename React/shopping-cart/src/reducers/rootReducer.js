import { combineReducers } from 'redux'
import cartReducer from './CartReducers'

const rootReducer = combineReducers({
   cart: cartReducer
})

export default rootReducer
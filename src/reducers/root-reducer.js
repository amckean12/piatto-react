import { combineReducers } from 'redux'
import userReducer from './user-reducer'
import foodReducer from './food-reducer'

const rootReducer = combineReducers({
  userReducer,
  foodReducer
})

export default rootReducer

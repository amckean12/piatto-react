import { combineReducers } from 'redux'
import userReducer from './user-reducer'
import foodReducer from './food-reducer'
import routeReducer from './route-reducer'

const rootReducer = combineReducers({
  userReducer,
  foodReducer,
  routeReducer
})

export default rootReducer

import { combineReducers } from 'redux'
import userReducer from './user-reducer'
import foodReducer from './food-reducer'
import routeReducer from './route-reducer'
import recipeReducer from './recipe-reducer'

const rootReducer = combineReducers({
  userReducer,
  foodReducer,
  routeReducer,
  recipeReducer,
})

export default rootReducer

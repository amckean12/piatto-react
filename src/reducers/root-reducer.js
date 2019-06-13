import { combineReducers } from 'redux'
import userReducer from './user-reducer'
import foodReducer from './food-reducer'
import routeReducer from './route-reducer'
import recipeReducer from './recipe-reducer'
import menuReducer from './menu-reducer'

const rootReducer = combineReducers({
  userReducer,
  foodReducer,
  routeReducer,
  recipeReducer,
  menuReducer,
})

export default rootReducer

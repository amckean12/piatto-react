import { LOGOUT } from '../actions/action-types';

const initialMenuState = {
  recipes: [],
  ingredients: [],
}

export default function reducer(state = initialMenuState, action) {
    switch (action.type) {
      case 'ADD_RECIPE_TO_MENU':
        return {...state,
                recipes: [...state.recipes,
                          action.recipe],
                ingredients: [...state.ingredients,
                              action.recipe.ingredients]}
      case LOGOUT:
        return initialMenuState
      default:
        return state;
    }
  }

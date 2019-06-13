import * as types from '../actions/action-types';

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
      case types.LOGOUT:
        return{state: initialMenuState}
      default:
        return state;
    }
  }

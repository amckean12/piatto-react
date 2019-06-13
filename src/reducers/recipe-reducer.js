import * as types from '../actions/action-types';

const initialRecipeState = {
  recipeName: "",
  recipeDescription: "",
  ingredients: "",
}

export default function reducer(state = initialRecipeState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }

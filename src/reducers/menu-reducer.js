const initialMenuState = {
  recipes: []
}

export default function reducer(state = initialMenuState, action) {
    switch (action.type) {
      case 'ADD_RECIPE_TO_MENU':
        return {...state,
                recipes: [...state.recipes, action.recipe]}
      default:
        return state;
    }
  }

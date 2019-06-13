const initialState = {
  currentRoute: '/profile'
}

export default function reducer(state = initialState, action) {
  switch (action.type){
    case 'ADD_RECIPE_ROUTE':
      return {...state, currentRoute: "/add-recipe"}
    case 'ADD_MENU_ROUTE':
      return {...state, currentRoute: "/menu"}
    case 'ADD_SEARCH_ROUTE':
      return {...state, currentRoute: "/search-recipes"}
    default:
      return state;
  }
}

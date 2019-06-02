const initialState = {
  currentRoute: '/profile'
}

export default function reducer(state = initialState, action) {
  switch (action.type){
    case 'ADD_RECIPE_ROUTE':
      return {...state, currentRoute: "/profile/add-recipe"}
    case 'ADD_PROFILE_ROUTE':
      return {...state, currentRoute: "/profile"}
    case 'ADD_USER_ROUTE':
      return {...state, currentRoute: "/profile"}
    case 'ADD_SEARCH_ROUTE':
      return {...state, currentRoute: "/profile/search-recipes"}
    default:
      return state;
  }
}

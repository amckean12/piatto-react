const initialState = {
  currentRoute: '/profile'
}

export default function reducer(state = initialState, action) {
  switch (action.type){
    case 'ADD_RECIPE_ROUTE':
      return {...state, currentRoute: "/profile/add-recipe"}
    default:
      return state;
  }
}

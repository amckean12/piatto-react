const initialFoodState = {
  food: [],
  errors: "No Errors"
}

export default function reducer(state = initialFoodState, action) {
    switch (action.type) {
      case 'SET_FOOD':
        return {...state,
                food: action.food,
                errors: ["No Errors"]}
      case 'SET_TAG_ERROR':
        return {...state,
                errors: action.error}
      default:
        return state;
    }
  }

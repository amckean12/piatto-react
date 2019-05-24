const initialFoodState = {
  food: []
}

export default function reducer(state = initialFoodState, action) {
    switch (action.type) {
      case 'SET_FOOD':
        return action.food
      default:
        return state;
    }
  }

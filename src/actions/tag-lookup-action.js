export const setFood = food => {
  return { type: "SET_FOOD", food: food }
}


export const fetchFood = (tag) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/tags/${tag}`)
      .then(r=>r.json())
      .then(food => dispatch(setFood(food)))
  }
}

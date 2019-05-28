import { API_URL } from './api_URL'

export const setFood = food => {
  return { type: "SET_FOOD", food: food }
}


export const fetchFood = (tag) => {
  return dispatch => {
    return fetch(`${API_URL}/tags/${tag}`)
      .then(r=>r.json())
      .then(food => dispatch(setFood(food)))
  }
}

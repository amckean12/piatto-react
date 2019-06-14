import { API_URL } from './api_URL'

export const setFood = food => {
  return { type: "SET_FOOD", food: food }
}

export const setTagError = error =>  {
  return { type: "SET_TAG_ERROR", error: error}
}


export const fetchFood = (tag) => {
  const findFoodURL = `${API_URL}/tags/${tag}`;
  const options = {
    method: 'get',
    headers: {
      'Authorization': `Bearer ${localStorage.token}`
    }
  }
  return dispatch => {
    return fetch(findFoodURL, options)
      .then(r=>r.json())
      .then(food => {
        if(food !== null){
          dispatch(setFood(food))
        }else{
          dispatch(setTagError(food))
        }
      })
      .catch(err =>{
        console.log('Request Failed:', err)
      })
  }
}

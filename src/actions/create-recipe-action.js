import { API_URL } from './api_URL'
import fetch from 'cross-fetch'
import history from '../history.js'

export const createRecipe = recipe => {
  const recipeData = JSON.stringify({recipe})

  const options = {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    },
    body: recipeData
  }

  const fetchURL = `${API_URL}/recipes`

  return dispatch => {
    return fetch(fetchURL, options)
    .then(resp => resp.json())
    .then((response) => {
      console.log(response)
      alert("Recipe Added!")
    })
    .catch((errors) => {
      console.log(errors)
    })
  }
}

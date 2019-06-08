import { API_URL } from './api_URL'
import fetch from 'cross-fetch'
import history from '../history.js'

export const createRecipe = recipeData => {
  const recipeInfo = JSON.stringify({recipe: recipeData})
  console.log(recipeInfo)
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: recipeInfo
  }

  const fetchURL = `${API_URL}/recipes`

  return dispatch => {
    return fetch(fetchURL, options)
    .then(resp => resp.json())
    .then((recipe) =>{
      console.log(`Recipe Added: ${recipe}`)
      history.push('/profile')
    })
    .catch((errors) =>{
      console.log(errors)
    })
  }
}

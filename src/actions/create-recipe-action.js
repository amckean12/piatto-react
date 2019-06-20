import { API_URL } from './api_URL'
import fetch from 'cross-fetch'

export const createRecipe = recipe => {
  const recipeData = JSON.stringify({recipe})

  return dispatch => {
    console.log(recipeData)
  }
}

import { authRequest, authFailure, authSuccess } from './authentication-actions.js'
import { getUser } from './get-user.js'
import { API_URL } from './api_URL'
import fetch from 'cross-fetch'

export const loginUserFetch = credentials => {
  return dispatch => {
    dispatch(authRequest())
    return fetch(`${API_URL}/user_token`, {
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({auth: credentials})
    })
    .then(resp => resp.json())
    .then((response) => {
        const token = response.jwt;
        localStorage.setItem('token', token);
        return getUser(credentials)
    })
    .then((user) => {
      console.log(user)
        dispatch(authSuccess(user, localStorage.token))
    })
    .catch((errors) => {
        dispatch(authFailure(errors))
        localStorage.clear()
    })
  }
}

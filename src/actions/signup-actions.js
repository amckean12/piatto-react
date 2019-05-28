import { authRequest, authFailure, authSuccess } from './authentication-actions.js'
import { API_URL } from './api_URL'

export const signup = user => {
  return dispatch => {
    return fetch("http://localhost:3001/api/user_token", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      user: JSON.stringify({user: user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          console.log(data.message)
        } else {
          console.log(data.user)
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }
}

export const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
  })

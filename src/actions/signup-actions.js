import { authFailure } from './authentication-actions.js'
import { loginUserFetch } from './signin-actions.js'
import { API_URL } from './api_URL'
import fetch from 'cross-fetch'

export const userSignUpFetch = user => {
  //Fetch request info
  const newUser = JSON.stringify({user: user})

  const options = {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: newUser
  }
  const fetchURL = `${API_URL}/users`

  return dispatch => {
    return fetch(fetchURL, options)
      .then(resp => resp.json())
      .then(jresp => { dispatch(loginUserFetch({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password})
        )
      })
      .catch( err => {
        console.log('Request Failed:', err)
      })
    }
  }

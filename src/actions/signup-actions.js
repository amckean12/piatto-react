import { authFailure } from './authentication-actions.js'
import { loginUserFetch } from './signin-actions.js'
import { API_URL } from './api_URL'
import fetch from 'cross-fetch'

export const userSignUpFetch = user => {
  //Fetch options body
  console.log('C');
  const newUser = JSON.stringify({user: user})

  // fetch options for signing up user
  const options = {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: newUser
  }

  const fetchURL = `${API_URL}/users`

  // Action to send request to API to signup user
  return dispatch => {
    return fetch(fetchURL, options)
      .then(resp => resp.json())
      //calling action to log in user
      .then(jresp => {
        console.log('D');
        dispatch(loginUserFetch({
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
    console.log('E');
  }

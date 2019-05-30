import { authRequest, authFailure, authSuccess } from './authentication-actions.js'
import { getUser } from './get-user.js'
import { API_URL } from './api_URL'
import fetch from 'cross-fetch'
import history from '../history.js'


export const loginUserFetch = credentials => {

  //Fetch options body:
  const userCredentials = JSON.stringify({auth: credentials})

  //fetch options for logging in a new user
  const options = {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
    },
    body: userCredentials
  }

  const fetchURL = `${API_URL}/user_token`

  //Action to send request to API to get Token
  return dispatch => {
    dispatch(authRequest())
    return fetch(fetchURL, options)
    .then(resp => resp.json())
    .then((response) => {
        const token = response.jwt;
        //For now setting JWT in local storage see this in chrome console by localStorage.token
        localStorage.setItem('token', token);
        //Calling action to find user in API
        return getUser(credentials)
    })
    .then((user) => {
      console.log(user)
        dispatch(authSuccess(user, localStorage.token))
        //Push this state to the profile route
        history.push('/profile')
    })
    .catch((errors) => {
        dispatch(authFailure(errors))
        localStorage.clear()
    })
  }
}

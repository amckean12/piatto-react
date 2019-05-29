import { authFailure } from './authentication-actions.js'
import { loginUserFetch } from './signin-actions.js'
import { API_URL } from './api_URL'

export const userSignUpFetch = (user) => {
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
  fetch(fetchURL, options)
  .then(response => {
    let test = response.json();
    console.log(test)
  })
  .catch(err => {
    console.error('Request failed', err)
  })
}

import { authFailure } from './authentication-actions.js'
import { loginUserFetch } from './signin-actions.js'
import { API_URL } from './api_URL'

export const userSignUpFetch = (user) => {
  const newUser = user
  return dispatch => {
    return fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({user: user})
    })
      .then(response => response.json())
      .then(jresp => {
        dispatch(loginUserFetch({
          first_name: newUser.firstName,
          last_name: newUser.lastName,
          email: newUser.email,
          password: newUser.password})
        );
      })
      .catch((errors) => {
        dispatch(authFailure(errors))
      })
  };
}

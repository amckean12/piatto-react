export const userSignUpFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
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

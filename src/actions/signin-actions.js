export const loginUserFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3001/user_token", {
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({user})
    })
    .then(resp => resp.json())
    .then(data =>{
      if (data.message){
        console.log(data.message)
      }else{
        localStorage.setItem("token", data.jwt)
        dispatch(loginUser(data))
      }
    })
  }
}

export const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
})

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

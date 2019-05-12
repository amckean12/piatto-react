import React, { Component } from 'react'
import '../form.css'
//Container CSS Section

//End CSS


//Start Component

class SignIn extends Component {
  render(){
    return(
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignIn

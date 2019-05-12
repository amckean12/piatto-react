import React, { Component } from 'react'
import '../form.css'
//Container CSS Section

//End CSS


//Start Component

class LogIn extends Component {
  render(){
    return(
      <div className="form-container log-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
    )
  }
}

export default LogIn

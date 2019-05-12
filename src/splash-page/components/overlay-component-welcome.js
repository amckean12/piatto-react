import React, { Component } from 'react'
//Container CSS Section

//End CSS


//Start Component

class OverlayComponentWelcome extends Component {
  render(){
    return(
      <div class="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button class="ghost" id="signIn">Sign In</button>
      </div>
    )
  }
}

export default OverlayComponentWelcome

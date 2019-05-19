import React, { Component } from 'react'
//Container CSS Section

//End CSS


//Start Component

class OverlayComponentWelcome extends Component {
  render(){
    return(
      <div className="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button className="ghost" id="signIn" onClick={this.props.signInButtonClicked}>Sign In</button>
      </div>
    )
  }
}

export default OverlayComponentWelcome

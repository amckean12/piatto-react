import React, { Component } from 'react'
//Container CSS Section

//End CSS


//Start Component
class OverlayComponentHello extends Component {
  render(){
    return(
      <div className="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <button className="ghost" id="signUp" onClick={this.props.signUpButtonClicked}>Sign Up</button>
      </div>

    )
  }
}

export default OverlayComponentHello

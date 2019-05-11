import React, { Component } from 'react'
import SignIn from '../components/sign-in'
import LogIn from '../components/log-in'

//Container CSS Section

//End CSS


//Start Component

class SplashContainer extends Component {
  render(){
    return(
      <div className="splash-container">
        <LogIn />
        <SignIn /> 
      </div>
    )
  }
}

export default SplashContainer

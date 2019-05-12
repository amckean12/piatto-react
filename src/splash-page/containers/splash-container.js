import React, { Component } from 'react'
import SignIn from '../components/sign-up'
import LogIn from '../components/log-in'
import OverlayComponentWelcome from '../components/overlay-component-welcome.js'
import OverlayComponentHello from '../components/overlay-component-hello.js'
import '../splash.css'
import '../overlay.css'
import '../splash-style.js'
//Container CSS Section

//End CSS


//Start Component

class SplashContainer extends Component {
  render(){
    return(
      <div className="splash-container">
        <SignIn />
        <LogIn />
        <div className="overlay-container">
          <div className="overlay">
            <OverlayComponentWelcome />
            <OverlayComponentHello />
          </div>
        </div>
      </div>
    )
  }
}

export default SplashContainer

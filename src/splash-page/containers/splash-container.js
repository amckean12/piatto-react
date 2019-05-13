import React, { Component } from 'react'
import SignUp from '../components/sign-up'
import LogIn from '../components/log-in'
import OverlayComponentWelcome from '../components/overlay-component-welcome.js'
import OverlayComponentHello from '../components/overlay-component-hello.js'
import '../splash.css'
import '../overlay.css'
//Container CSS Section

//End CSS


//Start Component


class SplashContainer extends Component {
  state = {
    splashContainerName: "splash-container"
  }

  signUpButtonClicked = () => {
    this.setState({
      splashContainerName: "splash-container right-panel-active"
    })
  }

  signInButtonClicked = () => {
    this.setState({
      splashContainerName: "splash-container"
    })
  }

  render(){
    return(
      <div className={this.state.splashContainerName}>
        <SignUp />
        <LogIn />
        <div className="overlay-container">
          <div className="overlay">
            <OverlayComponentWelcome signInButtonClicked={this.signInButtonClicked}/>
            <OverlayComponentHello signUpButtonClicked={this.signUpButtonClicked}/>
          </div>
        </div>
      </div>
    )
  }
}

export default SplashContainer

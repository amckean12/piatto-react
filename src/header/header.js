import React, { Component } from 'react'
import logo from '../logo.png';
//Container CSS Section

//End CSS


//Start Component
class HeaderComponent extends Component {
  render(){
    return(
      <div className="Site-Header">
        <img src={ logo } alt="Logo"/>
      </div>

    )
  }
}

export default HeaderComponent

import React, { Component } from 'react'
//Container CSS Section
const headerStyle = {
  color: "71E868",
  "font-size": "32px",
}
//End CSS


//Start Component
class HeaderComponent extends Component {
  render(){
    return(
      <div class="Site-Header" style={headerStyle}>
        <h1>Piatto Beta</h1>
      </div>

    )
  }
}

export default HeaderComponent

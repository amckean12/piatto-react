import React, { Component } from 'react'
//Container CSS Section
const headerStyle = {
  "font-size": "32px",
}

const headerH1Style = {
  color: "#92FE9D",
}
//End CSS


//Start Component
class HeaderComponent extends Component {
  render(){
    return(
      <div className="Site-Header" style={headerStyle}>
        <h1 style={headerH1Style}>Piatto Beta</h1>
      </div>

    )
  }
}

export default HeaderComponent

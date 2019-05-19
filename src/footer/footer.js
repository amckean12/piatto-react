import React, { Component } from 'react'
//Container CSS Section

//End CSS
const footerStyle = {
  "text-align": "right",
  "padding-right": "30px",
  color: "#A9A9A9",
}

//Start Component
class FooterComponent extends Component {
  render(){
    return(
      <footer className="Site-Footer">
        <h3 style={ footerStyle }>Made By: Alex McKean</h3>
      </footer>

    )
  }
}

export default FooterComponent

import React, { Component } from 'react'
import { connect } from 'react-redux';
import NavbarContainer from '/profile-container.js'

class ProfileContainer extends Component {


  render(){
    return(
      <div className="profile-container">
        <NavbarContainer />
        <MenuContainer />
        <ListContainer />
      </div>
    )
  }
}



export default ProfileContainer

import React, { Component } from 'react'
import { connect } from 'react-redux';
import NavbarContainer from './navbar-container.js'
import MenuContainer from '../../menu/containers/menu-container.js'
import ListContainer from './list-container.js'
import "../profile.css"


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

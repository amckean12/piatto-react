import React, { Component } from 'react'
import { connect } from 'react-redux';
import NavbarContainer from './navbar-container.js'
import MenuContainer from '../../menu/containers/menu-container.js'
import ListContainer from './list-container.js'
import "../profile.css"
import { Redirect } from 'react-router-dom'


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

const mapStateToProps = user => ({
  userLoggedIn: user.userReducer.isAuthenticated
})



export default connect(mapStateToProps, null)(ProfileContainer)

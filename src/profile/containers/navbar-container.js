import React, { Component } from 'react'
import { connect } from 'react-redux';
import NavbarLinkComponent from '../components/navbar-link-component';
import NavbarProfileComponent from '../components/navbar-profile-component';
import { getUser } from '../../actions/get-user.js'
import { logout } from '../../actions/user-logout.js'
import { Redirect } from 'react-router-dom'

class NavbarContainer extends Component {

  handleLogout(event){
    this.props.logout();
  }

  render(){
    return(
      <div className='navbar-container'>
        <NavbarProfileComponent />
        <NavbarLinkComponent stateValue={this.props.userInfo.first_name} />
        <NavbarLinkComponent stateValue={"Menu"} />
        <NavbarLinkComponent stateValue={"Friends"} />
        <NavbarLinkComponent stateValue={"Settings"} />
        <button onClick={(event) => this.handleLogout(event)}>Logout</button>
      </div>
    )
  }
}

const mapStateToProps = user => ({
  userInfo: user.userReducer.currentUser,
  isLoggedIn: user.userReducer.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  logout: userInfo => dispatch(logout(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)

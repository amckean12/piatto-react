import React, { Component } from 'react'
import { connect } from 'react-redux';
import NavbarLinkComponent from '../components/navbar-link-component';
import NavbarProfileComponent from '../components/navbar-profile-component';

class NavbarContainer extends Component {


  render(){
    return(
      <div className='navbar-container'>
        <NavbarProfileComponent />
        <NavbarLinkComponent value={"First Name"} />
        <NavbarLinkComponent value={"Menu"} />
        <NavbarLinkComponent value={"Friends"} />
        <NavbarLinkComponent value={"Settings"} />
        <NavbarLinkComponent value={"Logout"} />
      </div>
    )
  }
}



export default NavbarContainer

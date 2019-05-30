import React, { Component } from 'react'
import { connect } from 'react-redux';
import NavbarLinkComponent from '../components/navbar-link-component';
import NavbarProfileComponent from '../components/navbar-profile-component';
import { getUser } from '../../actions/get-user.js'

class NavbarContainer extends Component {

  // componentDidMount(){
  //   getUser({
  //     email: this.props.userInfo.currentUser.email,
  //     password: this.props.userInfo.currentUser.password
  //   })
  // }

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

const mapStateToProps = user => ({
  userInfo: user.userReducer
})

export default connect(mapStateToProps, null)(NavbarContainer)

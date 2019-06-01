import React, { Component } from 'react'
import { connect } from 'react-redux';
import NavbarContainer from './navbar-container.js'
import MenuContainer from '../../menu/containers/menu-container.js'
import ListContainer from './list-container.js'
import "../profile.css"
import { Redirect } from 'react-router-dom'
import RecipeContainer from '../../recipe/containers/recipe-container.js'


class ProfileContainer extends Component {
  state ={
    route: '/profile'
  }

  displayComponentBasedOnRoute(){
    if (this.state.route === '/profile'){
      return (<MenuContainer/>)
    }
    if (this.state.route === '/profile/add-recipe'){
      return (<RecipeContainer/>)
    }
  }

  render(){
    return(
      <div className="profile-container">
        <NavbarContainer />
        {this.displayComponentBasedOnRoute()}
        <ListContainer />
      </div>
    )
  }
}

const mapStateToProps = user => ({
  userLoggedIn: user.userReducer.isAuthenticated
})



export default connect(mapStateToProps, null)(ProfileContainer)

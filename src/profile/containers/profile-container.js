import React, { Component } from 'react'
import { connect } from 'react-redux';
import NavbarContainer from './navbar-container.js'
import MenuContainer from '../../menu/containers/menu-container.js'
import ListContainer from './list-container.js'
import "../profile.css"
import { Redirect } from 'react-router-dom'
import RecipeContainer from '../../recipe/containers/recipe-container.js'


class ProfileContainer extends Component {

  displayComponentBasedOnRoute(){
    if (this.props.routeState === '/profile'){
      return (<MenuContainer/>)
    }
    if (this.props.routeState === '/profile/add-recipe'){
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
  userLoggedIn: user.userReducer.isAuthenticated,
  routeState: user.routeReducer.currentRoute
})



export default connect(mapStateToProps, null)(ProfileContainer)

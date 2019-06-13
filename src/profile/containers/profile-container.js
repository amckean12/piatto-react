import React, { Component } from 'react'
import { connect } from 'react-redux';
import NavbarContainer from './navbar-container.js'
import MenuContainer from '../../menu/containers/menu-container.js'
import ListContainer from './list-container.js'
import "../profile.css"
import { Redirect } from 'react-router-dom'
import RecipeContainer from '../../recipe/containers/recipe-container.js'
import UserMenuContainer from '../../menu/containers/user-menu-container.js'


class ProfileContainer extends Component {
  componentDidUpdate(){
    this.renderComponent()
  }

  renderComponent = () => {
    if (this.props.routeState === '/menu'){
      return(<UserMenuContainer />)
    }
    if(this.props.routeState === '/add-recipe'){
      return(<RecipeContainer />)
    }
    if(this.props.routeState === '/search-recipes'){
      return(<MenuContainer />)
    }
  }
  
  render(){
    return(
      <div className="profile-container">
        <NavbarContainer />
        {this.renderComponent()}
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

import React, { Component } from 'react'
import { connect } from 'react-redux';
import NavbarProfileComponent from '../components/navbar-profile-component';
import { getUser } from '../../actions/get-user.js'
import { logout } from '../../actions/user-logout.js'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import ProfileContainer from './profile-container'

class NavbarContainer extends Component {

  handleLogout(event){
    this.props.logout();
  }

  render(){
    return(
      <div className='navbar-container'>
        <NavbarProfileComponent />
        <ul>
         <li><Link to={`/profile/${this.props.userInfo.first_name}`}>{this.props.userInfo.first_name}</Link></li>
         <li><Link to={`/profile/`}>Menu</Link></li>
         <li><Link to={`/profile/add-recipe`} onClick={this.props.addRecipeRoute}>Add Recipe</Link></li>
         <li><Link to={`/profile/search-recipes`}>Search Recipes</Link></li>
         <li><Link to={'/'} onClick={(event) => this.handleLogout(event)}>Log Out</Link></li>
       </ul>
      </div>
    )
  }
}

const mapStateToProps = user => ({
  userInfo: user.userReducer.currentUser,
  isLoggedIn: user.userReducer.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  logout: userInfo => dispatch(logout(userInfo)),
  addRecipeRoute: routeName => dispatch({type: "ADD_RECIPE_ROUTE" , routeName})
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)

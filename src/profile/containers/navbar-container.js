import React, { Component } from 'react'
import { connect } from 'react-redux';
import NavbarProfileComponent from '../components/navbar-profile-component';
import { getUser } from '../../actions/get-user.js'
import { logout } from '../../actions/user-logout.js'
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProfileContainer from './profile-container'

const linkStyle = {
  color: "#FFFFFF",
  "text-decoration": "none",
}

class NavbarContainer extends Component {

  handleLogout(event){
    this.props.logout();
  }

  render(){
    return(
      <div className='navbar-container'>
        <NavbarProfileComponent />
        <ul>
         <li><Link to={`profile/${this.props.userInfo.first_name}`} style={linkStyle}>{this.props.userInfo.first_name}</Link></li>
         <li><Link to={`/profile`} onClick={this.props.addProfileRoute} style={linkStyle}>Menu</Link></li>
         <li><Link to={`profile/add-recipe`} onClick={this.props.addRecipeRoute} style={linkStyle}>Add Recipe</Link></li>
         <li><Link to={`profile/search-recipes`} onClick={this.props.addSearchRecipeRoute} style={linkStyle}>Search Recipes</Link></li>
         <li><Link to={'/'} onClick={(event) => this.handleLogout(event)} style={linkStyle}>Log Out</Link></li>
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
  addRecipeRoute: routeName => dispatch({type: "ADD_RECIPE_ROUTE" , routeName}),
  addProfileRoute: routeName => dispatch({type: "ADD_PROFILE_ROUTE" , routeName}),
  addUserRoute: routeName => dispatch({type: "ADD_USER_ROUTE" , routeName}),
  addSearchRecipeRoute: routeName => dispatch({type: "ADD_SEARCH_ROUTE" , routeName})
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)

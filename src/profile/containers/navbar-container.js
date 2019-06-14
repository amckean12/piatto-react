import React, { Component } from 'react'
import { connect } from 'react-redux';
import NavbarProfileComponent from '../components/navbar-profile-component';
import { getUser } from '../../actions/get-user.js'
import { logout } from '../../actions/user-logout.js'
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom'
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
        <p>{`Hi ${this.props.userInfo.first_name}!`}</p>
        <ul>
         <li><Link to={`/menu`} onClick={this.props.addMenuRoute} style={linkStyle}>Menu</Link></li>
         <li><Link to={`/add-recipe`} onClick={this.props.addRecipeRoute} style={linkStyle}>Add Recipe</Link></li>
         <li><Link to={`/search-recipes`} onClick={this.props.addSearchRoute} style={linkStyle}>Search Recipes</Link></li>
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
  addMenuRoute: routeName => dispatch({type: "ADD_MENU_ROUTE" , routeName}),
  addSearchRoute: routeName => dispatch({type: "ADD_SEARCH_ROUTE" , routeName}),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)

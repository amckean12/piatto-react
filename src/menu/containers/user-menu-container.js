import React, { Component } from 'react'
import { connect } from 'react-redux';
import UserMenu from '../components/user_menu.js'
import "../meal-box.css"

class UserMenuContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="menu-container">
        <h1>User's Menu</h1>
        <UserMenu />
      </div>
    )
  }
}

const mapStateToProps = menu => ({
  userLoggedIn: menu.menuReducer.recipes
})


export default connect(mapStateToProps)(UserMenuContainer)

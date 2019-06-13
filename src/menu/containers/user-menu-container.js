import React, { Component } from 'react'
import { connect } from 'react-redux';
import UserMenu from '../components/user_menu.js'
import "../meal-box.css"

class UserMenuContainer extends Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate(){
    return this.props.recipes.map(food => {
      return(<UserMenu  food={food} />)
    })
  }

  render(){
    return(
      <div className="menu-container">
        <h1>User's Menu</h1>
        {this.componentDidUpdate()}
      </div>
    )
  }
}

const mapStateToProps = menu => ({
  recipes: menu.menuReducer.recipes
})


export default connect(mapStateToProps)(UserMenuContainer)

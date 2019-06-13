import React, { Component } from 'react'
import { connect } from 'react-redux';
import MealBoxTitle from '../components/meal-box-title.js'
import MealBoxDescription from '../components/meal-box-description.js'
import MealBoxIngredients from '../components/meal-box-ingredients.js'
import "../meal-box.css"

class UserMenuContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="menu-container">
        <h1>User's Menu</h1>

      </div>
    )
  }
}

const mapStateToProps = menu => ({
  userLoggedIn: menu.menuReducer.recipes
})


export default connect(mapStateToProps)(UserMenuContainer)

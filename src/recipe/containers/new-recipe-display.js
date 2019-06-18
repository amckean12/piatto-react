import React, { Component } from 'react'
import { connect } from 'react-redux';
import RecipeTitle from '../components/recipe-form-title'

import '../recipe.css'


class NewRecipeDisplay extends Component {

  render(){
    return(
      <div className="new-recipe-display-container">
        <RecipeTitle />
        <form>
          <input type="text" placeholder="Recipe Name"></input>
          <input type="text" placeholder="Recipe Description"></input>
        </form>
      </div>
    )
  }
}



export default(NewRecipeDisplay)

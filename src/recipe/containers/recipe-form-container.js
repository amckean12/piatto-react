import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { } from '../../actions/create-recipe-action.js'
import RecipeTitle from '../components/recipe-form-title'

import '../recipe.css'


class RecipeFormContainer extends Component {



  render(){
    return(
      <div className="recipe-form-container">
        <RecipeTitle />
        <form>
          <input type="text" placeholder="Recipe Name"></input>
          <input type="text" placeholder="Recipe Description"></input>
        </form>
        <div className="multi-recipe-inputs">
          <input type= "text" placeholder="Ingredient"></input>
          <input type="text" placeholder="Tag"></input>
        </div>
      </div>
    )
  }
}



export default(RecipeFormContainer)

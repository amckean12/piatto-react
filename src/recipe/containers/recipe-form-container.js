import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { } from '../../actions/create-recipe-action.js'
import RecipeTitle from '../components/recipe-form-title'

import '../recipe.css'


class RecipeFormContainer extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div className="recipe-form-container">
        <RecipeTitle />
        <form>
          <input type="text" placeholder="Recipe Name" onChange={this.props.handleChange} name="name"></input>
          <input type="text" placeholder="Recipe Description" onChange={this.props.handleChange} name="description"></input>
        </form>
        <div className="multi-recipe-inputs">
          <input type= "text" placeholder="Ingredient" onChange={this.props.handleChange} name="ingredientInput"></input>
          <input type="text" placeholder="Tag" onChange={this.props.handleChange} name="tagInput"></input>
        </div>
      </div>
    )
  }
}



export default(RecipeFormContainer)

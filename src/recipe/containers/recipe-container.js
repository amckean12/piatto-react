import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { } from '../../actions/create-recipe-action.js'
import RecipeFormContainer from './recipe-form-container'
import NewRecipeDisplay from  './new-recipe-display'

import '../recipe.css'


class RecipeContainer extends Component {

  state = {
    name: "",
    description: "",
    ingredientInput: "",
    tagInput: "",
    ingredients: [],
    tags: []
    }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onAddButtonClick = (event) => {
    if(event.target.name === "ingredients"){
      this.setState({
        ingredients: [...this.state.ingredients, this.state.ingredientInput],
        ingredientInput: ""
      })
      document.getElementById("ingredient-input").value = "";
    }else{
      this.setState({
        tags: [...this.state.tags, this.state.tagInput],
        tagInput: ""
      })
      document.getElementById("tag-input").value = "";
    }
  }

  render(){
    return(
      <div className="recipe-container">
        <RecipeFormContainer handleChange={this.handleChange} onAddButtonClick={this.onAddButtonClick}/>
        <NewRecipeDisplay ingredients={this.state.ingredients} tags={this.state.tags}/>
      </div>
    )
  }
}



export default(RecipeContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import AddRecipeTitle from '../components/recipe-form-title'
import SingleRecipeInput from '../components/single-recipe-input'
import AddButton from '../components/add-button'


import '../recipe.css'


class RecipeContainer extends Component {
  state = {
    recipeName: "",
    description: "",
    ingredients: [],
    tags: [],
    recipeInputIngredient: false,
    recipeInputTag: false
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleIngredientAdd = () => {
    this.setState({
      recipeInputIngredient: true
    })
  }

  handleTagAdd = () => {
    this.setState({
      recipeInputTag: true
    })
  }

  renderIngredientPills = () => {
    return("Ingredients")
  }

  renderTagPills = () => {
    return("Tags")
  }

  render(){
    return(
      <div className="new-recipe-container">
        <AddRecipeTitle/>
          <SingleRecipeInput inputTitle={"Recipe Name"}/>
          <SingleRecipeInput inputTitle={"Recipe Description"}/>
          <AddButton handleAdd={()=>{this.handleIngredientAdd()}}/>
          { this.state.recipeInputIngredient == true ? <SingleRecipeInput inputTitle={"Ingredient Input"}/> : ""}
          <div className="ingredient-pills">
            {this.renderIngredientPills()}
          </div>
          <AddButton handleAdd={()=>{this.handleTagAdd()}}/>
          { this.state.recipeInputTag == true ? <SingleRecipeInput inputTitle={"Tag Input"}/> : ""}
          <div className="tag-pills">
            {this.renderTagPills()}
          </div>
      </div>
    )
  }
}



export default(RecipeContainer)

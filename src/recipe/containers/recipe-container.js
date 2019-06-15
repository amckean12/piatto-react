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
    recipeInputTag: false,
    tagInput: ""
  }

  handleChange = () => {
    debugger;
    // this.setState({
    //   [event.target.name]: event.target.value
    // })
  }

  handleIngredientAdd = () => {
    this.setState({
      recipeInputIngredient: true
    })
  }

  handleTagAdd = (tag) => {
    if(this.state.recipeInputTag === false){
      this.setState({
        recipeInputTag: true
      })
    } else {
      this.setState({
      recipeInputTag: false})
    }
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
          { this.state.recipeInputIngredient == true ? <SingleRecipeInput inputTitle={"Ingredient Input"} handleChange={() => {this.handleChange()}}/> : ""}
          <AddButton handleAdd={()=>{this.handleIngredientAdd()}}/>
          <div className="ingredient-pills">
            {this.renderIngredientPills()}
          </div>
          { this.state.recipeInputTag == true ? <SingleRecipeInput inputTitle={"Tag Input"} handleChange={this.handleChange()} name="tagInput" value={this.state.tagInput}/> : ""}
          <AddButton handleAdd={()=>{this.handleTagAdd()}}/>
          <div className="tag-pills">
            {this.renderTagPills()}
          </div>
      </div>
    )
  }
}



export default(RecipeContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { createRecipe } from '../../actions/create-recipe-action.js'
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



  submitRecipe = () => {
    //Look to place this in redux
    this.props.createRecipe(
      {name: this.state.name,
      description: this.state.description,
      ingredients_attributes: [
        this.state.ingredients.map(ingredient => {
          return {description: this.state.ingredient}
        })
      ],
      tags_attributes: [
        this.state.tags.map(tag =>{
          return {
            tag_name: this.state.tag,
            slug: this.state.tag
          }
        })
      ]}
    )
    this.setState({
      name: "",
      description: "",
      ingredientInput: "",
      tagInput: "",
      ingredients: [],
      tags: []
    })
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

  onDeleteButtonClicked = (event) => {
    if (event.currentTarget.id === "tag"){
      let filteredTags = this.state.tags.filter(tag => tag !== event.currentTarget.name)
      this.setState({
        tags: filteredTags
      })
    } else if(event.currentTarget.id === 'ingredient'){
      let filteredIngredients = this.state.ingredients.filter(ingredient => ingredient !== event.currentTarget.name)
      this.setState({
        ingredients: filteredIngredients
      })
    }
  }

  render(){
    return(
      <div className="recipe-container">
        <RecipeFormContainer handleChange={this.handleChange} onAddButtonClick={this.onAddButtonClick} submitRecipe={this.submitRecipe}/>
        <NewRecipeDisplay ingredients={this.state.ingredients} tags={this.state.tags} onDeleteButtonClicked={this.onDeleteButtonClicked}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createRecipe: recipeInfo => dispatch(createRecipe(recipeInfo))
})



export default connect(null, mapDispatchToProps)(RecipeContainer)

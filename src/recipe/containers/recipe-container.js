import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import AddRecipeTitle from '../components/recipe-form-title'
import SingleRecipeInput from '../components/single-recipe-input'
import AddIngredientsButton from '../components/add-ingredients-button'


import '../recipe.css'


class RecipeContainer extends Component {
  state = {
    recipeName: "",
    description: "",
    ingredients: [],
    tags: [],
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit(event){

  }

  render(){
    return(
      <div className="new-recipe-container">
        <AddRecipeTitle/>
        <form>
          <SingleRecipeInput inputTitle={"Recipe Name"}/>
          <SingleRecipeInput inputTitle={"Recipe Description"}/>
          <AddIngredientsButton />
        </form>
      </div>
    )
  }
}



export default(RecipeContainer)

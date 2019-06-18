import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { } from '../../actions/create-recipe-action.js'
import TextBox from '../components/textbox'
import SubmitButton from '../components/submit'
import CommentComponent from '../components/comment'
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
    
  }

  render(){
    return(
      <div className="recipe-container">
        <RecipeFormContainer handleChange={this.handleChange} onAddButtonClick={this.onAddButtonClick}/>
        <NewRecipeDisplay />
      </div>
    )
  }
}



export default(RecipeContainer)

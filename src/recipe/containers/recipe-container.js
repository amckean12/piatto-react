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

  render(){
    return(
      <div className="recipe-container">
        <RecipeFormContainer />
        <NewRecipeDisplay />
      </div>
    )
  }
}



export default(RecipeContainer)

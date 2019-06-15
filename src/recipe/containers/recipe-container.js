import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import AddRecipeTitle from '../components/recipe-form-title'

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
      <div className="form-container recipe-container">
        <AddRecipeTitle/>
        <form>
          
        </form>
      </div>
    )
  }
}



export default(RecipeContainer)

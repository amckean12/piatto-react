import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { } from '../../actions/create-recipe-action.js'
import IngredientPill from '../components/ingredient-pill.js'
import TagPill from '../components/tag-pill.js'

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
    event.preventDefault();
    console.log("hit the submit")
  }

  render(){
    return(
      <div className="recipe-container">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <h1>Create Recipe</h1>
          <div className="recipe-form-long">
            <input type="text" placeholder="Recipe Name" name="recipeName" onChange={(event) => this.handleChange(event)} value={this.state.RecipeName}/>
            <input type="text" placeholder="Recipe Description" name="description" onChange={(event) => this.handleChange(event)} value={this.state.description}/>
          </div>
          <div className="recipe-form-short">
            <input type="text" placeholder="ingredients" name="ingredients" />
            <input type="text" placeholder="tags" name="tags" />
          </div>
          <button>Create Recipe</button>
        </form>
      </div>
    )
  }
}



export default(RecipeContainer)

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
        <div className="new-recipe-form">
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <h1>Create Recipe</h1>
            <div className="recipe-form-long">
              <p>Name</p>
              <input type="text" className="recipe-name" name="recipeName" onChange={(event) => this.handleChange(event)} value={this.state.RecipeName}/>
              <p>Description</p>
              <input type="text" className="recipe-description" name="description" onChange={(event) => this.handleChange(event)} value={this.state.description}/>
            </div>
            <div className="recipe-form-short">
              <input type="text" placeholder="ingredients" name="ingredients" />
              <IngredientPill />
              <input type="text" placeholder="tags" name="tags" />
              <TagPill />
            </div>
            <button>Create Recipe</button>
          </form>
        </div>
      </div>
    )
  }
}



export default(RecipeContainer)

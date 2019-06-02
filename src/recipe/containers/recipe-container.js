import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
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
          <h1>Create Account</h1>
          <input type="text" placeholder="Recipe Name" name="recipeName" onChange={(event) => this.handleChange(event)} value={this.state.RecipeName}/>
          <input type="text" placeholder="Recipe Description" name="description" onChange={(event) => this.handleChange(event)} value={this.state.description}/>
          <input type="text" placeholder="ingredients" name="ingredients" onChange={(event) => this.handleChange(event)} value={this.state.ingredients}/>
          <input type="text" placeholder="tags" name="tags" onChange={(event) => this.handleChange(event)} value={this.state.tags}/>
          <button>Create Recipe</button>
        </form>
      </div>
    )
  }
}



export default(RecipeContainer)

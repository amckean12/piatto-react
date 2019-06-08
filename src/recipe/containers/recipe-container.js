import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { createRecipe } from '../../actions/create-recipe-action.js'
import IngredientPill from '../components/ingredient-pill.js'
import TagPill from '../components/tag-pill.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


import '../recipe.css'


class RecipeContainer extends Component {
  state = {
    recipeName: "",
    description: "",
    ingredient: "",
    tag: "",
    ingredients: [],
    tags: [],
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addRecipeIngredient(event){
    let ingredient = {'description': this.state.ingredient}
    let newIngredientArray = this.state.ingredients.slice();
    newIngredientArray.push(ingredient)
    this.setState({
      ingredients: newIngredientArray,
      ingredient: ""
      })
  }

  addRecipeTag(event){
    let tag = {'tag_name': this.state.tag, 'slug': this.state.tag}
    let newTagArray = this.state.tags.slice();
    newTagArray.push(tag)
    this.setState({
      tags: newTagArray,
      tag: ""
    })
  }

  deleteIngredient = (event) => {
    let filteredIngredients = this.state.ingredients.filter(ingredient => ingredient !== event.target.value)
    this.setState({
      ingredients: filteredIngredients
    })
  }

  // deleteIngredient(event){
  //   let filteredIngredients = this.state.ingredients.filter(ingredient => ingredient !== event.target.value)
  //   this.setState({
  //     ingredients: filteredIngredients
  //   })
  // }

  deleteTag(){
    alert("Hello this is delete Tag")
  }



  handleSubmit(event){
    event.preventDefault();
    let submittedState = {
      name: this.state.recipeName,
      description: this.state.description,
      ingredients_attributes: this.state.ingredients,
      tags_attributes: this.state.tags,
    }
    this.props.createRecipe(submittedState)
    this.setState({
      recipeName: "",
      description: "",
      ingredient: "",
      tag: "",
      ingredients: [],
      tags: [],
    })
  }

  render(){
    const ingredients = this.state.ingredients.map( (ingredient) =>{
      return(<IngredientPill key={ingredient.id} ingredientName={ingredient.description} deleteIngredient={this.deleteIngredient}/>)
    })

    const tags = this.state.tags.map( (tag, key) => {
      return(<TagPill key={tag.id}  tagName ={tag.tag_name} deleteTag={this.deleteTag}/>)
    })

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
            <button>Create Recipe</button>
          </form>
          <div className="recipe-form-short">
            <input type="text" placeholder="ingredients" name="ingredient" onChange={(event) => this.handleChange(event)} value={this.state.ingredient}/>
            <button onClick={(event) => this.addRecipeIngredient(event)} name="ingredientPush"><FontAwesomeIcon icon={ faPlus }/></button>
            { ingredients }
            <input type="text" placeholder="tags" name="tag" onChange={(event) => this.handleChange(event)} value={this.state.tag}/>
            <button onClick={(event) => this.addRecipeTag(event)} name="tagPush"><FontAwesomeIcon icon={ faPlus }/></button>
            { tags }
          </div>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = user => ({
//   isLoggedIn: user.userReducer.isAuthenticated
// })

const mapDispatchToProps = dispatch => ({
  createRecipe: recipeInfo => dispatch(createRecipe(recipeInfo))
})



export default connect(null, mapDispatchToProps)(RecipeContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux';
import GroceryListComponent from '../components/grocery-list-component.js'
import IngredientList from '../components/ingredient-list-component.js'
import CreateShoppingList from '../components/create-shopping-list-button.js'

class ListContainer extends Component {

  state = {
    ingredients: [this.props.ingredients]
  }

  listOutIngredients = () => {
    if (this.props.ingredients === undefined){
      return("")
    } else {
      return this.props.ingredients.map(ingredientObject => {
        return ingredientObject.map(ingredient => {
          return (<IngredientList name={ingredient.description} />)
        })
      })
    }
  }

  generateList = () => {
    alert("Under Dev! Check Back soon!")
  }

  render(){
    return(
      <div className="list-container">
        <GroceryListComponent/>
        {this.listOutIngredients()}
        <CreateShoppingList generateList={() => {this.generateList()}}/>
      </div>
    )
  }
}

const mapStateToProps = recipe => ({
  ingredients: recipe.menuReducer.ingredients
})



export default connect(mapStateToProps, null)(ListContainer)

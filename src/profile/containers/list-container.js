import React, { Component } from 'react'
import { connect } from 'react-redux';
import GroceryListComponent from '../components/grocery-list-component.js'
import IngredientList from '../components/ingredient-list-component.js'
import CreateShoppingList from '../components/create-shopping-list-button.js'

class ListContainer extends Component {


  componentDidUpdate(){
    return this.props.ingredients.map(ingredientObject => {
      return ingredientObject.map(ingredient =>{
        return (<IngredientList name={ingredient}/>)
      })
    })
  }

  generateList = () => {
    alert("This button was clicked")
  }

  render(){
    return(
      <div className="list-container">
        <GroceryListComponent/>
        {this.componentDidUpdate()}
        <CreateShoppingList generateList={() => {this.generateList()}}/>
      </div>
    )
  }
}

const mapStateToProps = recipe => ({
  ingredients: recipe.menuReducer.ingredients
})



export default connect(mapStateToProps, null)(ListContainer)

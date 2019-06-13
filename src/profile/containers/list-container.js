import React, { Component } from 'react'
import { connect } from 'react-redux';
import GroceryListComponent from '../components/grocery-list-component.js'
import IngredientList from '../components/ingredient-list-component.js'

class ListContainer extends Component {


  componentDidUpdate(){
    return this.props.ingredients.map(ingredientObject => {
      return ingredientObject.map(ingredient =>{
        return (<IngredientList name={ingredient}/>)
      })
    })
  }

  render(){
    return(
      <div className="list-container">
        <GroceryListComponent testPropToPass={"Grocery List"}/>
        {this.componentDidUpdate()}
      </div>
    )
  }
}

const mapStateToProps = recipe => ({
  ingredients: recipe.menuReducer.ingredients
})



export default connect(mapStateToProps, null)(ListContainer)

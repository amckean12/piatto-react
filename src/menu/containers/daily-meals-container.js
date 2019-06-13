import React, { Component } from 'react'
import { connect } from 'react-redux';
import MealBoxTitle from '../components/meal-box-title.js'
import MealBoxDescription from '../components/meal-box-description.js'
import MealBoxIngredients from '../components/meal-box-ingredients.js'
import AddToMenu from '../components/add-to-menu.js'
import "../meal-box.css"

class DailyMealsContainer extends Component {
  constructor(props){
    super(props);
  }

  addRecipe = (food) => {
    this.props.addRecipeToMenu(this.props.food)
  }

  render(){
    return(
      <div className="meal-wrapper">
        <MealBoxTitle title={this.props.food.name}/>
        <MealBoxDescription description={this.props.food.description}/>
        <MealBoxIngredients ingredients={this.props.food.ingredients}/>
        <AddToMenu addRecipe={() => {this.addRecipe(this.props.food)}}/>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  addRecipeToMenu: recipe => dispatch({type: "ADD_RECIPE_TO_MENU", recipe})
})
export default connect(null, mapDispatchToProps)(DailyMealsContainer)

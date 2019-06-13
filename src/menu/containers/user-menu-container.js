import React, { Component } from 'react'
import { connect } from 'react-redux';
import MealBoxTitle from '../components/meal-box-title.js'
import MealBoxDescription from '../components/meal-box-description.js'
import MealBoxIngredients from '../components/meal-box-ingredients.js'
import "../meal-box.css"

class UserMenuContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="meal-wrapper">
        <MealBoxTitle title={this.props.food.name}/>
        <MealBoxDescription description={this.props.food.description}/>
        <MealBoxIngredients ingredients={this.props.food.ingredients}/>
      </div>
    )
  }
}



export default connect(mapStateToProps)(UserMenuContainer)

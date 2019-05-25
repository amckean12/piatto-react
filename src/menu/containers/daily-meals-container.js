import React, { Component } from 'react'
import { connect } from 'react-redux';
import MealBoxTitle from '../components/meal-box-title.js'
import "../meal-box.css"

class DailyMealsContainer extends Component {
  constructor(props){
    super(props);
  }

  state = {
    mealBoxClassName: "meal-box"
  }

  render(){
    return(
      <div className={this.state.mealBoxClassName}>
        <MealBoxTitle recipeName={ this.props.food.name }/>
      </div>
    )
  }
}



export default DailyMealsContainer

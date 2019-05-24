import React, { Component } from 'react'
import { connect } from 'react-redux';
import MealBox from '../components/meal-box.js'
import "../daily-meal-container.css";

class DailyMealsContainer extends Component {

  state = {
    mealBoxClassName: "meal-box"
  }

  handleClick = () => {
    if(this.state.mealBoxClassName === "meal-box"){
      this.setState({ mealBoxClassName: 'meal-box open' })
    }else {
      this.setState({ mealBoxClassName: 'meal-box' })
    }
  }

  render(){
    return(
      <div className="daily-meals-container">

      </div>
    )
  }
}



export default DailyMealsContainer

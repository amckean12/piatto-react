import React, { Component } from 'react'
import { connect } from 'react-redux';
import MealBox from '../components/meal-box.js'
import "../daily-meal-container.css";

class DailyMealsContainer extends Component {

  render(){
    return(
      <div className="daily-meals-container">
        <MealBox />
      </div>
    )
  }
}



export default DailyMealsContainer

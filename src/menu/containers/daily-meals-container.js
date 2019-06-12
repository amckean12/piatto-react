import React, { Component } from 'react'
import { connect } from 'react-redux';
import MealBoxTitle from '../components/meal-box-title.js'
import MealBoxDescription from '../components/meal-box-description.js'
import MealBoxIngredients from '../components/meal-box-ingredients.js'
import "../meal-box.css"

class DailyMealsContainer extends Component {
  constructor(props){
    super(props);
  }

  state = {
    mealBoxClassName: "meal-box"
  }

  handleClick(event){
    if(this.state.mealBoxClassName === "meal-box open"){
      this.setState({
        mealBoxClassName: "meal-box"
      })
    }else{
        this.setState({
          mealBoxClassName: "meal-box open"
        })
    }
  }

  handleMealAdd(event){
    console.log("this method has been hit")
  }

  addDescriptionComponent(){
    return <MealBoxDescription mealDescription= { this.props.food.description } />
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



export default DailyMealsContainer

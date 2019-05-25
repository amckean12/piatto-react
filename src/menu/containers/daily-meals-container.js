import React, { Component } from 'react'
import { connect } from 'react-redux';
import MealBoxTitle from '../components/meal-box-title.js'
import MealBoxDescription from '../components/meal-box-description.js'
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
      <div className={this.state.mealBoxClassName} onClick={(event) => this.handleClick(event)}>
        <MealBoxTitle recipeName={ this.props.food.name } />
        { this.state.mealBoxClassName === "meal-box open" ? this.addDescriptionComponent() : <p>Click Me</p>}
        { this.state.mealBoxClassName === "meal-box open" ? <button onClick={(event) => this.handleMealAdd(event)}>Add to Menu</button> : <p>Click Me</p>}
      </div>
    )
  }
}



export default DailyMealsContainer

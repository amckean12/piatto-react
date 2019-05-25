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

  addDescriptionComponent(){

  }

  render(){
    return(
      <div className={this.state.mealBoxClassName} onClick={(event) => this.handleClick(event)}>
        <MealBoxTitle recipeName={ this.props.food.name } />
        { this.state.mealBoxClassName === "meal-box open" ? this.addDescriptionComponent() : <p>Click Me</p>}
      </div>
    )
  }
}



export default DailyMealsContainer

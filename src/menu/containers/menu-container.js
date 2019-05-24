import React, { Component } from 'react'
import { connect } from 'react-redux';
import DailyMealsContainer from './daily-meals-container.js'
import '../menu-container.css'

class MenuContainer extends Component {
  state = {

  }

  handleClick(e){
    e.preventDefault();
    console.log("Hello")
  }

  render(){
    return(
      <div className="menu-container">
        <div className="menu-for-user-container">
          <h1>Menu For Alex</h1>
        </div>
        <div className="search" onClick={(event) => this.handleClick(event)}>
        </div>
      </div>
    )
  }
}



export default MenuContainer


//Protype function to add days to JS date object <Need to make dynamic based upon user scroll patterns>

//
// saveDatesForComponentRender = (today, stopDate) => {
//   let dateArray = [];
//   let currentDate = today
//   while (today <= stopDate){
//     dateArray.push(new Date (currentDate))
//     debugger;
//     currentDate = currentDate.addDaysProto(1);
//     console.log(currentDate)
//   }
// }

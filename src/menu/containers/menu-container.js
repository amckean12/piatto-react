import React, { Component } from 'react'
import { connect } from 'react-redux';
import DailyMealsContainer from './daily-meals-container.js'


class MenuContainer extends Component {
  //Protype function to add days to JS date object <Need to make dynamic based upon user scroll patterns>
  addDaysProto = (days) => {
    let date = new Date();
    date.setDate(date.getDate() + days);
    console.log(date)
  }

  render(){
    return(
      <div className="menu-container">
        <h1>Menu For Alex</h1>
        {this.addDaysProto(8)}
      </div>
    )
  }
}



export default MenuContainer


// var date = new Date();
//
// function getDates(startDate, stopDate) {
//     var dateArray = new Array();
//     var currentDate = startDate;
//     while (currentDate <= stopDate) {
//         dateArray.push(new Date (currentDate));
//         currentDate = currentDate.addDays(1);
//     }
//     return dateArray;
// }

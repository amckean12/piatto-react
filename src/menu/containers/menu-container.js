import React, { Component } from 'react'
import { connect } from 'react-redux';
import DailyMealsContainer from './daily-meals-container.js'

class MenuContainer extends Component {


  render(){
    let today = new Date()
    console.log(today)
    let maxDay = today.setDate(today.getDate() + 7)
    console.log(maxDay)
    let todayParsed = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate()
    console.log(todayParsed)

    return(
      <div className="menu-container">
        <h1>Menu For Alex</h1>

      </div>
    )
  }
}



export default MenuContainer

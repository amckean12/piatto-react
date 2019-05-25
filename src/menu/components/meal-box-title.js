import React, { Component } from 'react'
import '../meal-box.css'

const MealBoxTitle = (props) => {
  return (
    <div className="meal-box-title-component">
      <p>{props.recipeName}</p>
    </div>
  )
}

export default MealBoxTitle

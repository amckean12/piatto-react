import React, { Component } from 'react'
import '../meal-box.css'

const MealBoxDescription = (props) => {
  return (
    <div className="meal-box-description-component">
      <p>{ props.mealDescription}</p>
    </div>
  )
}

export default MealBoxDescription

import React, { Component } from 'react'
import '../meal-box.css'

const MealBox = (props) => {
  return (
    <div className="meal-box-component">
      <h1>{props.food.name}</h1>
      <p>{props.food.description}</p>
    </div>
  )
}

export default MealBox

import React, { Component } from 'react'
import '../meal-box.css'

const MealBoxDescription = (props) => {
  return (
    <div className="meal-box-description">
      <p>{ props.description}</p>
    </div>
  )
}

export default MealBoxDescription

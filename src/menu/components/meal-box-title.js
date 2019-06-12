import React, { Component } from 'react'
import '../meal-box.css'

const MealBoxTitle = (props) => {
  return (
    <div className="meal-box-title">
      <h1>{ props.title}</h1>
    </div>
  )
}

export default MealBoxTitle

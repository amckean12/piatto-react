import React, { Component } from 'react'
import '../meal-box.css'

const MealBoxIngredients = (props) => {
  return (
    <div className="meal-box-ingredients">
      <h2>Ingredients</h2>
      <ul>
        {
          props.ingredients.map(ingredient =>
          <li>{ingredient.description}</li>)
        }
      </ul>
    </div>
  )
}

export default MealBoxIngredients

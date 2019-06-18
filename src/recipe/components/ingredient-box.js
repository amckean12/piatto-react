import React, { Component } from 'react'

const IngredientBox = (props) => {
  return (
    <div className="ingredient-pill">
      {props.ingredient}
    </div>
  )
}

export default IngredientBox

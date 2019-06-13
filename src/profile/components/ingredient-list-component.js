import React, { Component } from 'react'

const ingredientStyle = {
  position: "relative",
  width: "100%",
  'border-bottom':'1px solid #eee',
  'padding-left': "2%"
}

const IngredientList = (props) => {
  return (
    <div className="ingredient-description" style={ingredientStyle}>
      <p>{props.name}</p>
    </div>
  )
}

export default IngredientList

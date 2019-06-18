import React, { Component } from 'react'

const IngredientBox = (props) => {
  return (
    <div className="ingredient">
      {props.ingredient}
    </div>
  )
}

export default IngredientBox

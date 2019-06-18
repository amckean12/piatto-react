import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const IngredientBox = (props) => {
  return (
    <div className="ingredient-pill">
      {props.ingredient}
      <button onClick={props.onDeleteButtonClicked} name={props.ingredient} id="ingredient"><FontAwesomeIcon icon={faTimes} /></button>
    </div>
  )
}

export default IngredientBox

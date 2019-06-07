import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import '../pill.css'

const IngredientPill = (props) => {
  return (
    <div className="ingredient-pill">
       <div className="ingredient-tag">
        {props.ingredientName}
          <button className="ingredient-tag-exit" onClick={props.deleteIngredient} value={props.ingredientName}><FontAwesomeIcon icon= { faTimes }/></button>
       </div>
    </div>
  )
}

export default IngredientPill

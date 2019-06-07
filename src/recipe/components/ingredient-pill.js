import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import '../pill.css'

const IngredientPill = (props) => {
  return (
    <div className="ingredient-pill">
      Hamburger <FontAwesomeIcon icon={ faCoffee }/>
    </div>
  )
}

export default IngredientPill

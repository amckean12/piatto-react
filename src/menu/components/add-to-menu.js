import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import '../meal-box.css'


const AddToMenu = (props) => {
  return (
    <div className="add-to-menu">
      <button onClick={() => {props.addRecipe()}}><FontAwesomeIcon icon={faPlus} /></button>
    </div>
  )
}

export default AddToMenu

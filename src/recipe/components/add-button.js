import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddButton = (props) => {
  return (
    <div className="add-button">
      <button onClick={props.handleAdd}><FontAwesomeIcon icon={faPlus}/></button>
    </div>
  )
}

export default AddButton

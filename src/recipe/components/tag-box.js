import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const TagBox = (props) => {
  return (
    <div className="tag-pill">
      {props.tag}
      <button onClick={props.onDeleteButtonClicked}><FontAwesomeIcon icon={faTimes} /></button>
    </div>
  )
}

export default TagBox

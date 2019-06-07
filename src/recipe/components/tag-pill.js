import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import '../pill.css'

const TagPill = (props) => {
  return (
    <div className="tag-pill">
      <div className="tagname-tag">
       {props.tagName}
         <button className="tag-exit" onClick={props.deleteTag}><FontAwesomeIcon icon= { faTimes }/></button>
      </div>
    </div>
  )
}

export default TagPill

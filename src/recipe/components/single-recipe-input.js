import React, { Component } from 'react'


const SingleRecipeInput = (props) => {
  return (
    <div className="new-single-recipe-input">
      <h2>{props.inputTitle}</h2>
      <input type='text'></input>
    </div>
  )
}

export default SingleRecipeInput

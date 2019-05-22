import React, { Component } from 'react'

const componentPositioning = {
  position: "relative",
  bottom: "0",
  height: "50%",
  width: "100%",
}

const GroceryListComponent = (props) => {
  return (
    <div className="Grocery List" style={componentPositioning}>
      <h1> {props.testPropToPass} </h1>
      "Place Grocery List Component Here"
    </div>
  )
}

export default GroceryListComponent

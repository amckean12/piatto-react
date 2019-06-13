import React, { Component } from 'react'

const componentPositioning = {
  position: "relative",
  width: "100%",
  'border-bottom':'1px solid #eee'
}

const GroceryListComponent = (props) => {
  return (
    <div className="Grocery List" style={componentPositioning}>
      <h1>Grocery List</h1>
    </div>
  )
}

export default GroceryListComponent

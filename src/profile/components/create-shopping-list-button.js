import React, { Component } from 'react'

const CreateShoppingList = (props) => {
  return (
    <div className="create-shopping-list">
      <button onClick={() => {props.generateList()}}>Create Shopping List</button>
    </div>
  )
}

export default CreateShoppingList

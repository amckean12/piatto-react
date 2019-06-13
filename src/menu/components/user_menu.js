import React, { Component } from 'react'
import MealBoxTitle from './meal-box-title.js'
import MealBoxDescription from './meal-box-description.js'
import MealBoxIngredients from './meal-box-ingredients.js'
import '../meal-box.css'

const UserMenu = (props) => {
  return (
    <div className="meal-wrapper">
      <MealBoxTitle title={props.food.name}/>
      <MealBoxDescription description={props.food.description}/>
      <MealBoxIngredients ingredients={props.food.ingredients}/>
    </div>
  )
}

export default UserMenu

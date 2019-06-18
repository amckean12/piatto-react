import React, { Component } from 'react'
import { connect } from 'react-redux';
import IngredientBox from '../components/ingredient-box'
import TagBox from '../components/tag-box'

import '../recipe.css'


class NewRecipeDisplay extends Component {

  render(){
    return(
      <div className="new-recipe-display-container">
        <IngredientBox />
        <TagBox />
      </div>
    )
  }
}



export default(NewRecipeDisplay)

import React, { Component } from 'react'
import { connect } from 'react-redux';
import IngredientBox from '../components/ingredient-box'
import TagBox from '../components/tag-box'

import '../recipe.css'


class NewRecipeDisplay extends Component {

  constructor(props){
    super(props)
  }

  renderTags = () => {
    if(this.props.tags === undefined){
      return("")
    }else{
      return this.props.tags.map(tag =>{
        return(<TagBox tag={tag} onDeleteButtonClicked={this.props.onDeleteButtonClicked}/>)
      })
    }
  }


  renderIngredients = () => {
    if(this.props.ingredients === undefined){
      return("")
    }else{
      return this.props.ingredients.map(ingredient =>{
        return(<IngredientBox ingredient={ingredient} onDeleteButtonClicked={this.props.onDeleteButtonClicked}/>)
      })
    }
  }

  render(){
    return(
      <div className="new-recipe-display">
        <div className="display-box">
          {this.renderIngredients()}
        </div>
        <div className="display-box">
          {this.renderTags()}
        </div>
      </div>
    )
  }
}



export default(NewRecipeDisplay)

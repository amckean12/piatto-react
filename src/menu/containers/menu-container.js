import React, { Component } from 'react'
import { connect } from 'react-redux';
import DailyMealsContainer from './daily-meals-container.js'
import { fetchFood } from '../../actions/tag-lookup-action.js'
import '../menu-container.css'

class MenuContainer extends Component {
  state = {
    searchTag: '',
    mealBoxes: [],
  }

  handleChange(event) {
    this.setState({
      searchTag: event.target.value
    })
  }

//When the enter button is clicked within the function
  handleSubmit(event){
    event.preventDefault()
    this.props.fetchFood(this.state.searchTag)
    this.setState({
      searchTag: ''
    })
  }

  componentDidUpdate(){
    if (this.props.errors === null){
      return (<p>Tag Not Found</p>);
    } else if (this.props.displayedFood !== undefined) {
      return this.props.displayedFood.map( food =>{
        return(<DailyMealsContainer key={food.id} food={ food } />)
      })
    }
  }


  render(){
    return(
      <div className="menu-container">
        <div className="menu-for-user-container">
          <h1>Search Recipe</h1>
        </div>
        <div className="menu-search-form-container">
          <form className="menu-search-bar" onSubmit={(event) => this.handleSubmit(event)}>
            <input type="text" placeholder="Select a food type try: italian" onChange={(event) => this.handleChange(event)} value={this.state.searchTag}/>
          </form>
        </div>
        {this.componentDidUpdate()}
      </div>
    )
  }
}


const mapStateToProps = food => {
 return({
   displayedFood: food.foodReducer.food.recipes,
   errors: food.foodReducer.errors
 })
}

//fetchFood used in place of mapDispatchToProps (Same thing)
export default connect(mapStateToProps, { fetchFood })(MenuContainer)

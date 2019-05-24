import React, { Component } from 'react'
import { connect } from 'react-redux';
import DailyMealsContainer from './daily-meals-container.js'
import '../menu-container.css'

class MenuContainer extends Component {
  state = {
    searchTag: '',
  }

  handleChange(event) {
    this.setState({
      searchTag: event.target.value
    })
  }

//When the enter button is clicked within the function
  handleSubmit(event){
    event.preventDefault()
    console.log("method hit")
    this.setState({
      searchTag: ''
    })
  }


  render(){
    return(
      <div className="menu-container">
        <div className="menu-for-user-container">
          <h1>Menu For Alex</h1>
        </div>
        <form className="menu-search-bar" onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" placeholder="Select a food type try: #Italian" onChange={(event) => this.handleChange(event)} value={this.state.searchTag}/>
        </form>
      </div>
    )
  }
}



export default MenuContainer

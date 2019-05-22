import React, { Component } from 'react'
import { connect } from 'react-redux';
import LinkComponent from '../components/list-container-link.js'
import MacroTrackerWheel from '../components/macro-tracker-wheel.js'
import GroceryListComponent from '../components/grocery-list-component.js'

class ListContainer extends Component {


  render(){
    return(
      <div className="list-container">
        <LinkComponent linkName={"Nutrition Value"} />
        <MacroTrackerWheel />
        <GroceryListComponent testPropToPass={"Grocery List"}/>
      </div>
    )
  }
}

const mapStateToProps = user => ({
  email: user.userReducer.email
})



export default connect(mapStateToProps, null)(ListContainer)

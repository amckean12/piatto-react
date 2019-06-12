import React, { Component } from 'react'
import { connect } from 'react-redux';
import GroceryListComponent from '../components/grocery-list-component.js'

class ListContainer extends Component {


  render(){
    return(
      <div className="list-container">
        <GroceryListComponent testPropToPass={"Grocery List"}/>
      </div>
    )
  }
}

const mapStateToProps = user => ({
  email: user.userReducer.email
})



export default connect(mapStateToProps, null)(ListContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux';
import LinkComponent from '../components/list-container-link.js'
import MacroTrackerWheel from '../components/macro-tracker-wheel.js'

class ListContainer extends Component {


  render(){
    return(
      <div className="list-container">
        <LinkComponent linkName={"Nutrition Value"} />
        <MacroTrackerWheel />
      </div>
    )
  }
}

const mapStateToProps = user => ({
  email: user.userReducer.email
})



export default connect(mapStateToProps, null)(ListContainer)

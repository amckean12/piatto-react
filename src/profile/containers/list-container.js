import React, { Component } from 'react'
import { connect } from 'react-redux';
import LinkComponent from '../components/list-container-link.js'

class ListContainer extends Component {


  render(){
    return(
      <div className="list-container">
        <LinkComponent linkName={"Nutrition Value"} />
      </div>
    )
  }
}

const mapStateToProps = user => ({
  email: user.userReducer.email
})



export default connect(mapStateToProps, null)(ListContainer)

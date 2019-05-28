import React, { Component } from 'react'
import '../form.css'
import { connect } from 'react-redux'
import { userSignUpFetch } from "../../actions/signup-actions.js"
//Container CSS Section

//End CSS


//Start Component

class SignUp extends Component {
  state={
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    userSignUpFetch(this.state)
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    })
  }
    //this.props.userSignUpFetch(this.state)

  render(){
    return(
      <div className="form-container sign-up-container" onSubmit={(event) => this.handleSubmit(event)}>
        <form action="#">
          <h1>Create Account</h1>
          <input type="text" placeholder="First Name" name="first_name" onChange={(event) => this.handleChange(event)} value={this.state.first_name}/>
          <input type="text" placeholder="Last Name" name="last_name" onChange={(event) => this.handleChange(event)} value={this.state.last_name}/>
          <input type="email" placeholder="Email" name="email" onChange={(event) => this.handleChange(event)} value={this.state.email}/>
          <input type="password" placeholder="Password" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password}/>
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userSignUpFetch: newUserInfo => dispatch(userSignUpFetch(newUserInfo))
})


export default connect(null, mapDispatchToProps)(SignUp)

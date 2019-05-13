import React, { Component } from 'react'
import '../form.css'
//Container CSS Section

//End CSS


//Start Component

class SignUp extends Component {
  state={
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    //this.props.loginUser(this.state)
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    })
  }

  render(){
    return(
      <div className="form-container sign-up-container" onSubmit={(event) => this.handleSubmit(event)}>
        <form action="#">
          <h1>Create Account</h1>
          <input type="text" placeholder="First Name" name="firstName" onChange={(event) => this.handleChange(event)} value={this.state.firstName}/>
          <input type="text" placeholder="Last Name" name="lastName" onChange={(event) => this.handleChange(event)} value={this.state.lastName}/>
          <input type="email" placeholder="Email" name="email" onChange={(event) => this.handleChange(event)} value={this.state.email}/>
          <input type="password" placeholder="Password" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password}/>
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUp
